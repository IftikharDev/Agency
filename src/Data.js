import Service1 from './Images/service-1.webp';
import Service3 from './Images/service-3.webp';
import Service4 from './Images/service-4.webp';
import Service5 from './Images/service-5.webp';

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
    name: 'CI Analytics',
    tagline: 'AI-Powered Business Intelligence',
    description: 'Transform raw data into actionable insights with our intelligent analytics dashboard. Real-time metrics, predictive forecasting, and automated reporting — all in one platform.',
    metrics: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '3x', label: 'Faster Insights' }
    ],
    icon: 'TbChartAreaLine',
    gradient: 'linear-gradient(135deg, #00C2FF 0%, #0D52AD 100%)'
  },
  {
    id: 2,
    name: 'CI Automate',
    tagline: 'Workflow & AI Pipeline Builder',
    description: 'Design, deploy, and scale intelligent automation workflows without writing a single line of code. Connect 500+ apps and let AI handle the rest.',
    metrics: [
      { value: '500+', label: 'Integrations' },
      { value: '80%', label: 'Time Saved' }
    ],
    icon: 'TbCpu',
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #00C2FF 100%)'
  },
  {
    id: 3,
    name: 'CI Shield',
    tagline: 'Cloud Security & Compliance',
    description: 'Enterprise-grade cloud security monitoring, threat detection, and compliance automation. Protect your infrastructure and stay audit-ready 24/7.',
    metrics: [
      { value: '24/7', label: 'Monitoring' },
      { value: '0-Day', label: 'Threat Response' }
    ],
    icon: 'TbShieldCheck',
    gradient: 'linear-gradient(135deg, #00E5A0 0%, #0D52AD 100%)'
  }
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