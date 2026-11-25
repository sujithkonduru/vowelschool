/**
 * Downloads the public WordPress media library into public/assets/original.
 * Run: npm run assets:sync
 * The source site's public REST API may limit pagination or access. Review
 * downloaded assets and map them to the right content before production.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const base = 'https://vowelites.com/wp-json/wp/v2/media';
const out = path.resolve('public/assets/original');
await fs.mkdir(out, {recursive:true});
let page = 1, total = 0;
while (page <= 30) {
  const url = `${base}?per_page=100&page=${page}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Media API stopped at page ${page}: ${res.status} ${res.statusText}`);
    break;
  }
  const items = await res.json();
  if (!items.length) break;
  for (const item of items) {
    const src = item.source_url;
    if (!src) continue;
    const ext = path.extname(new URL(src).pathname) || '.jpg';
    const slug = (item.slug || `media-${item.id}`).replace(/[^a-z0-9-_]/gi,'-');
    const filename = `${item.id}-${slug}${ext}`;
    try {
      const image = await fetch(src);
      if (!image.ok) continue;
      await fs.writeFile(path.join(out, filename), Buffer.from(await image.arrayBuffer()));
      total++;
    } catch (e) {
      console.warn(`Skipped ${src}: ${e.message}`);
    }
  }
  page++;
}
console.log(`Downloaded ${total} media files to ${out}`);
