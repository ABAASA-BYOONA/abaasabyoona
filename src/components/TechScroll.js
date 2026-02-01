import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  width: 100%;
  height: 150px;
  background: rgba(0, 255, 255, 0.05);
  border-top: 1px solid rgba(0, 255, 255, 0.2);
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;

const ScrollTrack = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 4rem;
  white-space: nowrap;
`;

const TechIcon = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: 80px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 255, 255, 0.3);
  
  &:hover {
    background: rgba(0, 255, 255, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 255, 255, 0.3);
  }
`;

const TechName = styled.span`
  font-size: 0.8rem;
  color: #cccccc;
  font-weight: 500;
`;

const technologies = [
  { name: 'HTML5', icon: '🌐', color: '#E34F26' },
  { name: 'CSS3', icon: '🎨', color: '#1572B6' },
  { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Vue.js', icon: '💚', color: '#4FC08D' },
  { name: 'C#', icon: '💻', color: '#239120' },
  { name: 'SQL', icon: '🗄️', color: '#336791' },
  { name: 'C', icon: '⚙️', color: '#A8B9CC' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  { name: 'Git', icon: '📚', color: '#F05032' },
  { name: 'WordPress', icon: '🌐', color: '#21759B' }
];

const TechScroll = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <ScrollContainer>
      <ScrollTrack
        animate={{ x: [0, -1920] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <TechIcon
            key={`${tech.name}-${index}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconWrapper>
              {tech.icon}
            </IconWrapper>
            <TechName>{tech.name}</TechName>
          </TechIcon>
        ))}
      </ScrollTrack>
      
      {/* Gradient overlays for smooth fade effect */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(90deg, #000000 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(270deg, #000000 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
    </ScrollContainer>
  );
};

export default TechScroll;

