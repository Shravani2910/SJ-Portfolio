
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 65%'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-6xl border-t border-[var(--border-subtle)] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Left: Experience Timeline */}
        <div className="lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl [text-wrap:balance]"
          >
            Where I&apos;ve been building
          </motion.h2>

          <div ref={timelineRef} className="relative mt-12 pl-8 sm:pl-10">
            {/* Static background vertical rail */}
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[7px] w-[2px] bg-[var(--border-subtle)]"
            />
            {/* Animated scroll-driven cobalt progress rail */}
            <motion.div
              aria-hidden="true"
              style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
              className="absolute top-2 bottom-2 left-[7px] w-[2px] bg-[var(--accent-primary)]"
            />

            <ol className="space-y-12">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <motion.li
                  key={exp.id}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Timeline node */}
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 -left-8 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--accent-primary)] bg-[var(--bg-primary)] sm:-left-10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
                  </span>

                  <p className="font-mono-tabular text-xs font-medium text-[var(--accent-primary)] sm:text-sm">
                    {exp.period}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-base font-medium text-[var(--text-secondary)]">
                    {exp.company}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right: Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Education
          </h2>

          <div className="mt-12 space-y-5">
            {EDUCATION_DATA.map((education, index) => (
              <motion.div
                key={education.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono-tabular text-xs font-medium text-[var(--accent-secondary)] sm:text-sm">
                    {education.period}
                  </p>

                  {education.status && (
                    <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                      {education.status}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                  {education.degree}
                </h3>

                <p className="mt-2 text-base font-medium text-[var(--text-secondary)]">
                  {education.institution}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
