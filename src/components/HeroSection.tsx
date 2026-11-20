import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Palette } from 'lucide-react';
import { HERO_DATA, PORTFOLIO_ASSETS } from '../data/portfolioData';

function ClaudeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 2.5L13.7 8.4L19.1 5.3L15.6 10.4L21.5 12L15.6 13.6L19.1 18.7L13.7 15.6L12 21.5L10.3 15.6L4.9 18.7L8.4 13.6L2.5 12L8.4 10.4L4.9 5.3L10.3 8.4L12 2.5Z"
        fill="#E08A4B"
      />
    </svg>
  );
}

function VsCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M17.5 3.2L8.6 11.4L4.8 8.5L3 9.4V14.6L4.8 15.5L8.6 12.6L17.5 20.8L21 19.1V4.9L17.5 3.2ZM17.5 8.1V15.9L12.1 12L17.5 8.1Z"
        fill="#245BFF"
      />
    </svg>
  );
}

function FourPointStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0C12 7.5 16.5 12 24 12C16.5 12 12 16.5 12 24C12 16.5 7.5 12 0 12C7.5 12 12 7.5 12 0Z" />
    </svg>
  );
}

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:px-10 lg:pt-40 lg:pb-32"
    >
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Left Column: Editorial Introduction */}
        <div className="lg:col-span-6 lg:pr-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]"
          >
            <MapPin className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />
            <span>{HERO_DATA.location}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.06] [text-wrap:balance]"
          >
            {HERO_DATA.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-display text-2xl font-bold tracking-tight text-[var(--accent-primary)] sm:text-3xl lg:text-4xl"
          >
            {HERO_DATA.supportingHeadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            {HERO_DATA.introduction}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2.5 rounded-lg bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1C4BE0] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <span>Let&apos;s Connect</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Pop-Art Portrait Centerpiece + Floating Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[440px] lg:col-span-6 lg:max-w-[500px]"
        >
          <div className="relative px-7 py-8 sm:px-10 sm:py-10">
            {/* Subtle cobalt radial aura behind portrait */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-10 rounded-full bg-[#245BFF]/18 blur-3xl dark:bg-[#245BFF]/22"
            />

            {/* Main Pop-Art Cutout Portrait Frame */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[#0D0D14] shadow-2xl shadow-[#245BFF]/10">
              {!imgError ? (
                <img
                  src={PORTFOLIO_ASSETS.portraitPopArt}
                  alt="Pop-art cobalt blue halftone cutout illustration of Shravani Jagtap"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.02]"
                />
              ) : (
                <div className="flex aspect-[3/4] w-full flex-col items-center justify-center bg-[#171923] p-8 text-center">
                  <span className="font-display text-2xl font-bold text-[#F5F5F7]">
                    Shravani Jagtap
                  </span>
                  <span className="mt-2 text-sm text-[#A1A1B0]">AI Engineer</span>
                </div>
              )}
            </div>

            {/* Decorative Label 1: "AI Engineer" (Top-Left) */}
            <div
              className="animate-float-slow absolute top-1 left-0 z-20 -rotate-6 select-none"
              style={{ animationDelay: '0s' }}
            >
              <span className="font-display text-sm font-bold tracking-tight text-[var(--accent-primary)] sm:text-base">
                AI Engineer
              </span>
              {/* Hand-drawn curved arrow pointing toward portrait */}
              <svg
                viewBox="0 0 64 36"
                className="mt-0.5 ml-4 h-7 w-12 text-[var(--accent-primary)]"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 6C18 4 36 12 52 28M52 28L41 27M52 28L51 17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Decorative Icon 1: Claude AI Icon (Top-Right) */}
            <div
              className="animate-float-medium absolute top-3 right-1 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-lg transition-transform duration-200 hover:scale-110"
              style={{ animationDelay: '0.6s' }}
              title="Claude AI"
              aria-hidden="true"
            >
              <ClaudeIcon />
            </div>

            {/* Decorative Label 2: "Sci-fi" (Right-Middle) */}
            <div
              className="animate-float-slow absolute top-[34%] -right-2 z-20 rotate-6 select-none sm:-right-4"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="font-mono-tabular text-xs font-medium tracking-wider text-[var(--accent-secondary)] sm:text-sm">
                Sci-fi
              </span>
            </div>

            {/* Decorative Icon 2: VS Code Icon (Bottom-Left) */}
            <div
              className="animate-float-medium absolute bottom-20 left-0 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-lg transition-transform duration-200 hover:scale-110"
              style={{ animationDelay: '1.4s' }}
              title="Visual Studio Code"
              aria-hidden="true"
            >
              <VsCodeIcon />
            </div>

            {/* Decorative Label 3: "Art" (Left-Middle) */}
            <div
              className="animate-float-slow absolute top-[44%] -left-1 z-20 -rotate-12 select-none sm:-left-3"
              style={{ animationDelay: '0.9s' }}
            >
              <span className="font-display text-base font-semibold italic text-[var(--text-primary)] sm:text-lg">
                Art
              </span>
            </div>

            {/* Decorative Icon 3: Creative Art / Palette Icon (Bottom-Right) */}
            <div
              className="animate-float-slow absolute right-2 bottom-10 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--accent-secondary)] shadow-lg transition-transform duration-200 hover:scale-110"
              style={{ animationDelay: '2.1s' }}
              title="Creative Art"
              aria-hidden="true"
            >
              <Palette className="h-5 w-5" />
            </div>

            {/* Decorative Label 4: "Design" (Bottom-Center-Left) */}
            <div
              className="animate-float-medium absolute bottom-1 left-12 z-20 rotate-3 select-none"
              style={{ animationDelay: '1.8s' }}
            >
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 42 24"
                  className="h-5 w-9 text-[var(--accent-secondary)]"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M38 18C26 20 14 14 6 4M6 4L15 5M6 4L7 13"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-display text-sm font-bold tracking-wide text-[var(--text-primary)] sm:text-base">
                  Design
                </span>
              </div>
            </div>

            {/* Rotating Stars & Outlined Geometric Shapes */}
            <FourPointStar className="animate-spin-slow absolute top-16 right-12 z-20 h-4 w-4 text-[var(--accent-primary)]" />
            <FourPointStar className="animate-spin-slow absolute bottom-28 right-0 z-20 h-3.5 w-3.5 text-[var(--accent-secondary)]" />

            {/* Outlined geometric triangle */}
            <svg
              viewBox="0 0 24 24"
              className="animate-float-slow absolute top-[24%] left-2 z-20 h-5 w-5 text-[#E08A4B]"
              fill="none"
              aria-hidden="true"
            >
              <polygon
                points="12,3 22,20 2,20"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>

            {/* Outlined geometric circle */}
            <svg
              viewBox="0 0 20 20"
              className="animate-float-medium absolute right-14 bottom-2 z-20 h-4 w-4 text-[var(--accent-primary)]"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
