import {
    mobile,
    backend,
    creator,
    web,

    javascript,
    html,
    css,
    reactjs,
    threejs,
    java,
    nodejs,
    git,
    android,
    python,
    Cplusplus,
    django,
    sql,

    gfs,
    esync,
    outlier,


    carrent,
    jobit,
    tripguide,
    stockpro,
    healhoffman,
    openstreetmap,
    divvydata,
    echochess,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "C++",
      icon: Cplusplus,
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
      name: "java",
      icon: java,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Android",
      icon: android,
    },
  ];
  
  const experiences = [
    {
      title: "Sales Associate",
      company_name: "Gordon Food Service",
      icon: gfs,
      iconBg: "#383E56",
      date: "May 2022 - Aug 2024",
      points: [
        "Provided exceptional service by addressing customer inquiries, ensuring a positive shopping experience, and building strong customer loyalty.",
        "Assisted customers with product selection by offering in-depth knowledge of food service items and their applications.",
        "Maintained accurate stock levels by conducting regular inventory checks and coordinating with the team for restocking.",
        "Achieved sales targets by identifying customer needs, promoting special offers, and upselling complementary products.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Esync Technologies",
      icon: esync,
      iconBg: "#383E56",
      date: "July 2023 - Sept 2023",
      points: [
        "Designed and deployed a mobile app using FlutterFlow and Dart, addressing unemployment trends and enhancing user engagement by 20%.",
        "Implemented streamlined data handling services in Dart to enhance API integrations and ensure a seamless user experience.",
        "Delivered a responsive and interactive app interface, focusing on user-centric design principles.",
        "Engineered features that optimized data management workflows, resulting in improved application responsiveness and functionality.",
      ],
    },
    {
      title: "Software Developer - AI Trainer",
      company_name: "Outlier",
      icon: outlier,
      iconBg: "#383E56",
      date: "Aug 2024 - Dec 2024",
      points: [
        "Collaborated in curating and labeling datasets to improve machine learning model accuracy and performance.",
        "Assisted in refining AI algorithms through testing and iterative improvements based on model outputs.",
        "Contributed to developing tools and scripts for automating repetitive tasks in the AI training pipeline.",
        "Worked closely with cross-functional teams to align AI training initiatives with project goals and client requirements.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "StockPro",
      description:
        "A stock prediction web app enabling users to forecast trends, manage a waitlist, and make informed investment decisions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "machinelearning",
          color: "#e7ca2d-text-gradient",
        },
      ],
      image: stockpro,
      source_code_link: "https://github.com/",
    },
    {
      name: "FindMyDorm",
      description:
        "A platform that helps students discover, compare, and choose the ideal dormitory based on preferences and availability.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "android",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Heal Hoffman",
      description:
        "A web app where community members post jokes to uplift spirits and foster connection during the COVID-19 pandemic.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      ],
      image: healhoffman,
      source_code_link: "https://github.com/",
    },
    {
      name: "OpenStreetMap",
      description:
        "A C++ program that navigates two individuals in separate buildings to the closest meeting point using footways, leveraging Dijkstra's algorithm for optimal pathfinding.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "algorithms",
          color: "green-text-gradient",
        },
      ],
      image: openstreetmap,
      source_code_link: "https://github.com/",
    },
    {
      name: "DivvyData",
      description:
        "A C++ program analyzing Divvy bike usage data to uncover patterns, including the most popular stations and routes.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: divvydata,
      source_code_link: "https://github.com/",
    },
    {
      name: "EchoChess",
      description:
        "A voice-controlled chess website that allows users to make moves using speech commands, providing a hands-free and accessible way to play chess without needing to interact with a mouse or keyboard.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "chesslibraries",
          color: "green-text-gradient",
        },
      ],
      image: echochess,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };