// Comprehensive data structure for Tamimi Group luxury site
export interface MediaAsset {
  id: string;
  url: string;
  type: 'image' | 'image';
  alt?: string;
  poster?: string;
  attribution: {
    source: 'pexels' | 'unsplash' | 'pixabay';
    photographer: string;
    url: string;
  };
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'government' | 'energy' | 'industrial' | 'financial';
  featured: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'news' | 'press' | 'investor';
  tag: string;
  date: string;
  author: string;
  readTime: number;
  featured: boolean;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  level: 'entry' | 'mid' | 'senior' | 'executive';
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  featured: boolean;
}

export interface Office {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  coordinates: [number, number]; // [lng, lat]
  phone: string;
  email: string;
  type: 'headquarters' | 'regional' | 'branch';
  employees: number;
  established: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  department: string;
  quote: string;
  avatar: string;
  years: number;
  featured: boolean;
}

export interface Division {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  heroMedia: string;
  icon: string;
  color: string;
  established: string;
  services: string[];
  stats: Stat[];
  clients: string[];
  featured: boolean;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface TimelineEvent {
  id: string;
  decade: string;
  year: string;
  title: string;
  description: string;
  image: string;
  achievements: string[];
}

export interface Leader {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin: string;
  experience: number;
  education: string[];
}

// Main Data Structure
export const siteData = {
  // Hero Media Assets
  media: {
    homeHero: {
      id: 'home-hero',
      url: '/media/corp.mp4',
      type: 'image' as const,
      poster: '/media/images/corporate-headquarters-poster.jpg',
      attribution: {
        source: 'pexels' as const,
        photographer: 'Sora Shimazaki',
        url: '/media/corp.mp4'
      }
    },
    aboutHero: {
      id: 'about-hero',
      url: '/media/about.mp4',
      type: 'image' as const,
      poster: '/media/images/business-handshake-poster.jpg',
      attribution: {
        source: 'pexels' as const,
        photographer: 'Mikhail Nilov',
        url: '/media/about.mp4'
      }
    },
    marketsHero: {
      id: 'markets-hero',
      url: 'https://images.pexels.com/photos/5632392/pexels-photo-5632392.jpeg?auto=compress&cs=tinysrgb&w=1920',
      type: 'image' as const,
      poster: '/media/images/supermarket-interior-poster.jpg',
      attribution: {
        source: 'pexels' as const,
        photographer: 'Jack Sparrow',
        url: 'https://www.pexels.com/video/supermarket-shopping-8439556/'
      }
    },
    csrHero: {
      id: 'csr-hero',
      url: 'https://images.pexels.com/photos/3826676/pexels-photo-3826676.jpeg?auto=compress&cs=tinysrgb&w=1920',
      type: 'image' as const,
      poster: '/media/images/sustainability-poster.jpg',
      attribution: {
        source: 'pexels' as const,
        photographer: 'Tom Fisk',
        url: 'https://www.pexels.com/video/renewable-energy-8439667/'
      }
    },
    careersHero: {
      id: 'careers-hero',
      url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
      type: 'image' as const,
      poster: '/media/images/diverse-team-poster.jpg',
      attribution: {
        source: 'pexels' as const,
        photographer: 'Fauxels',
        url: 'https://www.pexels.com/video/diverse-business-team-8439778/'
      }
    }
  } as Record<string, MediaAsset>,

  // Company Statistics
  stats: [
    {
      id: 'companies',
      value: 30,
      suffix: '+',
      label: 'Companies',
      description: 'Diverse business portfolio',
      icon: 'Building2'
    },
    {
      id: 'employees',
      value: 21000,
      suffix: '+',
      label: 'Employees',
      description: 'Dedicated professionals',
      icon: 'Users'
    },
    {
      id: 'years',
      value: 80,
      suffix: '+',
      label: 'Years',
      description: 'Of excellence',
      icon: 'Calendar'
    },
    {
      id: 'stores',
      value: 110,
      suffix: '+',
      label: 'Stores',
      description: 'Tamimi Markets locations',
      icon: 'Store'
    },
    {
      id: 'customers',
      value: 5000000,
      suffix: '+',
      label: 'Customers',
      description: 'Served annually',
      icon: 'Heart'
    },
    {
      id: 'pifShare',
      value: 30,
      suffix: '%',
      label: 'PIF Ownership',
      description: 'Strategic partnership',
      icon: 'TrendingUp'
    }
  ] as Stat[],

  // Strategic Partners
  partners: [
    {
      id: 'aramco',
      name: 'Saudi Aramco',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Aramco-Logo.png',
      category: 'energy' as const,
      featured: true
    },
    {
      id: 'pif',
      name: 'Public Investment Fund',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Public_Investment_Fund_logo.svg/1200px-Public_Investment_Fund_logo.svg.png',
      category: 'government' as const,
      featured: true
    },
    {
      id: 'sabic',
      name: 'SABIC',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/SABIC-Logo.png',
      category: 'industrial' as const,
      featured: true
    },
    {
      id: 'neom',
      name: 'NEOM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Neom_logo.svg/1200px-Neom_logo.svg.png',
      category: 'government' as const,
      featured: true
    },
    {
      id: 'maaden',
      name: 'Ma\'aden',
      logo: 'https://logos-world.net/wp-content/uploads/2021/11/Maaden-Logo.png',
      category: 'industrial' as const,
      featured: true
    },
    {
      id: 'snb',
      name: 'Saudi National Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Saudi_National_Bank_logo.svg/1200px-Saudi_National_Bank_logo.svg.png',
      category: 'financial' as const,
      featured: false
    },
    {
      id: 'sami',
      name: 'SAMI',
      logo: 'https://logos-world.net/wp-content/uploads/2021/11/SAMI-Logo.png',
      category: 'industrial' as const,
      featured: false
    },
    {
      id: 'kacst',
      name: 'KACST',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/KACST_Logo.png/1200px-KACST_Logo.png',
      category: 'government' as const,
      featured: false
    }
  ] as Partner[],

  // Business Divisions
  divisions: [
    {
      id: 'catering',
      name: 'Catering Services',
      slug: 'catering-services',
      description: 'Premium catering solutions serving government, corporate, and institutional clients across the Kingdom with exceptional quality and service standards.',
      shortDescription: 'Premium catering solutions for corporate and institutional clients',
      heroMedia: 'https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg?auto=compress&cs=tinysrgb&w=1920',
      icon: 'UtensilsCrossed',
      color: '#C9A227',
      established: '1965',
      services: [
        'Corporate Catering',
        'Institutional Food Services',
        'Event Management',
        'Nutritional Planning',
        'Kitchen Operations',
        'Food Safety Compliance'
      ],
      stats: [
        { id: 'daily-meals', value: 50000, suffix: '+', label: 'Daily Meals', description: 'Served across facilities', icon: 'Utensils' },
        { id: 'satisfaction', value: 98, suffix: '%', label: 'Satisfaction', description: 'Client satisfaction rate', icon: 'Star' },
        { id: 'locations', value: 200, suffix: '+', label: 'Locations', description: 'Active service sites', icon: 'MapPin' }
      ],
      clients: ['Saudi Aramco', 'Ministry of Defense', 'SABIC', 'King Saud University', 'KACST'],
      featured: true
    },
    {
      id: 'facility-management',
      name: 'Facility Management',
      slug: 'facility-management',
      description: 'Comprehensive facility management services providing integrated solutions for maintenance, operations, and support services across diverse sectors.',
      shortDescription: 'Integrated facility management and maintenance solutions',
      heroMedia: 'https://images.unsplash.com/photo-1503389152951-9f343605f61c?auto=format&fit=crop&w=1920&q=80',
      icon: 'Settings',
      color: '#2563EB',
      established: '1978',
      services: [
        'Preventive Maintenance',
        'HVAC Management',
        'Cleaning Services',
        'Security Operations',
        'Landscaping',
        'Energy Management'
      ],
      stats: [
        { id: 'facilities', value: 500, suffix: '+', label: 'Facilities', description: 'Under management', icon: 'Building2' },
        { id: 'technicians', value: 2000, suffix: '+', label: 'Technicians', description: 'Certified staff', icon: 'Users' },
        { id: 'uptime', value: 99.2, suffix: '%', label: 'Uptime', description: 'System availability', icon: 'Activity' }
      ],
      clients: ['KACST', 'Ministry of Health', 'Commercial Banks', 'Educational Institutions'],
      featured: true
    },
    {
      id: 'board-lodging',
      name: 'Board & Lodging',
      slug: 'board-lodging',
      description: 'Premium accommodation services providing comfortable and secure lodging solutions for corporate clients, government entities, and institutions.',
      shortDescription: 'Quality accommodation and hospitality services',
      heroMedia: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80',
      icon: 'Building',
      color: '#059669',
      established: '1972',
      services: [
        'Corporate Housing',
        'Guest Accommodation',
        'Residential Management',
        'Hospitality Services',
        'Maintenance',
        'Security Services'
      ],
      stats: [
        { id: 'units', value: 5000, suffix: '+', label: 'Units', description: 'Accommodation units', icon: 'Home' },
        { id: 'occupancy', value: 92, suffix: '%', label: 'Occupancy', description: 'Average occupancy rate', icon: 'TrendingUp' },
        { id: 'guest-satisfaction', value: 96, suffix: '%', label: 'Satisfaction', description: 'Guest satisfaction', icon: 'Star' }
      ],
      clients: ['Saudi Aramco', 'SABIC', 'Government Ministries', 'International Corporations'],
      featured: true
    },
    {
      id: 'contracting',
      name: 'Contracting & Construction',
      slug: 'contracting-construction',
      description: 'Full-service contracting solutions delivering high-quality construction projects from concept to completion with expertise in commercial and industrial sectors.',
      shortDescription: 'Professional contracting and construction services',
      heroMedia: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
      icon: 'HardHat',
      color: '#DC2626',
      established: '1968',
      services: [
        'General Contracting',
        'Project Management',
        'Design-Build',
        'Infrastructure Development',
        'MEP Installation',
        'Quality Assurance'
      ],
      stats: [
        { id: 'projects', value: 1000, suffix: '+', label: 'Projects', description: 'Successfully completed', icon: 'CheckCircle' },
        { id: 'safety', value: 0.12, suffix: '', label: 'Safety Rate', description: 'Incidents per 200K hours', icon: 'Shield' },
        { id: 'on-time', value: 95, suffix: '%', label: 'On-Time', description: 'Project completion rate', icon: 'Clock' }
      ],
      clients: ['Saudi Aramco', 'SABIC', 'Ministry of Defense', 'Private Developers'],
      featured: true
    }
  ] as Division[],

  // News Articles
  news: [
    {
      id: 'neom-partnership',
      title: 'Tamimi Group Partners with NEOM for Mega-City Development',
      excerpt: 'Strategic partnership announced to provide comprehensive facility management and catering services for the futuristic NEOM project, supporting Saudi Arabia\'s Vision 2030 goals.',
      content: 'Full article content here...',
      image: '//upload.wikimedia.org/wikipedia/en/thumb/b/b3/TamimiGroup.png/250px-TamimiGroup.png',
      category: 'news' as const,
      tag: 'Partnership',
      date: '2024-01-15',
      author: 'Sarah Al-Rashid',
      readTime: 4,
      featured: true
    },
    {
      id: 'sustainability-initiative',
      title: 'Tamimi Group Reduces Carbon Footprint by 30% Through Green Technology',
      excerpt: 'Implementation of sustainable technologies across all business divisions results in significant environmental impact reduction and cost savings.',
      content: 'Full article content here...',
      image: '//upload.wikimedia.org/wikipedia/en/thumb/b/b3/TamimiGroup.png/250px-TamimiGroup.png',
      category: 'news' as const,
      tag: 'Sustainability',
      date: '2024-01-10',
      author: 'Mohammed Al-Tamimi',
      readTime: 3,
      featured: true
    },
    {
      id: 'markets-expansion',
      title: 'Tamimi Markets Opens 15 New Stores Across the Kingdom',
      excerpt: 'Strategic expansion brings total store count to 125, serving more communities with fresh products and exceptional customer service nationwide.',
      content: 'Full article content here...',
      image: '//upload.wikimedia.org/wikipedia/en/thumb/b/b3/TamimiGroup.png/250px-TamimiGroup.png',
      category: 'news' as const,
      tag: 'Expansion',
      date: '2024-01-05',
      author: 'Fatima Al-Zahra',
      readTime: 2,
      featured: true
    },
    {
      id: 'q4-results',
      title: 'Strong Q4 Performance Drives 15% Annual Revenue Growth',
      excerpt: 'Exceptional performance across all business divisions contributes to record-breaking financial results and positive outlook for 2024.',
      content: 'Full article content here...',
      image: '//upload.wikimedia.org/wikipedia/en/thumb/b/b3/TamimiGroup.png/250px-TamimiGroup.png',
      category: 'investor' as const,
      tag: 'Financial',
      date: '2024-01-20',
      author: 'Investment Relations Team',
      readTime: 5,
      featured: false
    },
    {
      id: 'saudization-milestone',
      title: 'Tamimi Group Achieves 75% Saudization Rate Across All Divisions',
      excerpt: 'Comprehensive training and development programs contribute to successful localization of workforce, supporting national employment goals.',
      content: 'Full article content here...',
      image: '//upload.wikimedia.org/wikipedia/en/thumb/b/b3/TamimiGroup.png/250px-TamimiGroup.png',
      category: 'news' as const,
      tag: 'HR',
      date: '2024-01-03',
      author: 'HR Development Team',
      readTime: 3,
      featured: false
    },
    {
      id: 'aramco-contract',
      title: 'Major Contract Extension with Saudi Aramco Secured',
      excerpt: 'Five-year contract extension for comprehensive catering and facility management services across multiple Aramco facilities nationwide.',
      content: 'Full article content here...',
      image: '//upload.wikimedia.org/wikipedia/en/thumb/b/b3/TamimiGroup.png/250px-TamimiGroup.png',
      category: 'press' as const,
      tag: 'Contract',
      date: '2023-12-28',
      author: 'Business Development',
      readTime: 4,
      featured: false
    }
  ] as NewsArticle[],

  // Job Opportunities
  jobs: [
    {
      id: 'operations-manager',
      title: 'Operations Manager - Facility Management',
      department: 'Operations',
      location: 'Riyadh',
      type: 'full-time' as const,
      level: 'senior' as const,
      description: 'Lead facility management operations across multiple client sites, ensuring service excellence and operational efficiency.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '8+ years facility management experience',
        'PMP certification preferred',
        'Fluent in Arabic and English',
        'Strong leadership and communication skills'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance for family',
        'Annual performance bonus',
        'Professional development opportunities',
        'Transportation allowance'
      ],
      postedDate: '2024-01-15',
      featured: true
    },
    {
      id: 'head-chef',
      title: 'Head Chef - Corporate Catering',
      department: 'Catering',
      location: 'Jeddah',
      type: 'full-time' as const,
      level: 'senior' as const,
      description: 'Oversee culinary operations for large-scale corporate catering, menu development, and kitchen team management.',
      requirements: [
        'Culinary Arts degree or equivalent',
        '10+ years commercial kitchen experience',
        'Food safety certifications',
        'Menu planning and cost control expertise',
        'Team leadership experience'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental coverage',
        'Professional development budget',
        'Housing allowance',
        'Annual leave package'
      ],
      postedDate: '2024-01-12',
      featured: true
    },
    {
      id: 'project-manager',
      title: 'Project Manager - Construction',
      department: 'Construction',
      location: 'Dammam',
      type: 'full-time' as const,
      level: 'mid' as const,
      description: 'Manage construction projects from planning to completion, ensuring quality, timeline, and budget adherence.',
      requirements: [
        'Engineering degree (Civil/Mechanical)',
        '5+ years project management experience',
        'Knowledge of Saudi building codes',
        'MS Project proficiency',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Attractive compensation package',
        'Medical insurance',
        'Performance bonuses',
        'Career advancement opportunities',
        'Training programs'
      ],
      postedDate: '2024-01-10',
      featured: false
    },
    {
      id: 'hr-specialist',
      title: 'HR Specialist - Talent Acquisition',
      department: 'Human Resources',
      location: 'Riyadh',
      type: 'full-time' as const,
      level: 'mid' as const,
      description: 'Drive talent acquisition initiatives, develop recruitment strategies, and support organizational growth.',
      requirements: [
        'Bachelor\'s in HR or Business Administration',
        '3+ years recruitment experience',
        'SHRM certification preferred',
        'Excellent communication skills',
        'Knowledge of Saudi labor laws'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Professional certifications support',
        'Flexible working arrangements',
        'Employee development programs'
      ],
      postedDate: '2024-01-08',
      featured: false
    },
    {
      id: 'store-manager',
      title: 'Store Manager - Tamimi Markets',
      department: 'Retail',
      location: 'Multiple Locations',
      type: 'full-time' as const,
      level: 'mid' as const,
      description: 'Manage daily store operations, team leadership, customer service excellence, and sales performance.',
      requirements: [
        'Bachelor\'s degree preferred',
        '4+ years retail management experience',
        'Customer service excellence',
        'Team leadership skills',
        'Inventory management knowledge'
      ],
      benefits: [
        'Competitive base salary',
        'Performance incentives',
        'Health benefits',
        'Career progression opportunities',
        'Employee discounts'
      ],
      postedDate: '2024-01-05',
      featured: true
    },
    {
      id: 'financial-analyst',
      title: 'Senior Financial Analyst',
      department: 'Finance',
      location: 'Riyadh',
      type: 'full-time' as const,
      level: 'senior' as const,
      description: 'Provide financial analysis, reporting, and strategic insights to support business decision-making across divisions.',
      requirements: [
        'CPA or CFA certification',
        '6+ years financial analysis experience',
        'Advanced Excel and financial modeling',
        'ERP systems experience',
        'Strong analytical and presentation skills'
      ],
      benefits: [
        'Excellent compensation package',
        'Comprehensive health coverage',
        'Annual bonus potential',
        'Professional development support',
        'Modern office environment'
      ],
      postedDate: '2024-01-03',
      featured: false
    }
  ] as Job[],

