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
        id: "skill-1",
        title: "Python",
        img: python_logo,
    },
    {
        id: "skill-2",
        title: "Tensorflow",
        img: tensorflow_logo,
    },
    {
        id: "skill-3",
        title: "PyTorch",
        img: PyTorch,
    },
    {
        id: "skill-4",
        title: "Open CV",
        img: opencv_logo,
    },
    {
        id: "skill-5",
        title: "Scikit-Learn",
        img: scikit_logo,
    },
    {
        id: "skill-6",
        title: "Django",
        img: django_logo,
    },
    {
        id: "skill-7",
        title: "HTML 5",
        img: html_logo,
    },
    {
        id: "skill-8",
        title: "CSS 3",
        img: css3_logo,
    },
    {
        id: "skill-9",
        title: "Javascript",
        img: js_logo,
    },
    {
        id: "skill-10",
        title: "Tailwind CSS",
        img: tailwind_logo,
    },
    {
        id: "skill-11",
        title: "MySQL",
        img: mysql_logo,
    },
    {
        id: "skill-12",
        title: "Firebase",
        img: firebase_logo,
    },
    {
        id: "skill-13",
        title: "Next JS",
        img: next_logo,
    },
    {
        id: "skill-14",
        title: "React JS",
        img: react_logo,
    },
    {
        id: "skill-15",
        title: "Expo Go",
        img: expo_logo,
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
    },
    {
        id: "social-media-2",
        icon: github,
        id_name: "@sundaresanv2004",
        profile: "https://avatars.githubusercontent.com/u/117519940?s=96&v=4",
        link: "https://github.com/sundaresanv2004",
    },
    {
        id: "social-media-3",
        icon: linkedin,
        id_name: "@sundaresanv2004",
        profile: "https://media.licdn.com/dms/image/D5603AQEQt0ghhJf19w/profile-displayphoto-shrink_400_400/0/1692105312961?e=1725494400&v=beta&t=rrLkOqaPmW1g31lAupIcQDEIz_5hLaX29d9HVGevwQA",
        link: "https://www.linkedin.com/in/sundaresanv2004",
    },
    {
        id: "social-media-4",
        icon: mail,
        id_name: "sundaresanv2004@gmail.com",
        profile: "https://avatars.githubusercontent.com/u/117519940?s=96&v=4",
        link: "mailto:sundaresanv2004@gmail.com",
    },
];
