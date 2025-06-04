import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Phone, MessageCircle, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const ContactContainer = styled.div`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #00ffff, #0080ff, #8000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  color: #00ffff;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: #cccccc;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 255, 0.1);
    border-color: rgba(0, 255, 255, 0.3);
    color: #00ffff;
    transform: translateX(10px);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(0, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ffff;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: #aaaaaa;
  margin-bottom: 0.2rem;
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const SocialMedia = styled.div`
  text-align: left;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: #cccccc;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.hoverColor || 'rgba(0, 255, 255, 0.1)'};
    border-color: ${props => props.borderColor || 'rgba(0, 255, 255, 0.3)'};
    color: ${props => props.textColor || '#00ffff'};
    transform: translateY(-5px);
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.bgColor || 'rgba(0, 255, 255, 0.2)'};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.iconColor || '#00ffff'};
  flex-shrink: 0;
`;

const GetInTouch = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 3rem;
  backdrop-filter: blur(10px);
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #00ffff, #0080ff);
  color: #000;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 255, 255, 0.3);
  }
`;

const Contact = () => {
  const contactInfo = [
    {
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      value: "+256 782 783 221",
      href: "https://wa.me/256782783221"
    },
    {
      icon: <Phone size={24} />,
      label: "Backup Number",
      value: "+256 701 122 665",
      href: "tel:+256701122665"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      name: "Instagram",
      handle: "@the.lost.emoji",
      href: "https://instagram.com/the.lost.emoji",
      bgColor: "rgba(225, 48, 108, 0.2)",
      iconColor: "#e1306c",
      hoverColor: "rgba(225, 48, 108, 0.1)",
      borderColor: "rgba(225, 48, 108, 0.3)",
      textColor: "#e1306c"
    },
    {
      icon: <Twitter size={20} />,
      name: "Twitter",
      handle: "@abaasa_byoona",
      href: "https://twitter.com/abaasa_byoona",
      bgColor: "rgba(29, 161, 242, 0.2)",
      iconColor: "#1da1f2",
      hoverColor: "rgba(29, 161, 242, 0.1)",
      borderColor: "rgba(29, 161, 242, 0.3)",
      textColor: "#1da1f2"
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      handle: "abaasa-byoona",
      href: "https://linkedin.com/in/abaasa-byoona",
      bgColor: "rgba(0, 119, 181, 0.2)",
      iconColor: "#0077b5",
      hoverColor: "rgba(0, 119, 181, 0.1)",
      borderColor: "rgba(0, 119, 181, 0.3)",
      textColor: "#0077b5"
    },
    {
      icon: <Github size={20} />,
      name: "GitHub",
      handle: "@abaasa-byoona",
      href: "https://github.com/abaasa-byoona",
      bgColor: "rgba(255, 255, 255, 0.2)",
      iconColor: "#ffffff",
      hoverColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.3)",
      textColor: "#ffffff"
    }
  ];

  return (
    <ContactContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </SectionTitle>
      
      <ContactGrid>
        <ContactInfo>
          <InfoTitle>Contact Information</InfoTitle>
          {contactInfo.map((contact, index) => (
            <ContactItem
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <IconWrapper>{contact.icon}</IconWrapper>
              <ContactText>
                <ContactLabel>{contact.label}</ContactLabel>
                <ContactValue>{contact.value}</ContactValue>
              </ContactText>
            </ContactItem>
          ))}
        </ContactInfo>
        
        <SocialMedia>
          <InfoTitle>Social Media</InfoTitle>
          <SocialGrid>
            {socialLinks.map((social, index) => (
              <SocialLink
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                bgColor={social.bgColor}
                iconColor={social.iconColor}
                hoverColor={social.hoverColor}
                borderColor={social.borderColor}
                textColor={social.textColor}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SocialIcon bgColor={social.bgColor} iconColor={social.iconColor}>
                  {social.icon}
                </SocialIcon>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{social.name}</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{social.handle}</div>
                </div>
              </SocialLink>
            ))}
          </SocialGrid>
        </SocialMedia>
      </ContactGrid>
      
      <GetInTouch
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <CTAText>
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
        </CTAText>
        <CTAButton
          href="https://wa.me/256782783221?text=Hello%20Abaasa,%20I'd%20like%20to%20discuss%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={20} />
          Start a Conversation
        </CTAButton>
      </GetInTouch>
    </ContactContainer>
  );
};

export default Contact;

