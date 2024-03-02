import { FC } from "react";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

export const BannerImages: string[] = [
  "/images/fr1.png",
  "/images/fr2.png",
  "/images/fr3.png",
  "/images/fr4.png",
  "/images/fr5.png",
  "/images/fr6.png",
  "/images/fr7.png",
  "/images/fr8.png",
  "/images/fr9.png",
  "/images/fr10.png",
  "/images/fr11.png",
  "/images/fr12.png",
  "/images/fr13.png",
  "/images/fr14.png",
  "/images/fr15.png",
];

interface MenuItem {
  icon: FC;
  text: string;
}

export const menuItems: MenuItem[] = [
  {
    icon: FaHome,
    text: "Home",
  },
  {
    icon: MdEvent,
    text: "Event",
  },
  {
    icon: AiOutlineBorderOuter,
    text: "About",
  },
];

export const mockMenu: string[] = ["Home", "Events", "About", "Admin", "Mock"];
export const randomNumber = Math.floor(Math.random() * 10);
const mockImages = [
  "https://i.pinimg.com/236x/36/9a/8e/369a8e797e85e822d258c50afdb064c4.jpg",
  "https://i.pinimg.com/236x/ac/e5/6e/ace56e7701786d1168b1a295e791c960.jpg",
  "https://i.pinimg.com/236x/71/58/bf/7158bf884334539dba66965572956c68.jpg",
  "https://i.pinimg.com/236x/bc/da/23/bcda23161ac67ae6678567af5fa1d916.jpg",
  "https://i.pinimg.com/236x/5f/1a/4f/5f1a4f3d4e4d3380b6df85eb2dd32086.jpg",
  "https://i.pinimg.com/236x/ff/29/77/ff29776ff4aad8c56db13fac9228b3c3.jpg",
  "https://i.pinimg.com/236x/6e/f9/86/6ef986db136398364806c9cd9536adf3.jpg",
];

export const randomImages =
  mockImages[Math.floor(Math.random() * mockImages.length)];

export const mockDataEvents = (id: string) => ({
  title: "Mock Title " + randomNumber.toString(),
  description: "Mock Desc " + randomNumber.toString(),
  imageUrl: randomImages,
  date: new Date().toISOString(),
  location: "Mock Location " + randomNumber.toString(),
  creatorId: id,
});

export const mockDataUser = {
  username: "Mock User " + randomNumber.toString(),
  password: "Mock Password " + randomNumber.toString(),
  email: "mock" + randomNumber.toString() + "@gmail.com",
  admin: true,
};

export const partnersImageLinks = [
  "/images/Reskilll.png",
  "/images/Give My Certificate.png",
  "/images/Hack2Skill.png",
  "/images/c3u.png",
  "/images/CN.png",
  "/images/CB.png",
  "/images/sparkar.png",
  "/images/uipath.png",
  "/images/azdevlogonew.png",
  "/images/mukand.png",
  "/images/github.png",
  "/images/snapchat.png",
  "/images/meta.png",
  "/images/microsoft.png",
  "/images/partner-google.png",
  "/images/partner-polka.png",
  "/images/digitalocean-partner.png",
];

export const pressClippingImageLinks = [
  "/images/pr1.png",
  "/images/pr2.png",
  "/images/pr4.png",
  "/images/pr5.png",
  "/images/pr6.png",
  "/images/pr7.png",
  "/images/pr8.png",
  "/images/pr9.png",
  "/images/pr10.png",
  "/images/pr11.png",
  "/images/pr12.png",
  "/images/pr13.png",
  "/images/pr14.png",
  "/images/pr15.png",
  "/images/pr16.png",
  "/images/pr17.png",
  "/images/pr18.png",
  "/images/pr19.png",
  "/images/pr20.png",
  "/images/pr21.png",
  "/images/pr22.png",
  "/images/pr23.png",
  "/images/pr24.png",
  "/images/pr25.png",
  "/images/pr26.png",
  "/images/pr27.png",
  "/images/pr28.png",
  "/images/pr29.png",
  "/images/pr30.png",
  "/images/pr31.png",
  "/images/pr32.png",
  "/images/pr33.png",
  "/images/pr34.png",
];

export const secondPressClippingImageLinks = [
  "/images/pr1.png",
  "/images/pr2.png",
  "/images/pr4.png",
  "/images/pr5.png",
  "/images/pr6.png",
  "/images/pr7.png",
  "/images/pr8.png",
  "/images/pr9.png",
  "/images/pr10.png",
  "/images/pr11.png",
  "/images/pr12.png",
  "/images/pr13.png",
  "/images/pr14.png",
  "/images/pr15.png",
  "/images/pr16.png",
  "/images/pr17.png",
  "/images/pr18.png",
  "/images/pr19.png",
  "/images/pr20.png",
  "/images/pr21.png",
  "/images/pr22.png",
  "/images/pr23.png",
  "/images/pr24.png",
  "/images/pr25.png",
  "/images/pr26.png",
  "/images/pr27.png",
  "/images/pr28.png",
  "/images/pr29.png",
  "/images/pr30.png",
  "/images/pr31.png",
  "/images/pr32.png",
  "/images/pr33.png",
  "/images/pr34.png",
];

