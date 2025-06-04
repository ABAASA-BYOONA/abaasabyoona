import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ExternalLink, Code, Globe } from 'lucide-react';

const ProjectsContainer = styled.div`
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #00ffff, #0080ff, #8000ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2);
    border-color: rgba(0, 255, 255, 0.3);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${props => props.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00ffff;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba(0, 255, 255, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  border: 1px solid rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.isSystem ? 'rgba(255, 0, 128, 0.9)' : 'rgba(0, 255, 128, 0.9)'};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
`;

const projects = [
  {
    title: "Gamil Marketing",
    description: "A comprehensive digital marketing platform featuring modern design, responsive layouts, and engaging user interface. Built with cutting-edge web technologies to deliver exceptional user experience.",
    tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://gamilmarketing.vercel.app",
    gradient: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
    icon: "📊",
    type: "website"
  },
  {
    title: "Shoppie UG",
    description: "Modern e-commerce platform with sleek design and intuitive user interface. Features product catalogs, shopping cart functionality, and seamless user experience for online retail.",
    tech: ["React", "E-commerce", "UI/UX", "JavaScript"],
    link: "https://shoppieug.vercel.app",
    gradient: "linear-gradient(135deg, #4834d4, #686de0)",
    icon: "🛍️",
    type: "website"
  },
  {
    title: "Sterling Dental Clinic",
    description: "Professional healthcare website for Sterling Dental Clinic featuring appointment booking, service information, and patient resources. Clean, trustworthy design focused on patient care.",
    tech: ["HTML5", "CSS3", "JavaScript", "Healthcare"],
    link: "https://sterlingdentalclinickampala.com",
    gradient: "linear-gradient(135deg, #00b894, #00cec9)",
    icon: "🦷",
    type: "website"
  },
  {
    title: "Sterling System",
    description: "Comprehensive management system for Sterling Dental Clinic with patient records, appointment scheduling, inventory management, and reporting. Full-stack solution with robust backend infrastructure.",
    tech: ["C#", ".NET", "SQL Server", "System Architecture"],
    link: "https://sterling-system.vercel.app",
    gradient: "linear-gradient(135deg, #a55eea, #26de81)",
    icon: "💻",
    type: "system"
  }
];

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </SectionTitle>
      
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectImage gradient={project.gradient}>
              <CategoryBadge isSystem={project.type === 'system'}>
                {project.type === 'system' ? 'SYSTEM' : 'WEBSITE'}
              </CategoryBadge>
              <div style={{ zIndex: 1, fontSize: '4rem' }}>{project.icon}</div>
            </ProjectImage>
            
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <ProjectTech>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </ProjectTech>
              
              <ProjectLinks>
                <ProjectLink 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Globe size={16} />
                  Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;

