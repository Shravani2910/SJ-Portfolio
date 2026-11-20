import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES, SKILLS_DATA, type SkillItem } from '../data/portfolioData';

const WEIGHT_CLASSES: Record<SkillItem['weight'], string> = {
  xl: 'font-display text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold tracking-tight',
  lg: 'font-display text-xl sm:text-2xl font-bold tracking-tight',
  md: 'font-display text-base sm:text-lg font-semibold',
  sm: 'text-sm sm:text-base font-medium',
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof SKILL_CATEGORIES)[number]>('All');

  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-6xl border-t border-[var(--border-subtle)] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Editorial Heading, Description & Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl [text-wrap:balance]">
            Skills and tools
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
            I enjoy experimenting with emerging technologies and building intelligent applications
            that solve real problems.
          </p>

          {/* Interactive Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="mt-8 flex flex-wrap gap-2"
          >
            {SKILL_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                    isSelected
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Editorial Typography Skill Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8"
        >
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-5">
            {SKILLS_DATA.map((skill, idx) => {
              const isHighlighted =
                selectedCategory === 'All' || skill.category === selectedCategory;

              return (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(idx * 0.025, 0.45),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -3 }}
                  className={`cursor-default select-none transition-all duration-200 ${
                    WEIGHT_CLASSES[skill.weight]
                  } ${
                    isHighlighted
                      ? skill.weight === 'xl'
                        ? 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'
                        : skill.weight === 'lg'
                        ? 'text-[var(--text-primary)]/90 hover:text-[var(--accent-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--accent-secondary)]'
                      : 'text-[var(--text-secondary)]/25'
                  }`}
                >
                  {skill.name}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
