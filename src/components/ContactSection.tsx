import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_DATA.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto max-w-6xl border-t border-[var(--border-subtle)] px-6 pt-24 pb-16 lg:px-10 lg:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl leading-[1.08] [text-wrap:balance]">
          {CONTACT_DATA.heading}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {CONTACT_DATA.supportingText}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="inline-flex items-center gap-2.5 rounded-lg bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1C4BE0] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>{CONTACT_DATA.email}</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent-primary)]/40 bg-transparent px-4 py-3 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-[var(--accent-secondary)]" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={CONTACT_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-[var(--accent-primary)]/40 bg-transparent px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <a
            href={CONTACT_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-[var(--accent-primary)]/40 bg-transparent px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-subtle)] pt-8 text-xs text-[var(--text-secondary)] sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Shravani Jagtap</p>
        <p>Based in India</p>
      </div>
    </footer>
  );
}
