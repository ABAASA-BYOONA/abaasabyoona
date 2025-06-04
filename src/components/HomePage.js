import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Hero from './Hero';
import TechScroll from './TechScroll';
import Projects from './Projects';
import Contact from './Contact';
import BackgroundCanvas from './BackgroundCanvas';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #000000;
  position: relative;
  overflow-x: hidden;
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  position: relative;
  z-index: 2;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Suspense fallback={<div>Loading 3D Scene...</div>}>
        <BackgroundCanvas />
      </Suspense>
      
      <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </Section>
      
      <TechScroll />
      
      <Section>
        <Projects />
      </Section>
      
      <Section>
        <Contact />
      </Section>
    </PageContainer>
  );
};

export default HomePage;

