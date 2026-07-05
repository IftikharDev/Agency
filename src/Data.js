import Service1 from './Images/service-1.webp';
import Service2 from './Images/service-2.webp';
import Service3 from './Images/service-3.webp';
import Service4 from './Images/service-4.webp';
import Service5 from './Images/service-5.webp';

export const serviceList = [
  {
    id: 1,
    label: 'Website Development',
    bgColor: '#48C6EF',
    title: 'Build a Powerful Online Presence',
    imageSrc: Service1,
    description:
      'Establish a commanding digital footprint that captivates audiences, drives conversions, and positions your brand as an industry leader.',
    list: [
      'Profile & Personal Brand Websites',
      'Corporate & Enterprise Portals',
      'Landing Pages & Sales Funnels',
      'Progressive Web Applications (PWA)'
    ]
  },
  {
    id: 2,
    label: 'CMS & Platform Engineering',
    bgColor: '#3BA8E0',
    title: 'Architecting Scalable CMS Experiences',
    imageSrc: Service2,
    description:
      'We deliver robust, scalable content management platforms designed to optimize performance, enhance security, and drive seamless digital experiences.',
    list: [
      'Custom CMS Architecture',
      'Theme & UI/UX Engineering',
      'E-Commerce Solutions (WooCommerce)',
      'Performance & Core Web Vitals',
      'Platform Migration & Upgrades',
      'Enterprise Security & Hardening',
      'Vulnerability & Malware Remediation',
      'Advanced Platform Customization'
    ]
  },
  {
    id: 3,
    label: 'Digital Marketing',
    bgColor: '#2C8DD3',
    title: 'Smart Marketing Strategies to Fuel Your Growth',
    imageSrc: Service3,
    description:
      'Leverage data-driven strategies and creative campaigns to expand your reach, engage customers, and accelerate sustainable business growth.',
    list: [
      'Social Media Management',
      'Local Business Profile Setup',
      'Local Business SEO Services ',
      'On page SEO Services',
      'E-Commerce SEO',
      'Ads Management',
      'SEO Audit',
      'SEO Strategy Development'
    ]
  },
  {
    id: 4,
    label: 'Idea Visualisation',
    bgColor: '#1D6DC0',
    title: 'Sparking Reality from Imagination',
    imageSrc: Service4,
    description:
      'Transforming creative concepts into tangible realities, seamlessly bridging imagination with flawless execution to bring visionary ideas to life.',
    list: [
      'Product Ideation & Conceptualization',
      'Wireframing & Interactive Prototyping',
      'User Journey Mapping',
      'UI/UX Design Mockups',
      'Design System Creation',
      'Click-through Demo Development',
      'User Feedback & Iteration Planning'
    ]
  },
  {
    id: 5,
    label: 'Advanced Software & Mobile Engineering',
    bgColor: '#0E4DA8',
    title: 'Engineering Intelligent Software Ecosystems',
    imageSrc:Service5,
    description:
      'We architect and engineer robust, custom software solutions and mobile experiences that accelerate your digital transformation.',
    list: [
      'Enterprise Web Architectures',
      'Native & Cross-Platform Mobile Engineering',
      'Agile MVP Engineering',
      'Cloud-Native Backend & API Ecosystems',
      'Modern Frontend Experiences (React, Vue)',
      'DevOps & CI/CD Pipeline Automation',
      'Continuous Evolution & Scaling'
    ]
  },
  {
    id: 6,
    label: 'AI Automation & SaaS Integration',
    bgColor: '#0A3A8A',
    title: 'Intelligent Automation That Drives Revenue',
    imageSrc: Service5,
    description:
      'Supercharge your business with AI-powered automation and custom SaaS solutions that eliminate manual work, accelerate growth, and unlock new revenue streams.',
    list: [
      'Custom SaaS Product Development',
      'AI Chatbot & Conversational AI',
      'Automated Lead Generation Funnels',
      'Payment & Subscription Systems',
      'Real-time Analytics Dashboards',
      'API Integration & Middleware',
      'Workflow Automation (n8n, Zapier)',
      'AI Model Integration & Fine-tuning'
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