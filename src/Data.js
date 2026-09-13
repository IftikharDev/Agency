import Service1 from './Images/service-1.webp';
import Service3 from './Images/service-3.webp';
import Service4 from './Images/service-4.webp';
import Service5 from './Images/service-5.webp';

import EmoteAI from './Images/emoteai.png';
import Docs2AI from './Images/do2ai.png';
import OworldBD from './Images/oworldbd.png';
import PropertyFinder from './Images/propertyfinder.png';
import StudyBuddy from './Images/studybuddy.png';
import Gizoora from './Images/gizora.png';
import Mojo from './Images/mojo.png';

export const serviceList = [
  {
    id: 1,
    label: 'Scalable Web & App Development',
    bgColor: '#48C6EF',
    title: 'Products That Grow With You, Not Against You',
    imageSrc: Service1,
    description:
      'Your business will evolve over the next two years, and your digital platform should grow right alongside it. We build web and mobile applications designed for your future goals. Whether you need a rapid MVP launch or an enterprise platform handling high request volumes, we deliver software that scales cleanly.',
    list: [
      'Custom Web Applications & Portals',
      'Native & Cross-Platform Mobile Apps',
      'Cloud-Native Architecture & APIs',
      'MVP-to-Scale Product Engineering',
      'Performance Optimization & Monitoring'
    ]
  },
  {
    id: 2,
    label: 'Design-to-Development',
    bgColor: '#3BA8E0',
    title: 'From Pixel to Production, No Gaps',
    imageSrc: Service4,
    description:
      'In-house design and engineering ensure your product ships exactly as intended, avoiding any handoff gaps. We manage the full lifecycle from early wireframes through deployment, delivering a refined product without the friction of multiple vendors.',
    list: [
      'Product Ideation & Wireframing',
      'UI/UX Design & Prototyping',
      'Design System Creation',
      'Pixel-Perfect Frontend Development',
      'User Testing & Iteration'
    ]
  },
  {
    id: 3,
    label: 'AI Automation & Solutions',
    bgColor: '#2C8DD3',
    title: 'Automate the Work That Slows You Down',
    imageSrc: Service5,
    description:
      'We spot operational bottlenecks and build tailored automation to save your team valuable hours. By integrating your core tools and streamlining daily workflows, we eliminate repetitive manual effort.',
    list: [
      'Workflow Automation',
      'System & API Integrations',
      'Custom Automation Pipelines',
      'Operational Efficiency Consulting'
    ]
  },
  {
    id: 4,
    label: 'AI Chatbots',
    bgColor: '#1D6DC0',
    title: 'Smarter Customer Conversations, Around the Clock',
    imageSrc: Service3,
    description:
      'Deploy intelligent chatbots that manage support inquiries, capture new leads, and qualify prospects. This allows your internal team to focus on high-priority customer conversations.',
    list: [
      'Custom Chatbot Development',
      'Lead Capture & Qualification Bots',
      'Multi-Platform Deployment',
      'Analytics & Conversation Insights'
    ]
  }
];