  // Office Locations
  offices: [
    {
      id: 'riyadh-hq',
      name: 'Headquarters',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address: 'King Fahd Road, Al Olaya District, Riyadh 11564',
      coordinates: [46.6753, 24.7136] as [number, number],
      phone: '+966 11 464 0000',
      email: 'info@tamimigroup.com',
      type: 'headquarters' as const,
      employees: 2500,
      established: '1940'
    },
    {
      id: 'jeddah-regional',
      name: 'Jeddah Regional Office',
      city: 'Jeddah',
      country: 'Saudi Arabia',
      address: 'Prince Sultan Road, Al Rawdah District, Jeddah 21442',
      coordinates: [39.1728, 21.5433] as [number, number],
      phone: '+966 12 663 0000',
      email: 'jeddah@tamimigroup.com',
      type: 'regional' as const,
      employees: 1800,
      established: '1965'
    },
    {
      id: 'dammam-regional',
      name: 'Dammam Regional Office',
      city: 'Dammam',
      country: 'Saudi Arabia',
      address: 'King Saud Road, Al Faisaliyah District, Dammam 31952',
      coordinates: [50.0888, 26.4207] as [number, number],
      phone: '+966 13 834 0000',
      email: 'dammam@tamimigroup.com',
      type: 'regional' as const,
      employees: 2200,
      established: '1968'
    },
    {
      id: 'doha-office',
      name: 'Doha Office',
      city: 'Doha',
      country: 'Qatar',
      address: 'West Bay, Tower 2, Floor 15, Doha',
      coordinates: [51.5310, 25.2854] as [number, number],
      phone: '+974 4483 0000',
      email: 'doha@tamimigroup.com',
      type: 'branch' as const,
      employees: 150,
      established: '2005'
    },
    {
      id: 'kuwait-office',
      name: 'Kuwait Office',
      city: 'Kuwait City',
      country: 'Kuwait',
      address: 'Salmiya, Block 2, Street 5, Kuwait City',
      coordinates: [48.0758, 29.3375] as [number, number],
      phone: '+965 2571 0000',
      email: 'kuwait@tamimigroup.com',
      type: 'branch' as const,
      employees: 400,
      established: '1995'
    },
    {
      id: 'manama-office',
      name: 'Manama Office',
      city: 'Manama',
      country: 'Bahrain',
      address: 'Diplomatic Area, Building 123, Manama',
      coordinates: [50.5860, 26.2285] as [number, number],
      phone: '+973 1753 0000',
      email: 'manama@tamimigroup.com',
      type: 'branch' as const,
      employees: 200,
      established: '1998'
    }
  ] as Office[],

