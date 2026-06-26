import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCodeBracket, HiCloud, HiCog6Tooth, HiWrenchScrewdriver, HiServerStack, HiShieldCheck } from 'react-icons/hi2';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: 'Cloud',
    icon: <HiCloud />,
    skills: ['AWS (EC2, S3, IAM, EKS, VPC, Subnet)'],
    span: 1,
  },
  {
    title: 'Containers & Orchestration',
    icon: <HiServerStack />,
    skills: ['Docker', 'Kubernetes (Pods, Deployments, Services, EKS)'],
    span: 2,
  },
  {
    title: 'CI/CD & IaC',
    icon: <HiCog6Tooth />,
    skills: ['Jenkins', 'GitHub Actions', 'Terraform', 'Argo CD'],
    span: 2,
  },
  {
    title: 'Monitoring & Scripting',
    icon: <HiWrenchScrewdriver />,
    skills: ['Prometheus', 'Grafana (basics)', 'Linux (Ubuntu/CentOS)', 'Bash Scripting'],
    span: 1,
  },
  {
    title: 'Networking & Security',
    icon: <HiShieldCheck />,
    skills: ['TCP/IP', 'DNS', 'Load Balancing', 'VPC', 'Security Groups', 'SonarQube', 'Trivy'],
    span: 3,
  },
  {
    title: 'Programming & Testing',
    icon: <HiCodeBracket />,
    skills: ['Python', 'SQL', 'Java', 'Manual Testing', 'Test Case Design', 'Bug Reporting', 'Regression Testing'],
    span: 3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2 + i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="skills" ref={ref} style={{ position: 'relative' }}>
      {}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(113,138,158,0.04), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <SectionHeading number="02" title="Skills & Tools" />

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={`skill-card glass-card ${cat.span > 1 ? `span-${cat.span}` : ''}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="skill-card-icon">{cat.icon}</div>
              <h3 className="skill-card-title">{cat.title}</h3>
              <div className="skill-card-pills">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 + j * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(90,50,42,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
