import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://thumbs2.imgbox.com/64/81/EYtrQV9A_t.jpg',
    title: 'MJWhatsapp',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
    ],
    description: `A secure social communication app. Has Secure features like anti ban & antivirus etc `,
    repoLink: '',
    sourceLink: 'https://apkadmin.com/so2njmqs0htj/MJWhatsApp_X3_2.23.13.76.apk.html',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://thumbs2.imgbox.com/54/64/HcdrddgI_t.jpg',
    title: 'BayMax AI',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
    ],
    description: `A Cool Artficial Intelligence AI Chat bot That Can be conversational & Can Help u`,
    repoLink: 'wa.me/+263780699988',
    sourceLink: 'https://apkadmin.com/vm4ffe406le4/Baymax_AI_v2_1.0.apk.html',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://thumbs2.imgbox.com/7d/af/JldmPg6E_t.jpg',
    title: 'Weather Apk',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
    ],
    description:
      'Weather App is a top-notch apk build with React Js, Node Js that can tell weather in any location.',
    repoLink: '',
    sourceLink: 'https://github.com/mrjuice01/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://thumbs2.imgbox.com/15/fd/u0Wsqe72_t.jpg',
    title: 'Velocity Race',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description:
      'A Simple 2D Game Build Using CSS, Next Js & Javascript.',
    repoLink: 'https://github.com/mrjuice01/',
    sourceLink: 'github.com/mrjuice01',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://thumbs2.imgbox.com/73/c0/sqmpG5zs_t.jpg',
    title: 'Seachify',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      {
        label: 'Java',
        icon: 'logos:java',
      },
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ],
    description:
      'A New Search Engine Wep Project Which Works just like google or microsoft or opera min',
    repoLink: 'https://github.com/mrjuice01',
    sourceLink: 'https://github.com/mrjuice01',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: 'https://thumbs2.imgbox.com/ae/8f/Ouc0YfrE_t.png',
    title: 'Dream Baymax AI',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: ' Dream BayMax is  Powerful Web App That can generate images from your text like midjourney or dale ai.',
    repoLink: 'https://github.com/mrjuice01',
    sourceLink: 'https://github.com/mrjuice01/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