  // Employee Testimonials
  testimonials: [
    {
      id: 'sarah-manager',
      name: 'Sarah Al-Rashid',
      position: 'Operations Manager',
      department: 'Facility Management',
      quote: 'Working at Tamimi Group has been an incredible journey. The company\'s commitment to excellence and employee development has helped me grow both professionally and personally.',
      avatar: '/media/avatars/sarah-al-rashid.jpg',
      years: 8,
      featured: true
    },
    {
      id: 'mohammed-chef',
      name: 'Mohammed Al-Tamimi',
      position: 'Executive Chef',
      department: 'Catering Services',
      quote: 'The creative freedom and resources provided here allow me to deliver exceptional culinary experiences. I\'m proud to be part of a team that serves thousands of meals daily with such high standards.',
      avatar: '/media/avatars/mohammed-al-tamimi.jpg',
      years: 12,
      featured: true
    },
    {
      id: 'fatima-analyst',
      name: 'Fatima Al-Zahra',
      position: 'Financial Analyst',
      department: 'Finance',
      quote: 'Tamimi Group offers excellent career progression opportunities. The mentorship and training programs have been instrumental in my professional development.',
      avatar: '/media/avatars/fatima-al-zahra.jpg',
      years: 5,
      featured: true
    },
    {
      id: 'ahmed-engineer',
      name: 'Ahmed Al-Mahmoud',
      position: 'Project Engineer',
      department: 'Construction',
      quote: 'Being part of major infrastructure projects across the Kingdom is incredibly fulfilling. The company\'s safety standards and project quality are world-class.',
      avatar: '/media/avatars/ahmed-al-mahmoud.jpg',
      years: 7,
      featured: false
    }
  ] as Testimonial[],

