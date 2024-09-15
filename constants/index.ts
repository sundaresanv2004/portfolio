import {
    img0, img1, img2, tensorflow_logo, python_logo, django_logo, PyTorch, js_logo, rumi,
    mysql_logo, next_logo, firebase_logo, opencv_logo, html_logo, css3_logo, mongobd_logo,
    tailwind_logo, react_logo, expo_logo, scikit_logo, instagram, github, linkedin, mail, ts_logo,
} from "@/public/assets";

export const navLinks = [
    {
        id: "/#home",
        title: "Home",
    },
    {
        id: "/#about",
        title: "About",
    },
    {
        id: "/#work",
        title: "Work",
    },
    {
        id: "/#skill",
        title: "My Skills",
    },
    {
        id: "/#contact",
        title: "Contact",
    },
];

export const works = [
    {
        id: "feature-1",
        image: img0,
        title: "Medical Detection Hub",
        content: "This project offers a user-friendly web interface for detecting skin cancer and pneumonia through image uploads.",
        github: "https://github.com/sundaresanv2004/Medical_Detection_Hub",
        live: ""
    },
    {
        id: "feature-2",
        image: img1,
        title: "E-Voting",
        content: "Is is an election application designed for desktop and laptop computers. Built on the flet library in the Python.",
        github: "https://github.com/sundaresanv2004/E-Voting",
        live: ""
    },
    {
        id: "feature-3",
        image: img2,
        title: "Automatic Number Plate Recognition",
        content: "This project is designed to automatically capture, interpret, and store vehicle license plate information. This project is designed to automatically capture, interpret, and store vehicle license plate information. This project is designed to automatically capture, interpret, and store vehicle license plate information.",
        github: "",
        live: ""
    },
    {
        id: "feature-4",
        image: rumi,
        title: "Rumi",
        content: "Rumi is an intuitive student dashboard designed to enhance the learning experience by integrating a smart monitoring system. The platform helps students stay on track by providing personalized insights, tracking progress, and offering recommendations to improve their study habits. With a focus on simplicity and efficiency, Rumi empowers students to take control of their academic journey, making studying more structured and goal-oriented.",
        github: "https://github.com/sundaresanv2004/rumi",
        live: ""
    },
];

export const skills = [
    {
        id: 1,
        title: "React",
        img: react_logo,
        category: "frontend",
        description: "Extensive experience building complex web applications with React and its ecosystem."
    },
    {
        id: 2,
        title: "Python",
        img: python_logo,
        category: "backend",
        description: "Proficient in Python for various applications, including web development and data analysis."
    },
    {
        id: 3,
        title: "TensorFlow",
        img: tensorflow_logo,
        category: "machine learning",
        description: "Experienced in using TensorFlow for building and training machine learning models."
    },
    {
        id: 4,
        title: "PyTorch",
        img: PyTorch,
        category: "machine learning",
        description: "Skilled in using PyTorch for developing deep learning models and research."
    },
    {
        id: 5,
        title: "Scikit-Learn",
        img: scikit_logo,
        category: "machine learning",
        description: "Proficient in using Scikit-Learn for implementing machine learning algorithms, including classification, regression, and clustering. Experienced with model evaluation and feature selection."
    },
    {
        id: 6,
        title: "OpenCV",
        img: opencv_logo,
        category: "machine learning",
        description: "Experience in computer vision tasks and image processing using OpenCV."
    },
    {
        id: 7,
        title: "Django",
        img: django_logo,
        category: "backend",
        description: "Proficient in using Django for rapid web application development."
    },
    {
        id: 8,
        title: "HTML5",
        img: html_logo,
        category: "frontend",
        description: "Strong understanding of HTML5 for structuring web content."
    },
    {
        id: 9,
        title: "CSS3",
        img: css3_logo,
        category: "frontend",
        description: "Expertise in CSS3 for styling and layout design of web applications."
    },
    {
        id: 10,
        title: "JavaScript",
        img: js_logo,
        category: "frontend",
        description: "Advanced skills in JavaScript for creating dynamic and interactive web experiences."
    },
    {
        id: 11,
        title: "TypeScript",
        img: ts_logo,
        category: "frontend",
        description: "Experienced in using TypeScript to build robust and maintainable front-end applications. Skilled in leveraging static typing for better code quality, enhanced development tools, and reduced runtime errors."
    },
    {
        id: 12,
        title: "Tailwind CSS",
        img: tailwind_logo,
        category: "frontend",
        description: "Experience with Tailwind CSS for utility-first styling and responsive design."
    },
    {
        id: 13,
        title: "MySQL",
        img: mysql_logo,
        category: "database",
        description: "Proficient in MySQL for relational database management and querying."
    },
    {
        id: 14,
        title: "Firebase",
        img: firebase_logo,
        category: "database",
        description: "Experience with Firebase for real-time databases and authentication."
    },
    {
        id: 15,
        title: "Next.js",
        img: next_logo,
        category: "frontend",
        description: "Skilled in using Next.js for server-side rendering and static site generation."
    },
    {
        id: 16,
        title: "Expo Go",
        img: expo_logo,
        category: "mobile",
        description: "Experience with Expo Go for building and deploying React Native apps."
    },
    {
        id: 17,
        title: "Mongo DB",
        img: mongobd_logo,
        category: "database",
        description: "Experience with MongoDB for creating scalable, NoSQL databases. Utilized it for managing large datasets and integrating it with Node.js applications."
    },
];

