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

export const serviceList = [
  {
    id: 1,
    label: 'Scalable Web & App Development',
    bgColor: '#48C6EF',
    title: 'Products That Grow With You, Not Against You',
    imageSrc: Service1,
    description:
      'Your business won\'t look the same in two years — your platform shouldn\'t either. We architect web and mobile applications built for where you\'re headed, not just where you are. From MVPs that need to ship fast to enterprise systems handling millions of requests, you get a product that scales cleanly and costs less to maintain over time.',
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
      'Design and development under one roof means your product ships exactly as envisioned — no "lost in translation" between teams. We handle the full journey from wireframe to deployment, so you get a polished product without managing two separate vendors or reconciling mismatched deliverables.',
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
      'We identify bottlenecks in your operations and build targeted automation that saves real hours — connecting your tools, streamlining workflows, and removing the manual work your team shouldn\'t be doing.',
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
      'Deploy intelligent chatbots that handle support, capture leads, and qualify prospects — so your team focuses on the conversations that actually need a human.',
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
    description: 'Transform raw data into actionable insights with our intelligent analytics dashboard. Real-time metrics, predictive forecasting, and automated reporting — all in one platform.',
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
    description: 'Design, deploy, and scale intelligent automation workflows without writing a single line of code. Connect 500+ apps and let AI handle the rest.',
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
    problem: "Too busy to reply on Messenger & WhatsApp — customers lose interest and go to competitors",
    solution: "AI chatbot auto-responds 24/7 on Messenger, WhatsApp, and your website. Captures leads, answers questions, and books appointments — even at 3 AM.",
    result: "3x",
    resultLabel: "LEAD CAPTURE",
    icon: "TbMessageChatbot",
    gradient: "linear-gradient(135deg, #00C2FF 0%, #0056FF 100%)",
    accentColor: "#00C2FF",
  },
  {
    id: 2,
    problem: "Manually posting on social media every day — wasting hours with inconsistent results",
    solution: "AI auto-generates and schedules 30 days of branded content across all platforms. Your brand stays active — even when you rest.",
    result: "80%",
    resultLabel: "TIME SAVED",
    icon: "TbBrandInstagram",
    gradient: "linear-gradient(135deg, #A100FF 0%, #5100FF 100%)",
    accentColor: "#A100FF",
  },
  {
    id: 3,
    problem: "Sending invoices one by one, chasing payments manually — cash flow bleeding",
    solution: "AI-powered invoice automation. Auto-generates, sends, and follows up on unpaid invoices via email and WhatsApp. No more awkward calls.",
    result: "5x",
    resultLabel: "FASTER BILLING",
    icon: "TbFileInvoice",
    gradient: "linear-gradient(135deg, #00E5A0 0%, #00825B 100%)",
    accentColor: "#00E5A0",
  },
  {
    id: 4,
    problem: "No idea which leads are hot — sales team wastes time on cold prospects",
    solution: "AI-powered CRM scores and qualifies every lead automatically. Hot leads pushed to sales instantly. Cold leads nurtured via smart email sequences.",
    result: "2x",
    resultLabel: "CONVERSION RATE",
    icon: "TbTargetArrow",
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
    accentColor: "#FF6B6B",
  },
  {
    id: 5,
    problem: "Customer support inbox is drowning — same questions asked over and over, every single day",
    solution: "RAG-powered Q&A bot trained on YOUR docs, FAQs, and policies. Handles 80% of support queries instantly. Your team focuses on what matters.",
    result: "80%",
    resultLabel: "TICKET REDUCTION",
    icon: "TbHeadset",
    gradient: "linear-gradient(135deg, #FF45A2 0%, #FF74C7 100%)",
    accentColor: "#FF45A2",
  },
  {
    id: 6,
    problem: "Website gets 10,000 visitors but only 12 leads — visitors leave without taking any action",
    solution: "AI lead generation chatbot + smart exit-intent popups. Captures emails, qualifies interest, books calls — turns traffic into revenue.",
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
    description: 'We push the boundaries of what\'s possible, leveraging cutting-edge AI and cloud technologies to deliver solutions that keep you ahead of the curve.',
    icon: 'TbRocket'
  },
  {
    id: 2,
    title: 'Radical Transparency',
    description: 'No hidden agendas, no black boxes. Every decision, every line of code, every sprint — you have full visibility into our process and progress.',
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
      'We dig into your goals, users, and constraints first — mapping scope, priorities, and success metrics so every design and engineering decision has a clear north star.',
  },
  {
    id: 2,
    number: '02',
    title: 'Design',
    icon: 'TbPalette',
    description:
      'Wireframes become high-fidelity UI, then interactive prototypes. You see the product before a single line of production code — so we build exactly what was approved.',
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    icon: 'TbCode',
    description:
      'Pixel-perfect frontend, solid APIs, and cloud-ready architecture. We ship in focused sprints with full visibility — from first commit to production launch.',
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: 'Emote AI',
    category: 'AI/ML',
    description: 'AI-powered emotional intelligence platform that analyzes and understands human emotions through advanced machine learning models.',
    stack: ['React', 'GSAP', 'Google Cloud', 'Cloudflare'],
    image: EmoteAI,
    url: 'https://emote.ai',
    featured: true,
  },
  {
    id: 2,
    title: 'Docs2AI',
    category: 'AI/ML',
    description: 'Intelligent document processing platform that transforms unstructured documents into actionable insights using AI-driven automation.',
    stack: ['React', 'GSAP', 'Google Cloud', 'Sentry'],
    image: Docs2AI,
    url: 'https://www.docs2ai.co/',
    featured: false,
  },
  {
    id: 3,
    title: 'Oworld BD',
    category: 'Web App',
    description: 'Full-scale e-commerce and business platform serving the Bangladesh market with modern UI and seamless user experience.',
    stack: ['React', 'Bootstrap', 'jQuery', 'Hostinger'],
    image: OworldBD,
    url: 'https://oworldbd.com',
    featured: false,
  },
  {
    id: 4,
    title: 'PropertyFinder',
    category: 'Web App',
    description: 'Leading real estate marketplace in the UAE — connecting millions of buyers and renters with their ideal properties.',
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
    id: 8,
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