  // Company Values
  values: [
    {
      id: 'excellence',
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, delivering exceptional quality and service that exceeds expectations.',
      icon: 'Award',
      color: '#C9A227'
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to drive progress, efficiency, and sustainable growth.',
      icon: 'Lightbulb',
      color: '#2563EB'
    },
    {
      id: 'integrity',
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our relationships and operations.',
      icon: 'Shield',
      color: '#059669'
    },
    {
      id: 'community',
      title: 'Community',
      description: 'We are committed to contributing to the development and prosperity of the communities we serve.',
      icon: 'Heart',
      color: '#DC2626'
    }
  ] as Value[],

  // Timeline Events
  timeline: [
    {
      id: 'founding',
      decade: '1940s',
      year: '1940',
      title: 'Foundation',
      description: 'Tamimi Group established with a vision to serve the growing needs of Saudi Arabia.',
      image: '/media/images/timeline/1940s.jpg',
      achievements: [
        'Company founded in Riyadh',
        'First catering contracts secured',
        'Established core values and principles'
      ]
    },
    {
      id: 'expansion',
      decade: '1960s',
      year: '1965',
      title: 'Regional Expansion',
      description: 'Expanded operations across the Kingdom with diversified service offerings.',
      image: '/media/images/timeline/1960s.jpg',
      achievements: [
        'Opened Jeddah regional office',
        'Launched facility management division',
        'Secured major government contracts'
      ]
    },
    {
      id: 'growth',
      decade: '1980s',
      year: '1985',
      title: 'Diversification',
      description: 'Diversified into multiple business sectors and expanded regional presence.',
      image: '/media/images/timeline/1980s.jpg',
      achievements: [
        'Entered construction and contracting',
        'Expanded to GCC markets',
        'Established board and lodging services'
      ]
    },
    {
      id: 'modernization',
      decade: '2000s',
      year: '2005',
      title: 'Modernization',
      description: 'Embraced technology and modern business practices for enhanced efficiency.',
      image: '/media/images/timeline/2000s.jpg',
      achievements: [
        'Implemented ERP systems',
        'ISO certifications achieved',
        'Launched Tamimi Markets'
      ]
    },
    {
      id: 'innovation',
      decade: '2020s',
      year: '2020',
      title: 'Digital Transformation',
      description: 'Leading innovation in digital transformation and sustainability initiatives.',
      image: '/media/images/timeline/2020s.jpg',
      achievements: [
        'Digital transformation programs',
        'Sustainability initiatives launched',
        'Vision 2030 strategic partnerships'
      ]
    }
  ] as TimelineEvent[],