export const saasProducts = [
  {
    id: 1,
    slug: 'ci-analytics',
    name: 'CI Analytics',
    tagline: 'AI-Powered Business Intelligence',
    description: 'Transform raw data into clear, actionable insights with our business intelligence dashboard, featuring real-time metrics, predictive forecasting, and automated reporting in a single interface.',
    details: 'CI Analytics is a comprehensive business intelligence platform designed to eliminate data silos. We integrate with your existing databases, CRMs, and marketing tools to provide a unified view of your business health. Using advanced machine learning, the platform not only reports on past performance but predicts future trends.',
    features: [
      'Real-time data visualization',
      'Automated custom reporting',
      'Predictive AI forecasting',
      'Cross-platform data integration'
    ],
    metrics: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '3x', label: 'Faster Insights' }
    ],
    icon: 'TbChartAreaLine',
    gradient: 'linear-gradient(135deg, #00C2FF 0%, #0D52AD 100%)'
  },
  {
    id: 2,
    slug: 'ci-automate',
    name: 'CI Automate',
    tagline: 'Workflow & AI Pipeline Builder',
    description: 'Design, deploy, and scale automation workflows effortlessly. Connect over 500 applications and let intelligent systems handle your routine operations.',
    details: 'CI Automate empowers your team to eliminate repetitive tasks. With an intuitive visual builder, you can map out complex workflows that trigger across multiple applications. The built-in AI nodes can parse emails, analyze sentiment, and make routing decisions dynamically, saving your team countless hours.',
    features: [
      'Visual drag-and-drop workflow builder',
      '500+ native application integrations',
      'AI-powered decision nodes',
      'Enterprise-grade audit logging'
    ],
    metrics: [
      { value: '500+', label: 'Integrations' },
      { value: '80%', label: 'Time Saved' }
    ],
    icon: 'TbCpu',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #00C2FF 100%)'
  },
  {
    id: 3,
    slug: 'ci-shield',
    name: 'CI Shield',
    tagline: 'Cloud Security & Compliance',
    description: 'Enterprise-grade cloud security monitoring, threat detection, and compliance automation. Protect your infrastructure and stay audit-ready 24/7.',
    details: 'CI Shield provides continuous monitoring of your cloud infrastructure to detect vulnerabilities and misconfigurations before they can be exploited. With automated compliance reporting for SOC2, HIPAA, and GDPR, you can assure your clients that their data is protected by state-of-the-art security protocols.',
    features: [
      'Continuous cloud posture management',
      'Automated compliance reporting',
      'Zero-day threat detection',
      'Real-time alert routing and remediation'
    ],
    metrics: [
      { value: '24/7', label: 'Monitoring' },
      { value: '0-Day', label: 'Threat Response' }
    ],
    icon: 'TbShieldCheck',
    gradient: 'linear-gradient(135deg, #00E5A0 0%, #0D52AD 100%)'
  }
];

export const businessProblems = [
  {
    id: 1,
    problem: "Unanswered messages on WhatsApp and social channels cause interested clients to choose competitors",
    solution: "An automated AI assistant responds instantly 24/7 across your website and messaging apps, capturing leads and booking meetings around the clock.",
    result: "3x",
    resultLabel: "LEAD CAPTURE",
    icon: "TbMessageChatbot",
    gradient: "linear-gradient(135deg, #00C2FF 0%, #0056FF 100%)",
    accentColor: "#00C2FF",
  },
  {
    id: 2,
    problem: "Creating and posting content manually every day consumes hours with unpredictable engagement",
    solution: "Automated AI content pipelines generate and schedule branded posts across your active channels, keeping your brand visible consistently.",
    result: "80%",
    resultLabel: "TIME SAVED",
    icon: "TbBrandInstagram",
    gradient: "linear-gradient(135deg, #A100FF 0%, #5100FF 100%)",
    accentColor: "#A100FF",
  },
  {
    id: 3,
    problem: "Creating invoices individually and chasing late payments manually hurts predictable cash flow",
    solution: "Automated invoicing system generates, delivers, and follows up on pending accounts via email and WhatsApp automatically.",
    result: "5x",
    resultLabel: "FASTER BILLING",
    icon: "TbFileInvoice",
    gradient: "linear-gradient(135deg, #00E5A0 0%, #00825B 100%)",
    accentColor: "#00E5A0",
  },
  {
    id: 4,
    problem: "Sales representatives spend valuable hours reaching out to unqualified leads",
    solution: "Intelligent lead scoring automatically qualifies inbound interest, directing high-value leads straight to sales while nurturing prospects.",
    result: "2x",
    resultLabel: "CONVERSION RATE",
    icon: "TbTargetArrow",
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
    accentColor: "#FF6B6B",
  },
  {
    id: 5,
    problem: "Support channels get overwhelmed by repetitive questions day after day",
    solution: "Custom Q&A system trained on your documentation resolves routine inquiries instantly, freeing your team for complex issues.",
    result: "80%",
    resultLabel: "TICKET REDUCTION",
    icon: "TbHeadset",
    gradient: "linear-gradient(135deg, #FF45A2 0%, #FF74C7 100%)",
    accentColor: "#FF45A2",
  },
  {
    id: 6,
    problem: "High website traffic yields very few inquiries because visitors leave without interacting",
    solution: "Interactive lead capture tools and smart prompts engage visitors, qualify their interest, and turn passive traffic into real client inquiries.",
    result: "4x",
    resultLabel: "WEBSITE LEADS",
    icon: "TbChartArrowsVertical",
    gradient: "linear-gradient(135deg, #00D2FF 0%, #3A7BD5 100%)",
    accentColor: "#00D2FF",
  },
];


