import {
    img0, img1, img2, tensorflow_logo, python_logo, django_logo, PyTorch, js_logo,
    mysql_logo, next_logo, firebase_logo, opencv_logo, html_logo, css3_logo,
    tailwind_logo, react_logo, expo_logo, scikit_logo, instagram, github, linkedin, mail,
} from "@/public/assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const works = [
    {
        id: "feature-1",
        image: img0,
        title: "Medical Detection Hub",
        content: "This project offers a user-friendly web interface for detecting skin cancer and pneumonia through image uploads.",
        github: "",
        live: ""
    },
    {
        id: "feature-2",
        image: img1,
        title: "E-Voting",
        content: "Is is an election application designed for desktop and laptop computers. Built on the flet library in the Python",
        github: "",
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
        description: "Skilled in using PyTorch for developing deep learning models and research."
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
        title: "Java script",
        img: js_logo,
        category: "frontend",
        description: "Advanced skills in JavaScript for creating dynamic and interactive web experiences."
    },
    {
        id: 11,
        title: "Tailwind CSS",
        img: tailwind_logo,
        category: "frontend",
        description: "Experience with Tailwind CSS for utility-first styling and responsive design."
    },
    {
        id: 12,
        title: "MySQL",
        img: mysql_logo,
        category: "database",
        description: "Proficient in MySQL for relational database management and querying."
    },
    {
        id: 13,
        title: "Firebase",
        img: firebase_logo,
        category: "database",
        description: "Experience with Firebase for real-time databases and authentication."
    },
    {
        id: 14,
        title: "Next.js",
        img: next_logo,
        category: "frontend",
        description: "Skilled in using Next.js for server-side rendering and static site generation."
    },
    {
        id: 15,
        title: "Expo Go",
        img: expo_logo,
        category: "mobile",
        description: "Experience with Expo Go for building and deploying React Native apps."
    },
];



export const footerLinks = [
    {
        title: "Information",
        links: [
            {
                link: "home",
                name: "Home",
            },
            {
                link: "about",
                name: "About",
            },
            {
                link: "work",
                name: "Work",
            },
            {
                link: "contact",
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
