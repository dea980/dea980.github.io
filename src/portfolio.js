/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  // wanted to set as true but might need my initial settings
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Daeyeop's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Daeyeop Kim Portfolio",
    type: "website",
    url: "http://dea980.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Daeyeop Kim",
  logo_name: "DaeyeopKim",
  nickname: "Dan the Man",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  // my resume need to be updated on the drive
  resumeLink:
    "https://drive.google.com/file/d/1LOd6jVTlXfyu25IEgngsHXqWuIUCDHLP/view?usp=sharing",
  portfolio_repository: "https://dyk98.tistory.com/",
  githubProfile: "https://github.com/dea980",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  //github: "https://github.com/dea980",
  // linkedin: "https://www.linkedin.com/in/daeyeop-kim-372761129/",
  // gmail: "kdea989@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/dea980/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/dea980/"

  {
    name: "Github",
    link: "https://github.com/dea980",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/daeyeop-kim-372761129/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:kdea989@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/dea980",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/dea980/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dea980/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        // I might need to add my researches....
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Reinforcement Learning project with visual input and GPU implementation research with Big Red 200 from IU",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "skitlearn",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Flutter",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, FastAPI & Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:Django",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        //     {
        //       skillName: "GCP",
        //       fontAwesomeClassname: "simple-icons:googlecloud",
        //       style: {
        //         color: "#4285F4",
        //       },
        //     },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/dea980/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/kdea989",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@kdea989",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/dea980",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indiana University Bloomington",
      subtitle: "B.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2017 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Reinforcment Learning etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in ML and 3D model.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Data Science",
//       subtitle: "- Alex Aklson",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Big Data",
//       subtitle: "- Kim Akers",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//       alt_name: "Microsoft",
//       color_code: "#D83B0199",
//     },
//     {
//       title: "Advanced Data Science",
//       subtitle: "- Romeo Kienzler",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Advanced ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "DL on Tensorflow",
//       subtitle: "- Laurence Moroney",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "Fullstack Development",
//       subtitle: "- Jogesh Muppala",
//       logo_path: "coursera_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//       alt_name: "Coursera",
//       color_code: "#2A73CC",
//     },
//     {
//       title: "Kuberenetes on GCP",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//     {
//       title: "Cryptography",
//       subtitle: "- Saurabh Mukhopadhyay",
//       logo_path: "nptel_logo.png",
//       certificate_link:
//         "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//       alt_name: "NPTEL",
//       color_code: "#FFBB0099",
//     },
//     {
//       title: "Cloud Architecture",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience and Projects",
  description:
    "I have worked as a Software Engineer and Research Assistant, focusing on software development, machine learning, and research projects. My experience spans across various domains including firmware development, VR applications, and mobile app development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer (Firmware)",
          company: "Indy Audio Labs.LLC",
          company_url: "https://www.indyaudiolabs.com/",
          logo_path: "company.png",
          duration: "May 2024 - November 2024",
          location: "Indianapolis, IN",
          description:
            "• Deployed and collaborated with company git system for the firmware-embedded hardware development for high-end home theater processor systems.\n• Optimized the web interface system and implemented API for handling problems such as CORS problems from UI interaction.\n• Diagnosed UI polling speed with reverse engineering and improved the UI react speed up to 85%.",
          color: "#0879bf",
        },
        {
          title: "Research Assistant",
          company: "Luddy School of Informatics, The Building a Mind Lab",
          company_url: "https://bloomington.iu.edu/",
          logo_path: "company.png",
          duration: "May 2023 - May 2024",
          location: "Bloomington, IN",
          description:
            "• Assisted in the development of a VR Animal Chamber Pipeline using the Unity Game Engine\n• Designed and exported 3D models for use in Animal Chamber Environment and 3D printing\n• Trained a Deep Pose Estimation Model, achieving on average 98% animal key-point accuracy",
          color: "#9b1578",
        },
        {
          title: "Software Developer, Co-Founder",
          company: "DUBU TIME",
          company_url: "#",
          logo_path: "company.png",
          duration: "December 2021 - February 2022",
          location: "Seoul, South Korea",
          description:
            "• Co-Founded Dubu Time, a mobile productivity app which rewards users for focusing on tasks\n• Deployed a user database backend for use on a front-end interface\n• Established robust CI/CD pipelines, utilizing GitHub for seamless project operation\n• Conducted market research on target app users to guide User Interface Design",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "Predicting the Stock market price with ML",
          company: "Research Project",
          company_url:
            "https://github.com/dea980/ML_Project-for-predicting-Stockprice",
          logo_path: "project.png",
          duration: "September 2023 - December 2023",
          location: "Bloomington, IN",
          description:
            "• Implemented the Machine Learning Architectures and create hybrid architectures with LSTM and GRU.\n• Collaborate and managed with advisor and teammate about research project presentation and paper.",
          color: "#4285F4",
        },
        {
          title: "Reinforcement Learning from Visual Inputs",
          company: "Research Project",
          company_url: "https://github.com/dea980/RL_Project-with-Visual_Input",
          logo_path: "project.png",
          duration: "January 2023 - May 2023",
          location: "Bloomington, IN",
          description:
            "• Trained and experimented with several RL agents in OpenAI Gym to perform classic Cartpole balancing task\n• Optimized training data through a Variational Auto-Encoder to maximize agent performance",
          color: "#D83B01",
        },
        {
          title: "Can CPU programming be replaced by GPU programming",
          company: "Research Project",
          company_url:
            "https://github.com/dea980/BigRed200_research_project_by_cuda",
          logo_path: "project.png",
          duration: "August 2022 - December 2022",
          location: "Bloomington, IN",
          description:
            "• Developed algorithms to report and compare CPU and GPUs performance metrics on matrix transposition\n• Interfaced with IU's BigRed 200 supercomputer to perform metric comparisons",
          color: "#000000",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Vice President / Team Leader",
          company: "International Trend News",
          company_url: "#",
          logo_path: "leadership.png",
          duration: "November 2021 - March 2022",
          location: "Bloomington, IN",
          description:
            "• Collaborated with a team of three to conduct comprehensive research on companies\n• Performed regression analysis on previous market trends\n• Communicated economic trends and financial analysis statements",
          color: "#0C9D58",
        },
        {
          title: "Seminar Assistant",
          company: "Asian Informatics Computing Club",
          company_url: "#",
          logo_path: "leadership.png",
          duration: "August 2017 - May 2018",
          location: "Bloomington, IN",
          description:
            "• Launched weekly compute-engine languages sessions for 20+ members\n• Organized a community donation of $1,000+ to facilitate a budget for seminars",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};
