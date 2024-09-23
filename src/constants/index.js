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
  drdo,
  blender
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
    title: "HTML5",
    // company_name: "Starbucks",
    icon: html,
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
    points: [
      "Creating and maintaining web pages using semantic HTML for better accessibility and SEO.",
      "Ensuring cross-browser compatibility and optimizing pages for performance.",
      "Collaborating with designers to implement responsive layouts.",
      "Validating HTML markup and following best practices for clean, maintainable code.",
    ],
  },
  {
    title: "CSS Developer",
    // company_name: "Tesla",
    icon: css,
    iconBg: "#E6DEDD",
    date: "May 2021 - Aug 2022",
    points: [
      "Designing and implementing visually appealing layouts using CSS and preprocessors like SASS.",
      "Ensuring website responsiveness and accessibility across various devices.",
      "Optimizing CSS for performance and maintainability.",
      "Creating and maintaining style guides and documentation for design consistency.",
    ],
  },
  {
    title: "JavaScript",
    // company_name: "Shopify",
    icon: javascript,
    iconBg: "#383E56",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Building interactive web applications using JavaScript frameworks and libraries.",
      "Utilizing ES6 features to enhance code readability and maintainability.",
      "Implementing AJAX requests for asynchronous data fetching and dynamic content updates.",
      "Debugging and optimizing JavaScript code for performance improvements.",
    ],
  },
  {
    title: "React.js Developer",
    // company_name: "Starbucks",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and related technologies.",
      "Collaborating with cross-functional teams to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Backend Solutions",
    icon: nodejs,
    iconBg: "#68A063",
    date: "May 2023 - June 2023",
    points: [
      "Building scalable server-side applications using Node.js and Express.",
      "Integrating third-party APIs and managing asynchronous operations.",
      "Implementing RESTful APIs for efficient data exchange between client and server.",
      "Participating in code reviews and ensuring best practices in backend development.",
    ],
  },
  {
    title: "Express.js Developer",
    // company_name: "Tech Enterprises",
    icon: express,
    iconBg: "#404D59",
    date: "June 2023 - June 2023",
    points: [
      "Developing and maintaining server-side applications using Express.js.",
      "Creating middleware for request processing and response handling.",
      "Implementing authentication and authorization for secure data access.",
      "Collaborating with frontend developers to ensure seamless integration.",
    ],
  },
  {
    title: "MongoDB Developer",
    // company_name: "Data Solutions",
    icon: mongodb,
    iconBg: "#47A248",
    date: "July 2023 - Sep2023",
    points: [
      "Designing and managing NoSQL databases using MongoDB.",
      "Implementing data models and optimizing database performance.",
      "Collaborating with backend developers to ensure efficient data storage and retrieval.",
      "Participating in database migrations and maintaining data integrity.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blender Artist",
    // company_name: "Creative Studio",
    icon: blender,
    iconBg: "#F5792A",
    date: "Aug 2024 - Present",
    points: [
      "Creating 3D models and animations using Blender for various projects.",
      "Collaborating with designers to develop visual assets for games and applications.",
      "Implementing realistic textures and lighting for enhanced visual fidelity.",
      "Optimizing 3D assets for performance and compatibility across platforms.",
    ],
  },
  {
    title: "Three.js Developer",
    // company_name: "Interactive Media",
    icon: threejs,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - Present",
    points: [
      "Building interactive 3D applications and visualizations using Three.js.",
      "Integrating 3D models and animations into web applications.",
      "Optimizing performance for smooth rendering and interactivity.",
      "Collaborating with designers to create immersive user experiences.",
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