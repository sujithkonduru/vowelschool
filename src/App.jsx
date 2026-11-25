import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Shell, ScrollTop, RouteMeta } from './components/Layout.jsx';
import { PageTransition } from './motion/PageTransition.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Schools from './pages/Schools.jsx';
import SchoolProfile from './pages/SchoolProfile.jsx';
import Academics from './pages/Academics.jsx';
import CampusLife from './pages/CampusLife.jsx';
import Events from './pages/Events.jsx';
import EventDetail from './pages/EventDetail.jsx';
import Gallery from './pages/Gallery.jsx';
import Admissions from './pages/Admissions.jsx';
import Contact from './pages/Contact.jsx';
import Resources from './pages/Resources.jsx';
import NotFound, { Results, Alumni } from './pages/Info.jsx';

/**
 * Routes are keyed by pathname so AnimatePresence can run a real exit before
 * the next page enters. `initial={false}` prevents a flash of empty page on
 * first paint.
 */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/schools/:slug" element={<SchoolProfile />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/results" element={<Results />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <ScrollTop />
        <RouteMeta />
        <Shell>
          <AnimatedRoutes />
        </Shell>
      </MotionConfig>
    </BrowserRouter>
  );
}
