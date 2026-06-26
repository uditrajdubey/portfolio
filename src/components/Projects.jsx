import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowUpRight, HiFolder } from 'react-icons/hi2';
import SectionHeading from './SectionHeading';

const projects = [
  {
    number: '01',
    title: 'End-to-End GitOps Pipeline',
    year: '2025',
    tech: ['Java Spring Boot', 'Jenkins', 'AWS EKS Fargate', 'Argo CD', 'Docker', 'SonarQube', 'JFrog', 'Trivy', 'Maven', 'Java 8/21'],
    description: [
      'Provisioned a serverless AWS EKS Fargate cluster using eksctl and hosted CI/CD tools on AWS EC2.',
      'Built a modular Jenkins declarative pipeline using shared libraries to automate build, test, and security phases.',
      'Resolved multi-version Java conflicts (Java 8/21) across Maven and SonarQube by isolating JAVA_HOME per stage.',
      'Integrated SonarQube quality gates via webhooks and embedded Trivy for automated container scanning.',
      'Stored JAR builds in JFrog Artifactory and pushed optimized eclipse-temurin Docker images to DockerHub.',
      'Deployed Argo CD on EKS to auto-sync GitHub manifest updates directly to Kubernetes with self-healing enabled.',
    ],
    githubUrl: 'https://github.com/uditrajdubey',
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="projects" ref={ref} style={{ position: 'relative' }}>
      {}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '0',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(188,123,111,0.03), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <SectionHeading number="03" title="Featured Projects" />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card glass-card"
              custom={i}
              variants={projectVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="project-number">
                <HiFolder style={{ opacity: 0.5, marginRight: '1rem', color: 'var(--violet)' }} />
                {project.number}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="skill-pill"
                      style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="project-description">
                  {project.description.map((desc, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.15 + j * 0.08, duration: 0.5 }}
                    >
                      {desc}
                    </motion.li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                      <HiArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
