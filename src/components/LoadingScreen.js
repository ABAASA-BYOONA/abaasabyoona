import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NameText = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: #00ffff;
  text-shadow: 0 0 20px #00ffff;
  font-family: 'Courier New', monospace;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ComputerStructure = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 200px;
  border: 2px solid #00ffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 20px;
    background: #00ffff;
    border-radius: 10px 10px 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 20px;
    background: #00ffff;
    border-radius: 0 0 10px 10px;
  }
`;

const Screen = styled.div`
  width: 80%;
  height: 60%;
  background: #000;
  border: 1px solid #00ffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
`;

const LoadingScreen = () => {
  const [showComputer, setShowComputer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComputer(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      <NameContainer>
        <NameText
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: showComputer ? -100 : 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ABAASA
        </NameText>
        
        <NameText
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: showComputer ? 100 : 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          BYOONA
        </NameText>
        
        {showComputer && (
          <ComputerStructure
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Screen>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                LOADING...
              </motion.div>
            </Screen>
          </ComputerStructure>
        )}
      </NameContainer>
    </LoadingContainer>
  );
};

export default LoadingScreen;