export const testimonialMessage = [
  {
    name: "Shivam Sharma",
    company: "Co-Founder, 6DOF Solutions Pvt. Ltd",
    image: "/images/ShivamSharma.jpg",
    message:
      "The team's professionalism and attention to detail are evident in every event. I highly recommend this team to anyone looking to organize a successful workshop or event.",
  },
  {
    name: "Dr. Neha Tuli",
    company: "Co-Founder, 6DOF Solutions Pvt. Ltd",
    image: "/images/NehaTuli.jpg",
    message:
      "Feel the AR was a very well-planned and insightful event. It enlightened the students about emerging technologies. Overall, I loved being part of it.",
  },
  {
    name: "Ashwin Raj",
    company: "ASE Trainee - TCS",
    image: "/images/AshwinRaj.jpg",
    message:
      "They stand out from every other community I've worked with in the industry due to their unwavering dedication to excellence.",
  },
  {
    name: "Harshit Jindal",
    company: "Tech geek | Drone engineer",
    image: "/images/HarshitJindal.jpg",
    message:
      "The events conducted by SoarX are free of cost, which is a great thing, helping students and showing them new career paths.",
  },
  {
    name: "Rohit Sardana",
    company: "Co-Founder and CEO at Reskilll",
    image: "/images/RohitSardana.jpg",
    message:
      "They are super professionals and take their job very seriously. The reskilling of their students is in their heart and they do everything to make it happen.",
  },
  {
    name: "Kishan Kumar",
    company: "Operation and Support executive, Hack2Skill",
    image: "/images/KishanKumar.jpg",
    message:
      "They excelled in building a diverse and inclusive community, where individuals with different backgrounds and skill levels could come together.",
  },
  {
    name: "Dr. Shiraz Khurana",
    company: "Associate Professor, Sharda University",
    image: "/images/ShirajKhurana.jpg",
    message:
      "Their commitment to fostering innovation, promoting learning, and creating impactful events is remarkable.",
  },
  {
    name: "Kunal Kumar",
    company: "Video Editor | Motion Graphics Designer",
    image: "/images/KunalKumar.jpg",
    message:
      "Appreciate all the efforts and good work that SoarX has done for organizing such a revolutionizing initiative of The India Summer Lensathon.",
  },
  {
    name: "Naman Nagpal",
    company: "Software Developer @ Coforge",
    image: "/images/NamanNagpal.jpg",
    message:
      "The impact of being a part of the SoarX Network extends far beyond the college premises. The exposure one gain opens doors to numerous opportunities in the industry.",
  },
  {
    name: "Siddhant Khurana",
    company: "Data Security Analyst, Mphasis",
    image: "/images/SidhantKhurana.jpg",
    message:
      "SoarX Network helps people develop their skills which they usually can't develop during their academics. Learning with fun is what the SoarX offers.",
  },
  {
    name: "Soumili Mukherjee Tapadar",
    company: "Cloud DevOps Intern, Peacify",
    image: "/images/Soumili.jpg",
    message:
      "SoarX Network has helped me come a long way from being a mentee to a mentor. The environment and support provided by them feel like home, highly recommended.",
  },
  {
    name: "Gautam Makwana",
    company: "Security Researcher",
    image: "/images/Gautam.jpg",
    message:
      "Whether you are a beginner or an experienced professional, SoarX provides a platform to learn, grow, and connect with a vibrant community of tech enthusiasts.",
  },
  {
    name: "Mary Priyanka",
    company: "Chief of Community, C3 Universe",
    image: "/images/Mary.jpg",
    message:
      "Working with the SoarX Network at a job fair organized by C3 Community was fantastic! Their professionalism and enthusiasm made the collaboration enjoyable.",
  },
  {
    name: "Avni Srivastava",
    company: "Program Manager, Psylief",
    image: "/images/Avni.jpg",
    message:
      "Each workshop or event organized by the SoarX Network is a resounding success because of its meticulous planning and flawless execution.",
  },
  {
    name: "Jasnoor Singh",
    company: "XR Developer",
    image: "/images/jasnoor.jpg",
    message:
      "Being a part of the SoarX Network has been an inspiring journey, and I look forward to continuing our collaborative efforts in empowering aspiring XR developers.",
  },
  {
    name: "Punit Jain",
    company: "Co-Founder, Reskilll",
    image: "/images/punit.jpg",
    message:
      "Our collaboration on initiatives such as the Spark AR hackathon and Microsoft Azure events has been a resounding success, attracting a large number of enthusiastic participants.",
  },
  {
    name: "Shivani Deshpande",
    company: "XR Developer",
    image: "/images/shivani.jpg",
    message:
      "SoarX is an incredible initiative that I am pleased to be associated with. Their enthusiasm, supportive environment, and knowledgeable team have helped build the AR ecosystem in India.",
  },
  {
    name: "Itasha Modi",
    company: "Full Stack Developer || Gold MLSA",
    image: "/images/itasha.jpg",
    message:
      "The community's work in upskilling not only beginners but also empowering individuals in every aspect of their lives is commendable.",
  },
  {
    name: "Vishwas Narayan",
    company: "DevOps Engineer, Amnic",
    image: "/images/vishwas.jpg",
    message:
      "The level of engagement and expertise within this community is unparalleled, fostering an environment where ideas flourish and connections are made.",
  },
];

export const initialValueAddEvent = {
  title: "",
  description: "",
  imageUrl: "",
  date: "",
  location: "",
  creatorId: "",
};
