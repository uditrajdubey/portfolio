import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from './SectionHeading';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi2';

const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    school: 'NIET, Gr. Noida, UP',
    date: 'Expected: Aug 2026',
    grade: 'CGPA: 9.07/10',
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    school: 'Sharda Devi Degree College, Jhansi',
    date: '2021 — 2024',
    grade: 'Percentage: 74.6%',
  },
];

const experience = [
  {
    role: 'QA Trainee',
    company: 'Cloud Analogy, Greater Noida, UP',
    date: 'Aug 2025 — Nov 2025',
    highlights: [
      'Executed functional test cases for Salesforce Sales and Service Clouds, validating core lead management and SLA case workflows.',
      'Logged and tracked bugs across multiple release cycles, performing rigorous regression testing to ensure stable deployment.',
      'Collaborated with cross-functional teams to deliver daily status checklists and metrics aligned with operational timelines.',
    ],
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="about" ref={ref} style={{ position: 'relative' }}>
      {}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(90,50,42,0.05), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />
      
      <div className="container">
        <SectionHeading number="01" title="About Me" />

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              I'm an <span className="about-highlight gradient-text">aspiring DevOps Engineer</span> with 
              hands-on experience building CI/CD pipelines, containerized deployments, and{' '}
              <span className="about-highlight">cloud infrastructure on AWS</span>. Currently pursuing my MCA 
              with a CGPA of 9.07/10.
            </p>
            <p>
              Skilled in{' '}
              <span className="about-highlight">Docker, Kubernetes, Jenkins, GitHub Actions, and Terraform</span>, 
              with a solid foundation in Linux administration, Bash scripting, and networking fundamentals. I have 
              a proven ability to design GitOps-driven, automated delivery workflows incorporating security and 
              quality gates.
            </p>
            <p>
              My experience spans{' '}
              <span className="about-highlight">QA testing at Cloud Analogy</span> to building{' '}
              <span className="about-highlight">end-to-end GitOps pipelines</span> — I'm eager to contribute to 
              a fast-paced DevOps or Cloud Engineering team.
            </p>
          </motion.div>

          <motion.div
            className="education-timeline"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Experience */}
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="education-item"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                  <div style={{ padding: '0.5rem', background: 'var(--grad-subtle)', borderRadius: '8px', color: 'var(--orange)' }}>
                    <HiBriefcase size={20} />
                  </div>
                  <div className="education-degree">{exp.role}</div>
                </div>
                <div className="education-school" style={{ paddingLeft: '2.8rem' }}>
                  {exp.company}
                </div>
                <div className="education-date" style={{ paddingLeft: '2.8rem' }}>{exp.date}</div>
                <ul style={{ paddingLeft: '2.8rem', marginTop: '0.75rem' }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-muted)', 
                      lineHeight: '1.6', 
                      marginBottom: '0.4rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--violet)', fontWeight: 700 }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Education */}
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="education-item"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                  <div style={{ padding: '0.5rem', background: 'var(--grad-subtle)', borderRadius: '8px', color: 'var(--violet)' }}>
                    <HiAcademicCap size={20} />
                  </div>
                  <div className="education-degree">{edu.degree}</div>
                </div>
                <div className="education-school" style={{ paddingLeft: '2.8rem' }}>
                  {edu.school}
                </div>
                <div className="education-date" style={{ paddingLeft: '2.8rem' }}>{edu.date}</div>
                {edu.grade && (
                  <div className="education-coursework" style={{ paddingLeft: '2.8rem' }}>
                    <strong>{edu.grade}</strong>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