// paper?
const publications = {
  data: [
    {
      id: "Stock Market Price Prediction with AI Models",
      name: "Stock Market Price Prediction with AI Models",
      createdAt: "2024-01-02T00:00:00Z",
      description:
        "Stock Research Price Prediction with AI Models paper and repository",
      url: "https://github.com/dea980/ML_Project-for-predicting-Stockprice",
    },
    {
      id: "Reinforcement Learning with Visual Inputs",
      name: "Reinforcement Learning with Visual Inputs",
      createdAt: "2023-12-19T00:00:00Z",
      description: "RL Research paper and repository",
      url: "https://github.com/dea980/RL_Project-with-Visual_Input",
    },
    {
      id: "Is CPU and be replace in GPU",
      name: "Is CPU and be replace in GPU",
      createdAt: "2022-12-12T00:00:00Z",
      description: "GPU Research paper and repository",
      url: "https://github.com/dea980/BigRed200_research_project_by_cuda",
    },
  ],
};

// Contact Page
// I might need the picture of me ...?
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "DaeyeopKim.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://dyk98.tistory.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "201, Sagimakgol-ro, Jungwon-gu, Seongnam-si, Gyeonggi-do, Republic of Korea, 13205",
    locality: "Seongnam-si",
    country: "Republic of Korea",
    region: "Gyeonggi-do",
    postalCode: "13205",
    streetAddress: "201, Sagimakgol-ro",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/gfc2vZYmhw4Bd39o7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  // certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
