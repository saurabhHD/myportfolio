import { Steps, Tag, Divider } from "antd"
import {BookOutlined} from "@ant-design/icons"
import { PiStudentBold } from "react-icons/pi";
import { BiSolidFileHtml, BiSolidFileCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { 
    SiJquery, 
    SiTailwindcss, 
    SiAntdesign, 
    SiExpress, 
    SiMongodb, 
    SiMysql,
    SiZoho,
    SiNginx,
    SiApache,
    SiCloudinary,
    SiFirebase,
    SiVisualstudio,
    SiPostman,
    SiFilezilla
} from "react-icons/si";
import { 
    FaBootstrap, 
    FaReact, 
    FaNodeJs, 
    FaPhp, 
    FaLaravel,
    FaJira,
    FaDocker,
    FaAws,
    FaCloud,
    FaGithub,
    FaGitAlt,
    FaUbuntu,
    FaTerminal
} from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import SkillSection from "./skill-section";

import "./index.css"

const Resume = ()=> {
    const skills = [
        {
          title: "Front-End",
          skills: [
            { name: "Html", icon: <BiSolidFileHtml />, color: "text-orange-500" },
            { name: "Css", icon: <BiSolidFileCss />, color: "text-blue-500" },
            { name: "JavaScript", icon: <IoLogoJavascript />, color: "text-yellow-300" },
            { name: "Jquery", icon: <SiJquery />, color: "text-blue-500" },
            { name: "Bootstrap", icon: <FaBootstrap />, color: "text-blue-900" },
            { name: "Tailwind Css", icon: <SiTailwindcss />, color: "text-sky-300" },
            { name: "React Js", icon: <FaReact />, color: "text-sky-300" },
            { name: "Ant Design", icon: <SiAntdesign />, color: "text-blue-500" }
          ]
        },
        {
          title: "Back-End",
          skills: [
            { name: "Node Js", icon: <FaNodeJs />, color: "text-green-700" },
            { name: "Express Js", icon: <SiExpress />, color: "text-green-600" },
            { name: "Mongoose", icon: <IoLogoJavascript />, color: "text-orange-500" },
            { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
            { name: "PHP", icon: <FaPhp />, color: "text-blue-900" },
            { name: "Laravel", icon: <FaLaravel />, color: "text-red-500" },
            { name: "SQL", icon: <BsFiletypeSql />, color: "text-blue-600" },
            { name: "MySQL", icon: <SiMysql />, color: "text-blue-900" }
          ]
        },
        {
            title: "DevOps",
            skills: [
              { name: "AWS", icon: <FaAws />, color: "text-orange-500" },
              { name: "Docker", icon: <FaDocker />, color: "text-blue-700" },
              { name: "Jira", icon: <FaJira />, color: "text-blue-400" },
              { name: "Zoho", icon: <SiZoho />, color: "text-red-400" },
              { name: "Fire Base", icon: <SiFirebase />, color: "text-yellow-400" },
              { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-500" },
              { name: "Apache", icon: <SiApache />, color: "text-red-600" },
              { name: "Nginx", icon: <SiNginx />, color: "text-green-500" }
            ]
        },
        {
            title: "Other Tools",
            skills: [
              { name: "Git", icon: <FaGitAlt />, color: "text-orange-700" },
              { name: "Github", icon: <FaGithub />, color: "text-black" },
              { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
              { name: "Cloud Flayer", icon: <FaCloud />, color: "text-yellow-400" },
              { name: "VS Code", icon: <SiVisualstudio />, color: "text-blue-900" },
              { name: "Ubuntu", icon: <FaUbuntu />, color: "text-orange-500" },
              { name: "Filezilla", icon: <SiFilezilla />, color: "text-red-800" },
              { name: "Putty", icon: <FaTerminal />, color: "text-blue-900" }
            ]
        }
      ];
    
    const stepsHandler = (steps) => {
        const result = []

        for(const step of steps){
            result.push({
                icon: step.icon,
                title: <div className="flex">
                    <Tag color="cyan-inverse" className="mb-4 rounded-xl">{step.date}</Tag>
                    <Tag color="orange-inverse" className="mb-4 rounded-xl">{step.orgnization}</Tag>
                    </div>,
                description: <div className="flex flex-col items-start gap-2">
                        <h1 className="md:text-xl text-[#556D91] font-semibold">{step.title}</h1>
                        <p className="text-gray-500">{step.description}</p>
                    </div>
            })
        }

        return result
    }

    return (
        <div className="py-3 px-5">
            <div className="text-center">
                <span className="text-xl font-bold p-2 hover:bg-[#FCC255] hover:text-white">Resume</span>
                <h1 className="text-3xl font-bold mt-3 text-[#556D91]">My Exprience</h1>
            </div>
            <div className="mb-8 px-5">
                <h1 className="text-2xl font-bold mt-5 text-[#556D91] flex ml-0">Technical Skills</h1>
                <div className="grid md:grid-cols-2 gap-5">
                    {skills.map((skill, index) => (
                        <SkillSection key={index} title={skill.title} skills={skill.skills} />
                    ))}
                </div>
            </div>
            <Divider />
            <div>
                <h1 className="text-2xl font-bold my-3 text-[#556D91] flex ml-5">Exprience</h1>
                <div className="grid md:grid-cols-2 gap-3 px-4 mt-4">
                        <div className="flex justify-center items-center">
                            <Steps
                            direction="vertical"
                            items={stepsHandler([
                                {
                                    icon: <BookOutlined className="text-[#00C8DA]" />,
                                    date: "2023",
                                    title: "Photo Signature Resize",
                                    description: `https://photosignatureresize.com, born from my college project, has become a go-to tool for over 100,000 job seekers monthly. This user-friendly platform empowers you to easily resize and compress your photos and signatures specifically for online job applications.`,
                                    orgnization: "College Project"
                                },
                                {
                                    icon: <BookOutlined className="text-[#00C8DA]" />,
                                    date: "May 2021 - Sep 2021",
                                    title: "Balloon Pro",
                                    description: `The company, Balloon Pro, offers a variety of event planning services. They can decorate for 
                                    weddings, birthdays, and other occasions. Balloon Pro is known for their creativity and affordability. They 
                                    use balloons and other traditional decorations. Customers can contact Balloon Pro through their website or 
                                    phone number.`,
                                    orgnization: "Techsunset"
                                },
                                {
                                    icon: <BookOutlined className="text-[#00C8DA]" />,
                                    date: "Oct 2021 - Jan 2022",
                                    title: "FNP",
                                    description: `This is an article about a gift store called FNP. It discusses gifts for many occasions. FNP offers 
                                    a variety of gifts including flowers, cakes, chocolates, and plants. They also offer same day delivery. FNP can 
                                    deliver gifts internationally.`,
                                    orgnization: "Techsunset"
                                },
                                {
                                    icon: <BookOutlined className="text-[#00C8DA]" />,
                                    date: "Feb 2022 - Jun 2022",
                                    title: "Interflora",
                                    description: `Interflora is a company that delivers flowers all over India. They have a wide variety of 
                                    flowers, including exotic flowers. Their flowers are arranged by skilled florists and are guaranteed to last at 
                                    least 5 days. They also offer same-day delivery.`,
                                    orgnization: "Techsunset"
                                },
                                
                            ])}
                            />
                        </div>
                        <div>
                            <Steps
                                direction="vertical"
                                items={stepsHandler([
                                    {
                                        icon: <BookOutlined className="text-[#00C8DA]" />,
                                        date: "2020",
                                        title: "Bihar Online Portal",
                                        description: `I built and maintain Bihar Online Portal (https://biharonlineportal.com), a website that receives around 200,000 visitors monthly. The portal allows users to apply for various government services in Bihar online, including certificates, registrations, admissions for educational institutions, land registration, and health care. It also provides information on government job openings.`,
                                        orgnization: "Freelance Project"
                                    },
                                    {
                                        icon: <BookOutlined className="text-[#00C8DA]" />,
                                        date: "Aug 2022 - Dec 2022",
                                        title: "Hotelsimna",
                                        description: `This is a luxury hotel located in Muzaffarpur, which is known as the "Lichee Kingdom". The 
                                        hotel offers a variety of rooms, a restaurant, meeting rooms, and a private environment. 
                                        Technology Used : HTML, CSS, JavaScript, Bootstrap, Next.js, Node.js, MongoDB`,
                                        orgnization: "Techsunset"
                                    },
                                    {
                                        icon: <BookOutlined className="text-[#00C8DA]" />,
                                        date: "Feb 2023 - Jul 2023",
                                        title: "EventzGraph",
                                        description: `This is an article about a Mumbai event management company called EventzGraph. The 
                                        company offers a variety of services including wedding planning, corporate event management, and birthday 
                                        party planning. They also offer decoration services.`,
                                        orgnization: "Techsunset"
                                    },
                                    {
                                        icon: <BookOutlined className="text-[#00C8DA]" />,
                                        date: "Sep 2023 - Mar 2024",
                                        title: "Midaas Events",
                                        description: ` The Midaas Events specialize in planning birthday parties, weddings, and other social 
                                        gatherings. They offer a variety of services, including decoration, entertainment, and food. Customers can 
                                        choose from a variety of themes, such as princess, underwater, and carnival`,
                                        orgnization: "Techsunset"
                                    },
                                    
                                ])}
                                />
                        </div>
                </div>
                <Divider />
                <h1 className="text-2xl font-bold mt-7 mb-3 text-[#556D91] flex ml-5 ">Education</h1>
                <div className="grid md:grid-cols-2 gap-3 px-4 mt-4">
                        <div>
                            <Steps
                            
                            direction="vertical"
                            items={stepsHandler([
                                {
                                    icon: <PiStudentBold className="text-3xl text-[#00C8DA]"/>,
                                    date: "2020 - 2023",
                                    title: "B.tech (CSE)",
                                    orgnization: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
                                    description: "I am proud to have successfully completed my Bachelor of Technology degree from AKTU Lucknow in Computer Science and Engineering, achieving CGPA of 7.4 During my B.tech, I gained proficiency in  subjects such as Syber Security, System Design, Oprating System, Database Management, and Software Engineering."
                                },
                                {
                                    icon: <PiStudentBold className="text-3xl text-[#00C8DA]"/>,
                                    date: "2017 - 2020",
                                    title: "Diploma In Coumputer Science & Engineering",
                                    orgnization: "Government Polytechnic Bijnor, Uttar Pradesh",
                                    description: "I have completed my Diploma in Computer Science and Engineering from Government Polytechnic Bijnor in 2020 with a remarkable score of 74%. During my diploma, I gained proficiency in core subjects such as Basic Data Structures, Algorithms, Oprating System, Database Management, and Software Engineering."
                                }
                                
                            ])}
                            />
                        </div>
                        <div>
                            <Steps
                                
                                direction="vertical"
                                items={stepsHandler([
                                    
                                    {
                                        icon: <PiStudentBold className="text-3xl text-[#00C8DA]"/>,
                                        date: "Sep 2020 - Feb 2021",
                                        title: "MERN Stack Web Development Course (Online Mode)",
                                        orgnization: "Wap Institute (Online Mode)",
                                        description: "I have also completed a comprehensive MERN Stack Web Development Course from Wap Institute in Online Mode, where I learned MERN technologies including React.js, Next.js, Node.js, Express.js, MongoDB, AWS, Docker etc. Moreover, I gained practical experience by working on real projects during the course."
                                    },
                                    {
                                        icon: <PiStudentBold className="text-3xl text-[#00C8DA]"/>,
                                        date: "2019 - 2021",
                                        title: "Advance Diploma In Software Engineering (Online Mode)",
                                        orgnization: "Wap Institute (Online Mode)",
                                        description: "I have successfully completed my Advance Diploma in Software Engineering from Wap Institute in Online Mode, achieving a commendable Grade A. Additionally, I have honed my skills in programming languages such as Html, Css, JavaScript, Jquery, SQL, MySql and Php, along with i aslo worked on real projects."
                                    }
                                    
                                ])}
                                />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Resume