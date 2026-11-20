import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '../data/portfolioData';
import WorkflowDiagram, { type WorkflowType } from './WorkflowDiagrams';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProject = PROJECTS_DATA.find((p) => p.featured) ?? PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => p.id !== featuredProject.id);

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-6xl border-t border-[var(--border-subtle)] px-6 py-24 lg:px-10 lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
      >
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl [text-wrap:balance]">
            Selected projects
          </h2>
          <p className="mt-3 max-w-xl text-base text-[var(--text-secondary)]">
            Applied machine learning, retrieval-augmented generation, and stateful agentic systems.
          </p>
        </div>
      </motion.div>

      {/* Featured Project: AI Research Agent - Lens (Dominant Top Showcase) */}
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setSelectedProject(featuredProject)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedProject(featuredProject);
          }
        }}
        className="group mb-10 grid cursor-pointer grid-cols-1 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 transition-colors duration-300 hover:border-[var(--accent-primary)]/60 lg:grid-cols-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
      >
        <div className="relative overflow-hidden border-b border-[var(--border-subtle)] lg:col-span-7 lg:border-r lg:border-b-0">
          <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <WorkflowDiagram type={featuredProject.id as WorkflowType} compact />
          </div>
        </div>

        <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-5">
          <div>
            <p className="text-xs font-medium tracking-wide text-[var(--accent-primary)]">
              Featured · {featuredProject.subtitle}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl group-hover:text-[var(--accent-primary)] transition-colors">
              {featuredProject.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {featuredProject.description}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-5">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[var(--text-secondary)]">
              {featuredProject.technologies.map((tech, idx) => (
                <span key={tech} className="inline-flex items-center gap-2">
                  <span>{tech}</span>
                  {idx < featuredProject.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-[var(--accent-primary)]">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-primary)]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </motion.article>

      {/* Asymmetrical Editorial Grid for Secondary Projects (7 / 5 split) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {secondaryProjects.map((project, index) => {
          const colSpan = index === 0 ? 'lg:col-span-7' : 'lg:col-span-5';
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className={`group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/55 transition-colors duration-300 hover:border-[var(--accent-primary)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${colSpan}`}
            >
              <div className="relative overflow-hidden border-b border-[var(--border-subtle)]">
                <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  <WorkflowDiagram type={project.id as WorkflowType} compact />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-7">
                <div>
                  <p className="text-xs font-medium tracking-wide text-[var(--accent-secondary)]">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl group-hover:text-[var(--accent-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-4">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[var(--text-secondary)]">
                    {project.technologies.map((tech, idx) => (
                      <span key={tech} className="inline-flex items-center gap-2">
                        <span>{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-[var(--accent-primary)]">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-primary)]" />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Lightbox Modal for Project Detail */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project preview"
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="border-b border-[var(--border-subtle)]">
              <WorkflowDiagram type={selectedProject.id as WorkflowType} />
            </div>

            <div className="p-7 sm:p-9">
              <p className="text-xs font-medium tracking-wide text-[var(--accent-primary)]">
                {selectedProject.subtitle}
              </p>
              <h3
                id="project-modal-title"
                className="mt-2 font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl"
              >
                {selectedProject.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
                {selectedProject.description}
              </p>

              <div className="mt-6 border-t border-[var(--border-subtle)] pt-5">
                <p className="text-xs font-medium text-[var(--text-secondary)]">Technologies</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-[var(--text-primary)]">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center gap-2.5">
                      <span>{tech}</span>
                      {idx < selectedProject.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-[var(--accent-primary)]">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
