import { Project, Experience } from './types';
import portraitImg from './assets/portrait.jpg';
import classinHeroImg from './assets/classin-hero.png';
import longzhuHeroImg from './assets/longzhu-hero.png';
import datavizHeroImg from './assets/dataviz-hero.jpeg';

// Helper to load and sort images dynamically
const getDrafts = (glob: Record<string, { default: string }>) => {
  return Object.keys(glob)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map(key => glob[key].default);
};

// Dynamic imports using Vite's glob feature
// eager: true ensures they are bundled immediately rather than lazy loaded
const classinDrafts = getDrafts(import.meta.glob('./assets/classin-x/*.{png,jpg,jpeg,svg}', { eager: true }));
const longzhuDrafts = getDrafts(import.meta.glob('./assets/longzhu/*.{png,jpg,jpeg,svg}', { eager: true }));
const datavizDrafts = getDrafts(import.meta.glob('./assets/data-vis/*.{png,jpg,jpeg,svg}', { eager: true }));

export const content = {
  en: {
    nav: {
      home: 'Homepage',
      about: 'About',
      experience: 'Experience',
      project: 'Project',
      contact: 'Contact',
    },
    hero: {
      year: 'PORTFOLIO 2023',
      name_prefix: 'ZHAO',
      name_suffix: 'ANQI',
      role: 'Senior Interaction Designer & Product Thinker',
      description: "She’s the hub of the team’s design process.\nall ideas flow through her to make sense.",
      experience_years: '6 YEARS EXPERIENCE',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'
    },
    about: {
      title_prefix: "Hi, I'm",
      title_suffix: "Angel",
      p1_start: "I am a",
      p1_strong: "Interaction Designer",
      p1_end: "dedicated to creating comfortable interaction experiences and finding better problem-solving methods for enterprises.",
      p2_start: "6+ years of interaction design experience, familiar with multi-platform design processes. Skilled in producing high-fidelity prototypes for business interviews and testing. I comprehensively consider technical and commercial factors to drive product implementation and build detailed product solutions from 0 to 1.",
      tags: [
        "Good at communication", "Strong logical analysis", "Self-driven",
        "Finance knowledge", "Digital product thinking",
        "Multi-business experience", "AI product experience",
        "Quick learner"
      ],
      cards: {
        role: { title: 'Role', desc: 'Interaction Design / Product Mgr' },
        edu: { title: 'Education', desc: "Master's @ DUT" },
        skills: { title: 'Core Skills', desc: 'User Research, Prototyping' },
        focus: { title: 'Focus', desc: 'Finance, Strategy, AI, HCI' },
      },
      badge: '6+ Years\nExperience',
      image: portraitImg
    },
    projects: {
      title_prefix: 'Selected',
      title_suffix: 'Work',
      subtitle: 'A deep dive into complex problems solved through rigorous design thinking.',
      modal_labels: {
        situation: 'Situation',
        task: 'Task',
        action: 'Action',
        result: 'Result',
        drafts: 'Design Drafts & Process'
      }
    },
    experience: {
      title_prefix: 'Experience',
      title_suffix: 'Timeline',
    },
    contact: {
      title_prefix: "Let's Build Something",
      title_suffix: "Cool",
      desc: "Currently open for new opportunities in UX Design and Digital Product Strategy.",
      copyright: "© 2025 Angel Zhao. All rights reserved.",
      email: "zhaoanqi.dl@163.com",
      phone: "+86 151 8402 7334",
      socials: [
        { name: 'XiaoHongShu', url: 'https://xhslink.com/m/stajSYRdBw' },
        { name: 'Douyin', url: 'https://v.douyin.com/bLzW8gJ8blk/' }
      ]
    }
  },
  zh: {
    nav: {
      home: '主页',
      about: '关于',
      experience: '经历',
      project: '作品',
      contact: '联系',
    },
    hero: {
      year: '2023 作品集',
      name_prefix: '赵',
      name_suffix: '安琪',
      role: '资深交互设计师 & 产品思维者',
      description: '她是团队设计流程的枢纽。\n所有的想法都汇聚于此，变得富有意义。',
      experience_years: '6年从业经验',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'
    },
    about: {
      title_prefix: "你好，我是",
      title_suffix: "Angel",
      p1_start: "我是一名",
      p1_strong: "交互设计师",
      p1_end: "，致力于打造舒适的交互体验，为企业寻找更好的解决问题的方法。",
      p2_start: "拥有6年+交互设计经验，熟悉多端设计流程方法；善于产出高保真原型对业务进行访谈与测试；并综合考虑技术、商业等因素，组织沟通评审，推动产品落地，从O到1搭建细化产品方案。",
      tags: [
        "善于沟通", "逻辑分析能力强", "自驱力强",
        "具备金融类相关知识", "数字化产品思维",
        "多业务经验", "做过AI产品",
        "能够快速学习领域知识"
      ],
      cards: {
        role: { title: '角色', desc: '交互设计 / 产品经理' },
        edu: { title: '学历', desc: '大连理工大学 硕士' },
        skills: { title: '核心技能', desc: '用户调研, 高保真原型' },
        focus: { title: '关注领域', desc: '金融投资、数字战略、AI、人机交互' },
      },
      badge: '6年+\n从业经验',
      image: portraitImg
    },
    projects: {
      title_prefix: '精选',
      title_suffix: '作品',
      subtitle: '通过严谨的设计思维深入剖析复杂问题的解决方案。',
      modal_labels: {
        situation: '背景 (Situation)',
        task: '任务 (Task)',
        action: '行动 (Action)',
        result: 'Result',
        drafts: '设计稿与过程 (Design Drafts)'
      }
    },
    experience: {
      title_prefix: '工作',
      title_suffix: '经历',
    },
    contact: {
      title_prefix: "共创精彩",
      title_suffix: "未来",
      desc: "目前开放交互设计与数字产品策略方面的新机会。",
      copyright: "© 2025 赵安琪.保留所有权利.",
      email: "zhaoanqi.dl@163.com",
      phone: "+86 151 8402 7334",
      socials: [
        { name: '小红书', url: 'https://xhslink.com/m/stajSYRdBw' },
        { name: '抖音', url: 'https://v.douyin.com/bLzW8gJ8blk/' }
      ]
    }
  }
};

