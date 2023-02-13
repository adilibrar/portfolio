/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adil Ibrar",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Adil Ibrar Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Adil Ibrar",
  logo_name: "AdilIbrar",
  nickname: "Full Stack Engineer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1WVhTSeyM5ugJExghDCq5xQC77hdFshYg/view?usp=sharing",
  portfolio_repository: "https://adil-profile.netlify.app/#/contact",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/adilibrar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adil-ibrar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:adilibrar@hotmail.com",
    fontAwesomeIcon: "fa-microsoft", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/agentlone/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Hands-on experience designing, developing, and implementing applications and solutions using a range of technologies.",
        "⚡ Programming languages,including Python, PHP, JavaScript, Reactjs, Dart, microservices and Web Services (REST).",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "rgb(55, 118, 171)",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092e20",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "rgb(115, 119, 173)",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#F05340",
          },
        },
        {
          skillName: "Codeigniter",
          fontAwesomeClassname: "simple-icons:codeigniter",
          style: {
            color: "#dd4814",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
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
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Wix",
          fontAwesomeClassname: "simple-icons:wix",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "IOS",
          fontAwesomeClassname: "simple-icons:ios",
          style: {
            color: "#3DDC84",
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
      ],
    },
    {
      title: "Cloud InfraStructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms ",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Experience with Continuous Integration",
        "⚡ Work on  Source Control Tools Like GIT/GITHUB",
        "⚡ Experience in identifying and analyzing technical issues and troubleshooting them",
      ],
      softwareSkills: [
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },

        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
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
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
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
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F28C28",
      },
      profileLink: "https://leetcode.com/Kritagya7777/",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/kritagyakumra",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@kritagya6",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/kritagyakumra",
    },
    {
      siteName: "Coding Ninjas",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#F28C28",
      },
      profileLink:
        "https://www.codingninjas.com/codestudio/profile/34a33414-da35-4b62-ab67-1507226c6539",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "HU, Pakistan",
      subtitle: "Beachelor in Computer Science",
      logo_path: "hu.jpg",
      alt_name: "GNDU Main Campus, Amritsar",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Science, C/C++, Python, Java, Reactjs and Full Stack Development.",
        "⚡ I have created projects in different fields to master the fundamentals of the respective domains and have tried to master the concepts through their basics.",
        "⚡ I was known for my curiosity during my entire college period and have performed very well in every subject of my academic career .",
      ],
      website_link: "https://online.gndu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning A-Z™: Python & R in Data Science [2022]",
      subtitle:
        "- Kirill Eremenko, Hadelin de Ponteves, Ligency I Team, Ligency Team",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1hg_4k2fQLuALqQCqI0rrxQ0uobGFIG1m/view?usp=sharing",
      alt_name: "Machine Learning",
      color_code: "#E5AA70",
    },
    {
      title: "React 17",
      subtitle: "- Sameer Buna",
      logo_path: "Pluralsight_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1qDvCdlB7TU5bdmQ32uLjeSBCX77VxBWs/view?usp=sharing",
      alt_name: "React",
      color_code: "#000",
    },
    {
      title: "Oracle Database: Introduction to SQL",
      subtitle: "- Oracle University",
      logo_path: "oracle.png",
      certificate_link:
        "https://drive.google.com/file/d/1i_Di96mYTdiK5tGYuXaELEUFZiwLF2mD/view?usp=sharing",
      alt_name: "Oracle",
      color_code: "#DE3163",
    },
    {
      title: "Flutter International Hackathon Android & IOS",
      subtitle: "- Hack20",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1fMR8x-WSa0KmLn7FHwECuKmVpPAtViix/view?usp=sharing",
      alt_name: "Mobile Development",
      color_code: "#000",
    },
    {
      title: "Certification in Python 3",
      subtitle: "- VMM Education",
      logo_path: "vmm-education_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1SbyhNX_sLrpCvD9XSJTZeDp_4qBYbUYK/view?usp=sharing",
      alt_name: "Python 3",
      color_code: "#FFF",
    },
    {
      title: "M0001: MongoDB Basics",
      subtitle: "- MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/1fbNyLXgMFwPk0c9RFsHcr1u-o9kGWhHL/view?usp=sharing",
      alt_name: "Mongo",
      color_code: "#DE3163",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups and with some well-established companies. I am also involved with many opensource communities to learn new Technologies and to share my knowledge.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "My Experiences",
      experiences: [
        {
          title: "Next Level Group",
          company:
            "Next Level Group a Structural Engineering Company in United Arab Emirates",
          company_url: "https://nextlevelgroup.ae",
          logo_path: "nlg_logo.jpg",
          duration: "July 2019 - Present",
          location: "Dubai,UAE",
          description:
            "NLG is one of the top Structural engineering companies in the Middle East.NLG structural engineers are experts in the design of all types of structures, from an individual small unit to multi-unit developments, While working with NLG I am part of development of different industrial-level professional software, I am contributing to the field of Frond-end, Back-end, database and cloud platforms, using mainly Python, PHP, React respectively.",
          color: "#0071C5",
        },
        {
          title: "Ittehad Industries",
          company:
            "Ittehad Industries is the country largest aluminium’ producer and real estate company",
          company_url: "https://www.ittehadaluminium.com.pk/index.html",
          logo_path: "ittehad.jpeg",
          duration: "2017 - 2019",
          location: "Islamabad,Pakistan",
          description:
            " Ittehad Industries is the country's largest premium aluminum producer and Real estate development Company, Ittehad industries successfully participated in the country's major projects working with Government, Semi-Government, and Private Sectors. My Responsibility was to develop ERP Software for all Departments, including accounts, HR, Sales, Payroll, Production, Inventory, and all other related Departments, using Modren Available Tools and Languages.",
          color: "#0071C5",
        },
        {
          title: "Freelancing",
          company:
            "Freelance web development, software development, cloud platforms",
          company_url: "https://www.github.com/adilibrar",
          logo_path: "freelance.jpg",
          duration: "- 2017",
          location: "Remote Work",
          description:
            "Developed Many Websites and software, and deployed them on cloud platforms, for different clients including Pusan Trading, Adams Fire Tech, Softgrip Technologies, Itthead Kitchens, Dassa Entertainment, BMM Solar, Acibadem HealthCare, Istanbul American Schools, Serena Hotel.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships / Volunteers",
      experiences: [
        {
          title: "Türkiye İş Bankası",
          company: "Türkiye İş Bankası, a commercial bank in Turkey",
          company_url: "https://www.isbank.com.tr",
          logo_path: "isbank-og-image.jpg",
          duration: "January 2017 - June 2017",
          location: "Istanbul,Turkey",
          description:
            "İşbank, officially Türkiye İş Bankası, is a commercial bank in Turkey. It was the largest private bank in the country by the size of total assets, total loans, total deposits and equity, as well as by the number of branches and employees as of 31 December 2021. During my internship, I was part of 3 different projects in which I contributed in the field of UI-UX Design, Data Analytics, and Frond-end and Back-end respectively.",
          color: "#0071C5",
        },
        {
          title: "Campus Hustler",
          company: "Skillenza",
          company_url: "https://skillenza.com",
          logo_path: "hustler.jpg",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
            "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
          color: "#0071C5",
        },

        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github-port.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technology. My best experience is to create python, Django, PHP, Laravel, Codeigniter, JavaScript, Data Science, Machine Learning, React based projects and deploy them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "adil_ibrar_nb.png",
    description:
      "I am available on different social media platforms, You can contact me or send me an email at the platforms mentioned below, and I will get back to you as fast as I can.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://developers.googleblog.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dubai",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/arpJspg825g8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+971 563368590",
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
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
