import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from './SectionHeading';
import { HiCheckBadge } from 'react-icons/hi2';

const certifications = [
  { name: 'Applied Database System', issuer: 'Oracle', year: '2024' },
  { name: 'Python Essentials – 1', issuer: 'Cisco', year: '2024' },
];

const achievements = [
  'Class Representative in MCA; awarded the prestigious NIET Tuition Fee Waiver (FW) seat, achieving a rank within the top 5% of eligible candidates.',
  'Python Programming Workshop – NIET, October 2024: Core Python concepts, scripting, and debugging.',
  'Participated in Code Fever 3.0 at Annual Tech Fest, NIET.',
];

const marqueeItems = [...certifications, ...certifications, ...certifications];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="certifications" ref={ref} style={{ overflow: 'hidden' }}>
      <div className="container">
        <SectionHeading number="04" title="Certifications & Achievements" />
      </div>

      <motion.div
        className="cert-marquee-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="cert-marquee">
          {marqueeItems.map((cert, i) => (
            <div key={`${cert.name}-${i}`} className="cert-card glass-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.6rem', background: 'var(--grad-subtle)', borderRadius: '12px', color: 'var(--violet)' }}>
                  <HiCheckBadge size={24} />
                </div>
                <div>
                  <h4 className="cert-name" style={{ marginBottom: '0.2rem' }}>{cert.name}</h4>
                  <p className="cert-issuer" style={{ margin: 0 }}>{cert.issuer}</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <span className="cert-year skill-pill">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <motion.div
          className="gradient-border-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  paddingBottom: i < achievements.length - 1 ? '1.5rem' : 0,
                  borderBottom: i < achievements.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                }}
              >
                <span
                  className="gradient-text"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    opacity: 0.4,
                    flexShrink: 0,
                    paddingTop: '0.15rem',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.75',
                  margin: 0,
                }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
