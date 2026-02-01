import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled.div`
  z-index: 3;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00ffff, #0080ff, #8000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: #cccccc;
  margin-bottom: 2rem;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #aaaaaa;
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #00ffff, #0080ff);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 255, 255, 0.3);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileCard = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 450px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 280px;
    height: 360px;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 70%;
  background-image: url('/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.3) 70%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }
`;

const CardInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const GreetingText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  padding: 1rem 2rem;
  border-radius: 10px;
  border: 2px solid #00ffff;
  color: #00ffff;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`;

const Hero = () => {
  const [showGreeting, setShowGreeting] = useState(false);

  return (
    <HeroContainer>
      <ContentWrapper>
        <TextContent>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ABAASA BYOONA
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer & System Builder
          </Subtitle>
          
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting innovative web solutions and robust systems with modern technologies. 
            Passionate about creating seamless user experiences and scalable architectures 
            that drive business success.
          </Description>
          
          <CTAButton
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </CTAButton>
        </TextContent>
        
        <ImageContainer>
          <ProfileCard
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setShowGreeting(true)}
            onHoverEnd={() => setShowGreeting(false)}
          >
            <ProfileImage />
            <CardInfo>
              <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Abaasa Byoona</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Full Stack Developer</p>
            </CardInfo>
            
            {showGreeting && (
              <GreetingText
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                Hey there, I'm Abaasa! 👋
              </GreetingText>
            )}
          </ProfileCard>
        </ImageContainer>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;

