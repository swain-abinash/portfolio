import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useTheme } from './hooks/useTheme';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Skeleton from './components/ui/Skeleton';
import ErrorBoundary from './components/layout/ErrorBoundary';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const SystemDesign = lazy(() => import('./components/sections/SystemDesign'));
const Blog = lazy(() => import('./components/sections/Blog'));
const Contact = lazy(() => import('./components/sections/Contact'));
const NotFound = lazy(() => import('./components/sections/NotFound'));

const SectionLoading = () => (
  <div className="container-custom py-20">
    <Skeleton className="h-12 w-1/3 mb-8" />
    <Skeleton className="h-64 w-full" />
  </div>
);

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Helmet>
            <title>Full Stack Developer Portfolio</title>
            <meta name="description" content="Full Stack Developer with 3+ years of experience specialized in React, Node.js, and Cloud architectures." />
            <meta property="og:title" content="Senior Full Stack Engineer Portfolio" />
            <meta property="og:description" content="Building high-performance, scalable web applications from 0 to 1." />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
          <Layout>
            <Suspense fallback={<SectionLoading />}>
              <Routes>
                <Route path="/" element={
                  <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <SystemDesign />
                    <Experience />
                    <Blog />
                    <Contact />
                  </main>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