export const footerLinks = [
    {
        title: "Information",
        links: [
            {
                link: "/#home",
                name: "Home",
            },
            {
                link: "/#about",
                name: "About",
            },
            {
                link: "/#work",
                name: "Work",
            },
            {
                link: "/#skill",
                name: "My Skills",
            },
            {
                link: "/#contact",
                name: "Contact",
            },
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        id_name: "@sundar16._",
        profile: "https://media.licdn.com/dms/image/D5603AQEQt0ghhJf19w/profile-displayphoto-shrink_400_400/0/1692105312961?e=1725494400&v=beta&t=rrLkOqaPmW1g31lAupIcQDEIz_5hLaX29d9HVGevwQA",
        link: "https://www.instagram.com/sundar16._",
        des: "Instagram"
    },
    {
        id: "social-media-2",
        icon: github,
        id_name: "@sundaresanv2004",
        profile: "https://avatars.githubusercontent.com/u/117519940?s=96&v=4",
        link: "https://github.com/sundaresanv2004",
        des: "GitHub"
    },
    {
        id: "social-media-3",
        icon: linkedin,
        id_name: "@sundaresanv2004",
        profile: "https://media.licdn.com/dms/image/D5603AQEQt0ghhJf19w/profile-displayphoto-shrink_400_400/0/1692105312961?e=1725494400&v=beta&t=rrLkOqaPmW1g31lAupIcQDEIz_5hLaX29d9HVGevwQA",
        link: "https://www.linkedin.com/in/sundaresanv2004",
        des: "LinkedIn"
    },
    {
        id: "social-media-4",
        icon: mail,
        id_name: "sundaresanv2004@gmail.com",
        profile: "https://avatars.githubusercontent.com/u/117519940?s=96&v=4",
        link: "mailto:sundaresanv2004@gmail.com",
        des: "Mail"
    },
];

interface ExperienceItem {
    company: string;
    position: string;
    duration: string;
    description: string;
    skills: string[];
}

export const experiences: ExperienceItem[] = [
    {
        company: "Vels Vidyashram",
        position: "Voting Application",
        duration: "2022 - 2024",
        description: "Developed a secure and scalable voting application using Python and Firebase. The application allowed users to cast and track votes with real-time updates. Implemented authentication and user management features using Firebase Auth and integrated Flet for building user interfaces.",
        skills: ["Python", "Firebase", "Flet"]
    },
    {
        company: "Intern Ways",
        position: "Frontend Developer",
        duration: "2023 - 2023",
        description: "Contributed to the development of several responsive web applications using React and Next.js. Focused on improving the performance and scalability of the front end by implementing TypeScript and state management techniques. Styled the UI components using Tailwind CSS for an optimized user experience.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
];