export const projectsData: Record<'en' | 'zh', Project[]> = {
  en: [
    {
      id: 'classin-x',
      title: 'ClassIn X Smart Classroom',
      category: 'EdTech / Hardware & Software',
      role: 'Lead Interaction Designer',
      image: classinHeroImg,
      designDrafts: classinDrafts,
      summary: 'A comprehensive smart screen solution bridging the gap between online and offline education (OMO).',
      color: 'from-emerald-500 to-teal-900',
      tags: ['Smart Hardware', 'Launcher Design', 'Interaction Design'],
      star: {
        situation: 'Traditional classrooms lacked data integration. Teachers faced a "digital divide" between online teaching tools and offline hardware, leading to disjointed experiences and high learning costs for new devices.',
        task: 'Design a "Smart Classroom" system (ClassIn X) that lowers the cognitive load for teachers, integrates seamlessly with the ClassIn software ecosystem, and captures vital classroom interaction data.',
        action: [
          'Designed a "Zero-Learning-Cost" Launcher customized for large touchscreens, simplifying the entry point to just 3 core functions.',
          'Invented a Gesture-based Round Toolbar to replace complex linear menus, optimizing for large screen ergonomics (arm reach radius).',
          'Created "Double Device Mode" allowing teachers to control the large screen from their phone while walking around the class.',
          'Developed visual Learning Reports generated instantly after class to provide feedback to students and parents.'
        ],
        result: [
          'Deployed in 800+ schools, becoming a key revenue driver.',
          'Reduced teacher onboarding time significantly with the "Open & Use" philosophy.',
          'Successfully bridged the OMO (Online-Merge-Offline) gap, allowing seamless transition of teaching assets.'
        ]
      }
    },
    {
      id: 'longzhu',
      title: 'Longfor "Longzhu" Membership',
      category: 'Digital Transformation / B2C',
      role: 'Product Manager & Interaction Designer',
      image: longzhuHeroImg,
      designDrafts: longzhuDrafts,
      summary: 'A unified membership and loyalty system for Longfor Group, connecting Real Estate, Malls, and Rental businesses.',
      color: 'from-orange-500 to-red-900',
      tags: ['Membership System', 'Cross-platform', 'Strategy'],
      star: {
        situation: 'Longfor Group had fragmented user bases across its various business units (Residential, Commercial Malls, Long-term Rentals). There was no unified identity, leading to lost cross-selling opportunities.',
        task: 'Build a unified "Longzhu" (Dragon Pearl) membership system to consolidate 50M+ users into a single private traffic pool and increase customer lifetime value.',
        action: [
          'Unified the visual identity and user account system across B2C apps (U-Xiangjia, Paradise Walk).',
          'Designed a universal "Longzhu" points system valid across all business scenarios (e.g., use points from rent to buy coffee in malls).',
          'Standardized the UX for membership tiers, rights redemption, and profile management.'
        ],
        result: [
          'Unified user base exceeding 50 Million.',
          'Increased App DAU by 50% and MAU by 72%.',
          'Boosted average user consumption/spending by 260% through cross-scenario point usage.'
        ]
      }
    },
    {
      id: 'data-viz',
      title: 'Strategic Data Dashboard',
      category: 'B-End / Data Visualization',
      role: 'Interaction Designer',
      image: datavizHeroImg,
      designDrafts: datavizDrafts,
      summary: 'High-level decision-making dashboard for Real Estate executives, transforming complex data into actionable insights.',
      color: 'from-blue-600 to-indigo-900',
      tags: ['Data Viz', 'B-End', 'Dashboard'],
      star: {
        situation: 'Executives struggled to get a real-time overview of sales, property management, and customer satisfaction across different regions. Reports were static and slow.',
        task: 'Design a "Digital War Room" big screen experience for strategic decision-making.',
        action: [
          'Conducted stakeholder interviews to identify Key Performance Indicators (KPIs).',
          'Designed modular data widgets for flexibility across different screen sizes (PC, iPad, Large Screen).',
          'Applied dark-mode UI with neon data accents for clarity in low-light presentation rooms.'
        ],
        result: [
          'Improved decision-making efficiency by 60%.',
          'Established a standardized design system for all internal data tools.',
          'Awarded internal innovation prize for digital transformation.'
        ]
      }
    }
  ],
  zh: [
    {
      id: 'classin-x',
      title: 'ClassIn X 智慧教室',
      category: '教育科技 / 软硬件结合',
      role: '交互设计负责人',
      image: classinHeroImg,
      designDrafts: classinDrafts,
      summary: '连接线上线下教育(OMO)的综合智慧大屏解决方案。',
      color: 'from-emerald-500 to-teal-900',
      tags: ['智能硬件', '启动器设计', '交互设计'],
      star: {
        situation: '传统教室缺乏数据整合。教师面临线上教学工具与线下硬件之间的“数字鸿沟”，导致体验割裂，新设备学习成本高。',
        task: '设计“智慧教室”系统(ClassIn X)，降低教师认知负荷，与ClassIn软件生态无缝集成，并捕捉关键课堂互动数据。',
        action: [
          '设计“零学习成本”启动器，针对大触摸屏定制，将入口简化为3个核心功能（开机、白板、上课）。',
          '发明手势圆形工具栏替代复杂的线性菜单，优化大屏人体工学（基于55cm手臂伸展半径）。',
          '创造“双设备模式”，允许教师在教室内走动时通过手机控制大屏，解决讲台束缚问题。',
          '开发可视化教学报告，课后即时生成，为学生和家长提供学情反馈。'
        ],
        result: [
          '部署于800+所学校，成为公司关键营收增长点。',
          '通过“开机即用”理念显著缩短教师上手时间，广受好评。',
          '成功弥合OMO（线上融合线下）差距，实现教学资产无缝流转。'
        ]
      }
    },
    {
      id: 'longzhu',
      title: '龙湖“珑珠”会员体系',
      category: '数字化转型 / B2C',
      role: '产品经理 & 交互设计',
      image: longzhuHeroImg,
      designDrafts: longzhuDrafts,
      summary: '龙湖集团统一会员及忠诚度系统，连接地产、商场和租赁业务。',
      color: 'from-orange-500 to-red-900',
      tags: ['会员体系', '跨平台体验', '产品策略'],
      star: {
        situation: '龙湖集团各业务单元（住宅、商场、长租）用户群分散。缺乏统一身份，导致交叉销售机会流失，无法形成合力。',
        task: '建立统一的“珑珠”会员体系，将5000万+用户整合到单一私域流量池，提升客户生命周期价值(LTV)。',
        action: [
          '统一B2C应用（U享家、龙湖天街）的视觉识别和用户账户体系，建立一致的心智。',
          '设计通用的“珑珠”积分系统，适用于所有业务场景（如用交租积分在商场买咖啡，实现跨业态消费）。',
          '标准化会员等级、权益兑换和个人资料管理的用户体验。'
        ],
        result: [
          '统一用户基数超过5000万。',
          'App日活增长50%，月活增长72%。',
          '通过跨场景积分使用，用户平均消费/支出提升260%。'
        ]
      }
    },
    {
      id: 'data-viz',
      title: '战略决策智慧大屏',
      category: 'B端 / 数据可视化',
      role: '交互设计师',
      image: datavizHeroImg,
      designDrafts: datavizDrafts,
      summary: '面向地产高管的决策大屏，将复杂数据转化为可执行的洞察。',
      color: 'from-blue-600 to-indigo-900',
      tags: ['数据可视化', 'B端设计', '大屏设计'],
      star: {
        situation: '高管难以实时获取各区域销售、物业管理和客户满意度概况。传统报告静态且滞后，无法支持敏捷决策。',
        task: '设计用于战略决策的“数字作战室”大屏体验，实现数据驱动管理。',
        action: [
          '进行利益相关者访谈，确定关键绩效指标(KPI)及数据优先级。',
          '设计模块化数据组件，灵活适配不同屏幕尺寸（PC、iPad、大屏）。',
          '应用深色模式UI和霓虹数据强调，确保在低光演示室中的清晰度与科技感。'
        ],
        result: [
          '信息获取与决策效率提升60%。',
          '为所有内部数据工具建立了标准化的设计系统。',
          '获得内部数字化转型创新奖。'
        ]
      }
    }
  ]
};

