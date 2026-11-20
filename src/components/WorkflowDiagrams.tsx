import { motion } from 'motion/react';

export type WorkflowType = 'lens' | 'dr-brainee' | 'cheffie' | 'cosmic-commons';

interface WorkflowDiagramProps {
  type: WorkflowType;
  compact?: boolean;
}

function FlowDot({
  path,
  duration = 3.2,
  delay = 0,
  color = '#245BFF',
}: {
  path: string;
  duration?: number;
  delay?: number;
  color?: string;
}) {
  return (
    <circle r="3.5" fill={color}>
      <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" path={path} />
    </circle>
  );
}

function NodeBox({
  x,
  y,
  w,
  h,
  title,
  sub,
  accent = '#245BFF',
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  accent?: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="10"
        fill="var(--bg-primary)"
        stroke={accent}
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 4}
        textAnchor="middle"
        className="fill-[var(--text-primary)] text-[11px] font-semibold"
      >
        {title}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          className="fill-[var(--text-secondary)] text-[9.5px] font-medium"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

export default function WorkflowDiagram({ type, compact = false }: WorkflowDiagramProps) {
  const containerClass = compact
    ? 'flex aspect-[16/10] w-full items-center justify-center bg-[var(--bg-primary)]/70 p-4 sm:p-6'
    : 'flex aspect-[16/9] w-full items-center justify-center bg-[var(--bg-primary)]/70 p-6 sm:p-8';

  if (type === 'lens') {
    const mainPath = 'M 64 110 L 536 110';
    const loopPath = 'M 412 86 C 412 34, 294 34, 294 86';
    return (
      <div className={containerClass}>
        <svg
          viewBox="0 0 600 220"
          className="h-full w-full max-w-[580px]"
          fill="none"
          role="img"
          aria-label="AI Research Agent Lens workflow: Goal to Plan to Gather Info to Check Gaps with iterative loop to Report"
        >
          {/* Subtle dot grid */}
          <defs>
            <pattern id="lens-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.9" fill="currentColor" className="text-[var(--border-subtle)]" />
            </pattern>
          </defs>
          <rect width="600" height="220" fill="url(#lens-grid)" opacity="0.5" />

          {/* Main horizontal line */}
          <path
            d={mainPath}
            stroke="var(--border-subtle)"
            strokeWidth="1.75"
            strokeDasharray="5 5"
          />

          {/* Conditional iteration loop */}
          <motion.path
            d={loopPath}
            stroke="#00BFA6"
            strokeWidth="1.75"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0.4 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
          <text
            x="353"
            y="36"
            textAnchor="middle"
            className="fill-[var(--accent-secondary)] text-[9.5px] font-medium"
          >
            Iterate if gaps found
          </text>

          {/* Animated traveling dots */}
          <FlowDot path={mainPath} duration={4.2} color="#245BFF" />
          <FlowDot path={loopPath} duration={2.8} delay={1.2} color="#00BFA6" />

          {/* Nodes */}
          <NodeBox x={18} y={86} w={96} h={48} title="Goal" sub="Natural language" accent="#245BFF" />
          <NodeBox x={136} y={86} w={96} h={48} title="Plan" sub="Structured steps" accent="#245BFF" />
          <NodeBox x={254} y={86} w={96} h={48} title="Research" sub="Gather info" accent="#245BFF" />
          <NodeBox x={372} y={86} w={96} h={48} title="Gap Check" sub="Conditional route" accent="#00BFA6" />
          <NodeBox x={490} y={86} w={92} h={48} title="Report" sub="Concise output" accent="#245BFF" />

          {/* Bottom caption */}
          <text
            x="300"
            y="186"
            textAnchor="middle"
            className="fill-[var(--text-secondary)] text-[10px] font-medium"
          >
            Stateful LangGraph Workflow
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'dr-brainee') {
    const pathTop = 'M 75 110 L 185 68 L 325 110 L 455 110';
    const pathBottom = 'M 75 110 L 185 152 L 325 110 L 455 110';
    return (
      <div className={containerClass}>
        <svg
          viewBox="0 0 540 220"
          className="h-full w-full max-w-[520px]"
          fill="none"
          role="img"
          aria-label="Dr. Brainee workflow: User Message splits to Sentiment and Intent Classification and RAG Context Retrieval, then combines into Empathetic Response"
        >
          <path d={pathTop} stroke="var(--border-subtle)" strokeWidth="1.75" strokeDasharray="5 5" />
          <path d={pathBottom} stroke="var(--border-subtle)" strokeWidth="1.75" strokeDasharray="5 5" />

          <FlowDot path={pathTop} duration={3.6} color="#245BFF" />
          <FlowDot path={pathBottom} duration={3.6} delay={0.9} color="#00BFA6" />

          <NodeBox x={18} y={86} w={104} h={48} title="User Input" sub="Conversation" accent="#245BFF" />
          <NodeBox x={152} y={40} w={132} h={52} title="Sentiment & Intent" sub="TF-IDF + SVM" accent="#245BFF" />
          <NodeBox x={152} y={128} w={132} h={52} title="RAG Retrieval" sub="ChromaDB context" accent="#00BFA6" />
          <NodeBox x={316} y={86} w={100} h={48} title="Synthesis" sub="Context + tone" accent="#245BFF" />
          <NodeBox x={436} y={86} w={90} h={48} title="Response" sub="Empathetic" accent="#00BFA6" />
        </svg>
      </div>
    );
  }

  if (type === 'cheffie') {
    const mainPath = 'M 68 110 L 472 110';
    const followUpPath = 'M 332 134 C 332 182, 206 182, 206 134';
    return (
      <div className={containerClass}>
        <svg
          viewBox="0 0 540 220"
          className="h-full w-full max-w-[520px]"
          fill="none"
          role="img"
          aria-label="Cheffie workflow: Voice Input to Speech-to-Text to Recipe State Tracker with follow-up loop to Hands-Free Guidance"
        >
          <path d={mainPath} stroke="var(--border-subtle)" strokeWidth="1.75" strokeDasharray="5 5" />
          <path d={followUpPath} stroke="#00BFA6" strokeWidth="1.75" strokeDasharray="4 4" />

          <text
            x="269"
            y="194"
            textAnchor="middle"
            className="fill-[var(--accent-secondary)] text-[9.5px] font-medium"
          >
            Follow-up questions &amp; step tracking
          </text>

          <FlowDot path={mainPath} duration={3.8} color="#245BFF" />
          <FlowDot path={followUpPath} duration={2.6} delay={0.8} color="#00BFA6" />

          {/* Subtle acoustic pulse bars near Voice node */}
          <g className="text-[var(--accent-primary)]" opacity="0.65">
            <rect x="40" y="64" width="3" height="12" rx="1.5" fill="currentColor" />
            <rect x="47" y="58" width="3" height="18" rx="1.5" fill="currentColor" />
            <rect x="54" y="62" width="3" height="14" rx="1.5" fill="currentColor" />
          </g>

          <NodeBox x={18} y={86} w={100} h={48} title="Voice Input" sub="Hands-free" accent="#245BFF" />
          <NodeBox x={144} y={86} w={110} h={48} title="Speech-to-Text" sub="NLP parsing" accent="#245BFF" />
          <NodeBox x={280} y={86} w={114} h={48} title="State Tracker" sub="LLM recipe flow" accent="#00BFA6" />
          <NodeBox x={420} y={86} w={102} h={48} title="Step Guide" sub="Voice response" accent="#245BFF" />
        </svg>
      </div>
    );
  }

  // NASA Space Apps Challenge 2026 — Cosmic Commons
  const topSkyPath = 'M 118 68 L 210 110 L 490 110';
  const bottomSkyPath = 'M 118 152 L 210 110 L 490 110';

  return (
    <div className="flex aspect-[16/8] w-full items-center justify-center bg-[#0D0D14] p-5 sm:p-7">
      <svg
        viewBox="0 0 560 220"
        className="h-full w-full max-w-[540px]"
        fill="none"
        role="img"
        aria-label="Cosmic Commons workflow: Infrared Sky Image T1 and T2 compared via Difference Image to Highlight Candidates for Human Review"
      >
        {/* Subtle starfield accents */}
        {[
          { cx: 36, cy: 26, r: 1.2, fill: '#4B7BFF' },
          { cx: 170, cy: 22, r: 1.4, fill: '#00BFA6' },
          { cx: 345, cy: 28, r: 1.1, fill: '#F5F5F7' },
          { cx: 515, cy: 34, r: 1.4, fill: '#245BFF' },
          { cx: 80, cy: 198, r: 1.2, fill: '#00BFA6' },
          { cx: 290, cy: 196, r: 1.1, fill: '#4B7BFF' },
          { cx: 470, cy: 190, r: 1.3, fill: '#F5F5F7' },
        ].map((star, i) => (
          <circle key={i} cx={star.cx} cy={star.cy} r={star.r} fill={star.fill} opacity="0.6" />
        ))}

        <path d={topSkyPath} stroke="#292D3A" strokeWidth="1.75" strokeDasharray="5 5" />
        <path d={bottomSkyPath} stroke="#292D3A" strokeWidth="1.75" strokeDasharray="5 5" />

        <FlowDot path={topSkyPath} duration={3.6} color="#245BFF" />
        <FlowDot path={bottomSkyPath} duration={3.6} delay={0.9} color="#00BFA6" />

        {/* Nodes rendered with dark-space surface contrast */}
        {[
          { x: 18, y: 44, w: 112, h: 48, title: 'IR Sky (T1)', sub: 'Earlier epoch', accent: '#245BFF' },
          { x: 18, y: 128, w: 112, h: 48, title: 'IR Sky (T2)', sub: 'Later epoch', accent: '#00BFA6' },
          { x: 172, y: 86, w: 118, h: 48, title: 'Difference Map', sub: 'Compare pixels', accent: '#245BFF' },
          { x: 314, y: 86, w: 108, h: 48, title: 'Candidates', sub: 'Visual changes', accent: '#00BFA6' },
          { x: 444, y: 86, w: 98, h: 48, title: 'Human Review', sub: 'Inspect sky', accent: '#245BFF' },
        ].map((n) => (
          <g key={n.title}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="10"
              fill="#171923"
              stroke={n.accent}
              strokeOpacity="0.65"
              strokeWidth="1.5"
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + 20}
              textAnchor="middle"
              fill="#F5F5F7"
              className="text-[11px] font-semibold"
            >
              {n.title}
            </text>
            <text
              x={n.x + n.w / 2}
              y={n.y + 35}
              textAnchor="middle"
              fill="#A1A1B0"
              className="text-[9.5px] font-medium"
            >
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