export const missionValues = [
  {
    id: 1,
    title: 'Innovation First',
    description: 'We push the boundaries of technology, leveraging modern AI and cloud solutions to deliver tools that keep your business ahead of the curve.',
    icon: 'TbRocket'
  },
  {
    id: 2,
    title: 'Radical Transparency',
    description: 'We maintain complete transparency in our work. You have clear visibility into every decision, sprint deliverable, and codebase update throughout our partnership.',
    icon: 'TbEye'
  },
  {
    id: 3,
    title: 'Results-Driven',
    description: 'We measure success by your growth. Every project is engineered to deliver measurable ROI, increased efficiency, and sustainable competitive advantage.',
    icon: 'TbTrendingUp'
  }
];

export const workflowSteps = [
  {
    id: 1,
    number: '01',
    title: 'Strategy',
    icon: 'TbSearch',
    description:
      'We begin by analyzing your core objectives and target users. We map out project scope, key priorities, and performance targets to guide every design choice.',
  },
  {
    id: 2,
    number: '02',
    title: 'Design',
    icon: 'TbPalette',
    description:
      'We turn initial wireframes into interactive prototypes so you can experience the product interface before development begins.',
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    icon: 'TbCode',
    description:
      'We develop high-performance frontend interfaces, robust APIs, and cloud architecture, shipping in structured sprints through production deployment.',
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: 'Mojo',
    category: 'Modernized 3D Website',
    description: 'Immersive 3D web experience for Bangladesh’s #1 beverage brand featuring real-time interactive 3D can renders, micro-animations, and dynamic visual storytelling.',
    stack: ['React', 'Three.js', 'GSAP', 'Vite'],
    image: Mojo,
    url: 'https://mojo-modern-website.netlify.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Emote AI',
    category: 'AI/ML',
    description: 'AI-powered emotional intelligence platform that analyzes and understands human emotions through advanced machine learning models.',
    stack: ['React', 'GSAP', 'Google Cloud', 'Cloudflare'],
    image: EmoteAI,
    url: 'https://emote.ai',
    featured: true,
  },
  {
    id: 3,
    title: 'Docs2AI',
    category: 'AI/ML',
    description: 'Intelligent document processing platform that transforms unstructured documents into actionable insights using AI-driven automation.',
    stack: ['React', 'GSAP', 'Google Cloud', 'Sentry'],
    image: Docs2AI,
    url: 'https://www.docs2ai.co/',
    featured: false,
  },
  {
    id: 4,
    title: 'Oworld BD',
    category: 'Web App',
    description: 'Full-scale e-commerce and business platform serving the Bangladesh market with modern UI and seamless user experience.',
    stack: ['React', 'Bootstrap', 'jQuery', 'Hostinger'],
    image: OworldBD,
    url: 'https://oworldbd.com',
    featured: false,
  },
  {
    id: 5,
    title: 'PropertyFinder',
    category: 'Web App',
    description: 'Leading real estate marketplace in the UAE, connecting buyers and renters with verified property listings.',
    stack: ['Next.js', 'React', 'AWS', 'Cloudfront'],
    image: PropertyFinder,
    url: 'https://propertyfinder.ae',
    featured: true,
  },
  {
    id: 6,
    title: 'StudyBuddy',
    category: 'SaaS',
    description: 'Gamified learning platform that pairs students with study partners, tracks progress, and delivers AI-generated study plans.',
    stack: ['Next.js', 'React', 'Stripe', 'Vercel'],
    image: StudyBuddy,
    url: 'https://studybuddy.gg',
    featured: false,
  },
  {
    id: 7,
    title: 'Gizoora',
    category: 'Web App',
    description: 'Modern e-commerce platform with dynamic product catalogs, order management, and integrated payment gateways.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Cloudflare'],
    image: Gizoora,
    url: 'https://gizoora.com',
    featured: false,
  },
];


export const usefulLinks = [
  {
    id: 2,
    title: 'About Us',
    url: '/about'
  },
  {
    id: 3,
    title: 'Services',
    url: '/services'
  },
  {
    id: 4,
    title: 'Contact Us',
    url: '/contact-us'
  },
  {
    id: 5,
    title: 'Privacy Policy',
    url: '/privacy-policy'
  },
  {
    id: 6,
    title: 'Terms & Conditions',
    url: '/terms-conditions'
  }
];