  // Leadership Team
  leadership: [
    {
      id: 'chairman-ceo',
      name: 'Abdullah Al-Tamimi',
      position: 'Chairman & CEO',
      bio: 'Leading Tamimi Group with over 30 years of experience in business development, strategic planning, and organizational excellence.',
      image: '/media/avatars/abdullah-al-tamimi.jpg',
      linkedin: 'https://linkedin.com/in/abdullah-al-tamimi',
      experience: 30,
      education: ['MBA, Harvard Business School', 'BS Engineering, KFUPM']
    },
    {
      id: 'coo',
      name: 'Sarah Al-Tamimi',
      position: 'Chief Operating Officer',
      bio: 'Overseeing operational excellence across all business divisions with focus on innovation, efficiency, and customer satisfaction.',
      image: '/media/avatars/sarah-al-tamimi-exec.jpg',
      linkedin: 'https://linkedin.com/in/sarah-al-tamimi',
      experience: 25,
      education: ['MBA, INSEAD', 'BS Industrial Engineering, KAUST']
    },
    {
      id: 'cfo',
      name: 'Mohammed Al-Rashid',
      position: 'Chief Financial Officer',
      bio: 'Managing financial strategy, investor relations, and corporate finance with expertise in growth planning and risk management.',
      image: '/media/avatars/mohammed-al-rashid.jpg',
      linkedin: 'https://linkedin.com/in/mohammed-al-rashid',
      experience: 20,
      education: ['CPA Certification', 'MS Finance, LSE']
    },
    {
      id: 'chro',
      name: 'Fatima Al-Zahra',
      position: 'Chief Human Resources Officer',
      bio: 'Leading talent development, organizational culture, and human capital initiatives across our 21,000+ employee base.',
      image: '/media/avatars/fatima-al-zahra-exec.jpg',
      linkedin: 'https://linkedin.com/in/fatima-al-zahra',
      experience: 18,
      education: ['PhD Organizational Psychology', 'SHRM-SCP Certification']
    }
  ] as Leader[],

  // CSR Statistics
  csrStats: [
    {
      id: 'scholarships',
      value: 500,
      suffix: '+',
      label: 'Scholarships',
      description: 'Educational scholarships provided',
      icon: 'GraduationCap'
    },
    {
      id: 'clinics',
      value: 25,
      suffix: '',
      label: 'Health Clinics',
      description: 'Community health facilities supported',
      icon: 'Heart'
    },
    {
      id: 'co2-saved',
      value: 30,
      suffix: '%',
      label: 'CO₂ Reduction',
      description: 'Environmental impact decreased',
      icon: 'Leaf'
    },
    {
      id: 'programs',
      value: 50,
      suffix: '+',
      label: 'Programs',
      description: 'Active CSR initiatives',
      icon: 'Users'
    }
  ] as Stat[]
};

export default siteData;