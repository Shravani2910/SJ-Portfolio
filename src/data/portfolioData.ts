export interface SkillItem {
  name: string;
  category: 'Programming' | 'AI & ML' | 'Frameworks' | 'Tools' | 'Databases & Cloud';
  weight: 'xl' | 'lg' | 'md' | 'sm';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  featured?: boolean;
}

export interface HackathonItem {
  id: string;
  event: string;
  project: string;
  description: string;
  theme: 'space' | 'agent';
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
}
import portraitPopArt from '../assets/images/shravani-portfolio.jpeg';
export const PORTFOLIO_ASSETS = {
  portraitPopArt,
  projectLens: '/src/assets/images/project_lens_agent_1795157210915.jpg',
  projectBrainee: '/src/assets/images/project_dr_brainee_1795157210114.jpg',
  projectCheffie: '/src/assets/images/project_cheffie_voice_1795157210048.jpg',
  hackathonCosmic: '/src/assets/images/hackathon_cosmic_commons_1795157210612.jpg',
};

export const HERO_DATA = {
  headline: "Hello, I'm Shravani.",
  supportingHeadline: 'AI Engineer!',
  introduction:
    "I'm an AI Engineer fascinated by the intersection of intelligence, creativity, and technology. I build machine learning applications, RAG systems, and agentic AI workflows that go beyond answering questions to get things done. Outside tech, I'm inspired by sci-fi, art, and ideas that challenge what's possible.",
  location: 'Based in India.',
};

export const SKILL_CATEGORIES = [
  'All',
  'Programming',
  'AI & ML',
  'Frameworks',
  'Tools',
  'Databases & Cloud',
] as const;

export const SKILLS_DATA: SkillItem[] = [
  { name: 'Python', category: 'Programming', weight: 'xl' },
  { name: 'Agentic AI', category: 'AI & ML', weight: 'xl' },
  { name: 'LLMs', category: 'AI & ML', weight: 'xl' },
  { name: 'RAG', category: 'AI & ML', weight: 'xl' },
  { name: 'LangGraph', category: 'Frameworks', weight: 'lg' },
  { name: 'PyTorch', category: 'Frameworks', weight: 'lg' },
  { name: 'Machine Learning', category: 'AI & ML', weight: 'lg' },
  { name: 'Deep Learning', category: 'AI & ML', weight: 'lg' },
  { name: 'Generative AI', category: 'AI & ML', weight: 'lg' },
  { name: 'LangChain', category: 'Frameworks', weight: 'md' },
  { name: 'NLP', category: 'AI & ML', weight: 'lg' },
  { name: 'FastAPI', category: 'Frameworks', weight: 'md' },
  { name: 'TensorFlow', category: 'Frameworks', weight: 'md' },
  { name: 'Computer Vision', category: 'AI & ML', weight: 'md' },
  { name: 'ChromaDB', category: 'Databases & Cloud', weight: 'md' },
  { name: 'Vector Databases', category: 'Databases & Cloud', weight: 'md' },
  { name: 'SQL', category: 'Programming', weight: 'md' },
  { name: 'Docker', category: 'Tools', weight: 'md' },
  { name: 'Google Cloud Platform', category: 'Databases & Cloud', weight: 'sm' },
  { name: 'Microsoft Azure', category: 'Databases & Cloud', weight: 'sm' },
  { name: 'Streamlit', category: 'Frameworks', weight: 'sm' },
  { name: 'Flask', category: 'Frameworks', weight: 'sm' },
  { name: 'MySQL', category: 'Databases & Cloud', weight: 'sm' },
  { name: 'Git', category: 'Tools', weight: 'sm' },
  { name: 'C++', category: 'Programming', weight: 'sm' },
  { name: 'R', category: 'Programming', weight: 'sm' },
  { name: 'Power BI', category: 'Tools', weight: 'sm' },
  { name: 'Excel', category: 'Tools', weight: 'sm' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'lens',
    title: 'AI Research Agent - Lens',
    subtitle: 'Stateful Agentic Workflow',
    description:
      'An agentic research workflow that turns a natural-language goal into a structured plan, gathers information, identifies gaps, iterates on research, and produces a concise report. Built as a stateful workflow with conditional routing.',
    technologies: ['Python', 'LangGraph', 'LLMs', 'Agentic AI'],
    image: PORTFOLIO_ASSETS.projectLens,
    featured: true,
  },
  {
    id: 'dr-brainee',
    title: 'Mental Health Therapy Chatbot - Dr. Brainee',
    subtitle: 'Sentiment, Intent & RAG',
    description:
      'A conversational chatbot combining sentiment analysis and intent classification (TF-IDF + SVM) with a retrieval-augmented response system. The project achieved approximately 85% accuracy on its mental-health conversation dataset and uses retrieved context to support relevant, empathetic responses.',
    technologies: ['Python', 'NLP', 'TF-IDF', 'SVM', 'RAG', 'ChromaDB'],
    image: PORTFOLIO_ASSETS.projectBrainee,
  },
  {
    id: 'cheffie',
    title: 'AI Voice Cooking Assistant - Cheffie',
    subtitle: 'Hands-Free Conversational Guide',
    description:
      'A voice-controlled cooking assistant designed for hands-free, step-by-step recipe guidance. Its conversational flow keeps track of the cooking process and supports follow-up questions.',
    technologies: ['Python', 'Speech-to-text', 'NLP', 'LLMs'],
    image: PORTFOLIO_ASSETS.projectCheffie,
  },
];

export const HACKATHONS_DATA: HackathonItem[] = [
  {
    id: 'cosmic-commons',
    event: 'NASA Space Apps Challenge 2026',
    project: 'Cosmic Commons',
    description:
      'Collaborated on Cosmic Commons, an interactive tool for viewing and comparing infrared images of the same sky position over time. Difference images make changes between observations easier to inspect visually; the tool highlights candidates for human review rather than claiming automated detections or discoveries.',
    theme: 'space',
    image: PORTFOLIO_ASSETS.hackathonCosmic,
  },
  {
    id: 'techvruk',
    event: 'AI Agent Hackathon',
    project: 'Techvruk',
    description:
      'Built an AI Research Agent that converts a research goal into a plan, searches for relevant information, checks for gaps, and generates a structured report through an iterative, stateful agent workflow.',
    theme: 'agent',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'mereden',
    role: "Founder's Office Associate",
    company: 'Mereden AI',
    period: 'September 2026 – Present',
  },
  {
    id: 'adzzat',
    role: 'Freelance AI Developer',
    company: 'Adzzat',
    period: 'August 2026 – October 2026',
  },
  {
    id: 'ineuron',
    role: 'Machine Learning Intern',
    company: 'iNeuron.ai',
    period: 'January 2025 – March 2025',
  },
];

export const EDUCATION_DATA = [
  {
    degree: 'Bachelor of Engineering in Artificial Intelligence',
    institution: 'University of Pune',
    period: '2022 – 2025',
  },
  {
    degree: 'Business Management (Strategic)',
    institution: 'Symbiosis Skills & Professional University',
    period: '2026 – 2027',
    status: 'Pursuing',
  },
];

export const CONTACT_DATA = {
  heading: "Have an idea? Let's build something intelligent.",
  supportingText:
    "Have a project, an opportunity, or an interesting idea? I'd love to hear from you.",
  email: 'Shravaniij2910@gmail.com',
  github: 'https://github.com/Shravani2910',
  linkedin: 'https://linkedin.com/in/shravani-jagtap-313803218',
};