export const experienceData: Record<'en' | 'zh', Experience[]> = {
  en: [
    {
      id: '0',
      company: 'Forest Consulting (Startup)',
      role: 'Product Designer / Consultant',
      period: '2024 - 2025',
      description: 'Developed "Domestic Pre-U + Overseas Master" pathway, integrating Hanqiao College with University of Suffolk (UK) business & data science courses, adding AI industry modules, achieving mutual credit recognition to shorten study duration.'
    },
    {
      id: '1',
      company: 'EEO (ClassIn)',
      role: 'Product Manager / Interaction Designer',
      period: '2022 - 2024',
      description: 'Led design of Flowin (collaborative docs) and ClassIn X (smart classroom hardware). Promoted transformation of tool docs towards lightweight knowledge community.'
    },
    {
      id: '2',
      company: 'Longfor Group',
      role: 'Interaction Designer / Product Manager',
      period: '2019 - 2022',
      description: 'Core member of "Longzhu" membership system. Responsible for coordinating real estate digital transformation, building strategic decision smart screen V1.0, and unifying group design standards.'
    },
    {
      id: '3',
      company: 'Tencent',
      role: 'New Media / Interaction Intern',
      period: '2018 - 2019',
      description: 'Responsible for Tencent Auto official account operations, produced articles for Tencent Auto, and conducted industry research on leading competitors like Autohome and Dongchedi.'
    }
  ],
  zh: [
    {
      id: '0',
      company: '福里斯特咨询公司 (创业项目)',
      role: '产品设计/顾问',
      period: '2024 - 2025',
      description: '开发“国内预科+海外硕士”衔接路径，整合汉桥学院与英国萨福克大学商科、数据科学课程，增设AI行业应用模块，实现国内合作院校学分互认以缩短留学周期。'
    },
    {
      id: '1',
      company: '翼鸥教育 (ClassIn)',
      role: '产品经理 / 交互设计师',
      period: '2022 - 2024',
      description: '主导Flowin（协作文档）和ClassIn X（智慧教室硬件）的设计。推动工具文档向轻量化知识社区方向转变。'
    },
    {
      id: '2',
      company: '龙湖集团',
      role: '交互设计师 / 产品经理',
      period: '2019 - 2022',
      description: '“珑珠”会员体系核心成员。负责统筹地产数字化转型业务，搭建战略决策智慧大屏V1.0，统一集团设计规范。'
    },
    {
      id: '3',
      company: '腾讯 (Tencent)',
      role: '新媒体/交互实习',
      period: '2018 - 2019',
      description: '负责腾讯用车公众号运营、负责腾讯网汽车稿件，针对龙头竞品汽车之家、懂车帝做相关行业调研。'
    }
  ]
};