import { motion } from 'motion/react';
import { HACKATHONS_DATA } from '../data/portfolioData';
import WorkflowDiagram from './WorkflowDiagrams';

export default function HackathonsSection() {
  return (
    <section
      id="hackathons"
      className="relative z-10 mx-auto max-w-6xl border-t border-[var(--border-subtle)] px-6 py-24 lg:px-10 lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl [text-wrap:balance]">
          Experiments, ideas &amp; hackathons
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {HACKATHONS_DATA.map((item, idx) => {
          const isSpace = item.theme === 'space';
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 ${
                isSpace ? 'lg:col-span-7' : 'lg:col-span-5 flex flex-col justify-between'
              }`}
            >
              {isSpace && (
                <div className="relative overflow-hidden border-b border-[var(--border-subtle)]">
                  <WorkflowDiagram type="cosmic-commons" />
                </div>
              )}

              <div className="p-7 sm:p-9">
                <p className="text-xs font-medium tracking-wide text-[var(--accent-secondary)]">
                  {item.event}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                  {item.project}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  {item.description}
                </p>
              </div>

              {!isSpace && (
                <div className="px-7 pb-8 sm:px-9" aria-hidden="true">
                  <svg viewBox="0 0 320 72" className="h-16 w-full" fill="none">
                    <line
                      x1="28"
                      y1="36"
                      x2="292"
                      y2="36"
                      stroke="currentColor"
                      className="text-[var(--border-subtle)]"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M210 36 C 210 12, 110 12, 110 36"
                      stroke="#245BFF"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <circle r="3" fill="#245BFF">
                      <animateMotion
                        dur="3.4s"
                        repeatCount="indefinite"
                        path="M 28 36 L 274 36"
                      />
                    </circle>
                    {[
                      { cx: 28, label: 'Goal', color: '#245BFF' },
                      { cx: 110, label: 'Plan', color: '#245BFF' },
                      { cx: 192, label: 'Gaps', color: '#00BFA6' },
                      { cx: 274, label: 'Report', color: '#245BFF' },
                    ].map((node) => (
                      <g key={node.label}>
                        <circle
                          cx={node.cx}
                          cy="36"
                          r="7"
                          fill="var(--bg-primary)"
                          stroke={node.color}
                          strokeWidth="2"
                        />
                        <text
                          x={node.cx}
                          y="62"
                          textAnchor="middle"
                          className="fill-[var(--text-secondary)] text-[10px] font-medium"
                        >
                          {node.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
