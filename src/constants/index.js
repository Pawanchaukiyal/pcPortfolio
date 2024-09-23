import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fitmaker,
  namo,
  meta,
  starbucks,
  tesla,
  shopify,
  doc,
  threejs,
  express,
  deepu,
  vivek,
  rohit,
  devtown,
  drdo
} from "../assets";


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Pawan proved me wrong.",
    name: "Deepanshu",
    designation: "Freelancer",
    company: "Freelancing",
    image: deepu,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Rohit",
    designation: "Manager",
    company: "Samsung",
    image: rohit,
  },
  {
    testimonial:
      "After Pawan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vivek",
    designation: "CTO",
    company: "DevTown",
    image: vivek,
  },
];

const projects = [
  {
    name: "Fit_Maker",
    description:
      "Fitmaker is an innovative web platform that promises to improve user fitness and health through personalized experiences. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fitmaker,
    source_code_link: "https://fit-make-front-face.vercel.app/",
  },
  {
    name: "NamoCommerce",
    description:
      "Created an e-commerce web app utilizing React, Node.js, and Firebase to ensure an efficient, scalable, and real-time application... ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: namo,
    source_code_link: "https://namo-ecommerc.vercel.app/",
  },
  {
    name: "Doc_Pointment",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "viteReact",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: doc,
    source_code_link: "https://github.com/Pawanchaukiyal/DocAppoint",
  },
];


// work Experiences

const workExperiencesdata = [
  {
    id: 1,
    name: 'Devtown',
    pos: 'Front End Developer',
    duration: '2023',
    title: "Improved web application user engagement and performance through strategic implementation of interactive features, responsive design, and backend optimization. Collaborated effectively with design and development teams to deliver a superior user experience and drive significant growth in mobile traffic. Demonstrated technical proficiency in Node.js, MongoDB, and code review while contributing to the maintenance and update of a large-scale e-commerce platform.",
    icon: devtown,
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Drdo',
    pos: 'IOT Eng.',
    duration: '2019',
    title: "Worked on IoT and electronics projects at DRDO. Contributed to the development of innovative solutions leveraging Internet of Things technology. Demonstrated expertise in electronics engineering and applied knowledge to real-world applications.",
    icon: drdo,
    animation: 'salute',
  },
  // {
  //   id: 3,
  //   name: 'Notion',
  //   pos: 'Junior Web Developer',
  //   duration: '2019 - 2020',
  //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: '/assets/notion.svg',
  //   animation: 'salute',
  // },
];

export { services, technologies, experiences, testimonials, projects, workExperiencesdata};