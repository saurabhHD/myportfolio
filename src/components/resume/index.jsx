import { Steps, Tag, Divider } from "antd"
import {BookOutlined} from "@ant-design/icons"
import { PiStudentBold } from "react-icons/pi";
import { BiSolidFileHtml, BiSolidFileCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery, SiTailwindcss, SiAntdesign } from "react-icons/si";
import { FaBootstrap, FaReact} from "react-icons/fa";


import "./index.css"

const Resume = ()=> {

    const stepsHandler = (steps) => {
        const result = []

        for(const step of steps){
            result.push({
                icon: step.icon,
                title: <Tag color="#00C8DA" className="mb-4 rounded-xl">{step.date}</Tag>,
                description: <div className="flex flex-col items-start gap-2">
                        <h1 className="text-xl text-[#556D91] font-semibold">{step.title}</h1>
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
            <div className="mb-8">
                <h1 className="text-2xl font-bold my-3 text-[#556D91] flex ml-5">My Technical Skills</h1>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="shadow p-5 rounded">
                        <p className="mb-3 text-[#556D91] text-xl font-semibold">Front End Technology</p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-2">
                                    <BiSolidFileHtml className="text-3xl text-orange-500"/>
                                    Html
                                </p>
                                <p className="flex items-center gap-2">
                                    <BiSolidFileCss  className="text-3xl text-blue-500"/>
                                    Css
                                </p>
                                <p className="flex items-center gap-2">
                                    <IoLogoJavascript className="text-3xl text-orange-500"/>
                                    JavaScript
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiJquery  className="text-3xl text-blue-500"/>
                                    Jquery
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-2">
                                    <FaBootstrap className="text-3xl text-orange-500"/>
                                    Bootstrap
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiTailwindcss  className="text-3xl text-blue-500"/>
                                    Tailwind Css
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaReact className="text-3xl text-orange-500"/>
                                    React Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiAntdesign  className="text-3xl text-blue-500"/>
                                    Ant Design
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow p-5 rounded">
                        <p className="mb-3 text-[#556D91] text-xl font-semibold">Back End Technology</p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-2">
                                    <BiSolidFileHtml className="text-3xl text-orange-500"/>
                                    Node Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <BiSolidFileCss  className="text-3xl text-blue-500"/>
                                    Express Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <IoLogoJavascript className="text-3xl text-orange-500"/>
                                    Mongoose
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiJquery  className="text-3xl text-blue-500"/>
                                    Laravel
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-2">
                                    <FaBootstrap className="text-3xl text-orange-500"/>
                                    Bootstrap
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiTailwindcss  className="text-3xl text-blue-500"/>
                                    Tailwind Css
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaReact className="text-3xl text-orange-500"/>
                                    React Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiAntdesign  className="text-3xl text-blue-500"/>
                                    Ant Design
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow p-5 rounded">
                        <p className="mb-3 text-[#556D91] text-xl font-semibold">DevOps & Cloud</p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-2">
                                    <BiSolidFileHtml className="text-3xl text-orange-500"/>
                                    Node Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <BiSolidFileCss  className="text-3xl text-blue-500"/>
                                    Express Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <IoLogoJavascript className="text-3xl text-orange-500"/>
                                    Mongoose
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiJquery  className="text-3xl text-blue-500"/>
                                    Laravel
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-2">
                                    <FaBootstrap className="text-3xl text-orange-500"/>
                                    Bootstrap
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiTailwindcss  className="text-3xl text-blue-500"/>
                                    Tailwind Css
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaReact className="text-3xl text-orange-500"/>
                                    React Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiAntdesign  className="text-3xl text-blue-500"/>
                                    Ant Design
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow p-5 rounded">
                        <p className="mb-3 text-[#556D91] text-xl font-semibold">Other Tools</p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-2">
                                    <BiSolidFileHtml className="text-3xl text-orange-500"/>
                                    Node Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <BiSolidFileCss  className="text-3xl text-blue-500"/>
                                    Express Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <IoLogoJavascript className="text-3xl text-orange-500"/>
                                    Mongoose
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiJquery  className="text-3xl text-blue-500"/>
                                    Laravel
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-2">
                                    <FaBootstrap className="text-3xl text-orange-500"/>
                                    Bootstrap
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiTailwindcss  className="text-3xl text-blue-500"/>
                                    Tailwind Css
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaReact className="text-3xl text-orange-500"/>
                                    React Js
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiAntdesign  className="text-3xl text-blue-500"/>
                                    Ant Design
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold my-3 text-[#556D91] flex ml-5">My Exprience</h1>
                <div className="grid md:grid-cols-2 gap-3 px-4 mt-4">
                        <div className="flex justify-center items-center">
                            <Steps
                            direction="vertical"
                            items={stepsHandler([
                                {
                                    icon: <BookOutlined className="text-[#00C8DA]" />,
                                    date: "Apri 2021 - Sep 2021",
                                    title: "Something Project",
                                    description: "This is a description. This is a description.This is a description. This is a description."
                                },
                                {
                                    icon: <BookOutlined className="text-[#00C8DA]" />,
                                    date: "Apri 2021 - Sep 2021",
                                    title: "Something Project",
                                    description: "This is a description. This is a description.This is a description. This is a description."
                                },
                                {
                                    icon: <BookOutlined className="text-[#00C8DA]" />,
                                    date: "Apri 2021 - Sep 2021",
                                    title: "Something Project",
                                    description: "This is a description. This is a description.This is a description. This is a description."
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
                                        date: "Apri 2021 - Sep 2021",
                                        title: "Something Project",
                                        description: "This is a description. This is a description.This is a description. This is a description."
                                    },
                                    {
                                        icon: <BookOutlined className="text-[#00C8DA]" />,
                                        date: "Apri 2021 - Sep 2021",
                                        title: "Something Project",
                                        description: "This is a description. This is a description.This is a description. This is a description."
                                    },
                                    {
                                        icon: <BookOutlined className="text-[#00C8DA]" />,
                                        date: "Apri 2021 - Sep 2021",
                                        title: "Something Project",
                                        description: "This is a description. This is a description.This is a description. This is a description."
                                    },
                                    
                                ])}
                                />
                        </div>
                </div>
                <Divider />
                <h1 className="text-2xl font-bold mt-7 mb-3 text-[#556D91] flex ml-5 ">My Education</h1>
                <div className="grid md:grid-cols-2 gap-3 px-4 mt-4">
                        <div>
                            <Steps
                            
                            direction="vertical"
                            items={stepsHandler([
                                {
                                    icon: <PiStudentBold className="text-3xl text-[#00C8DA]"/>,
                                    date: "Apri 2021 - Sep 2021",
                                    title: "B.tech",
                                    description: "This is a description. This is a description.This is a description. This is a description."
                                },
                                {
                                    icon: <PiStudentBold className="text-3xl text-[#00C8DA]"/>,
                                    date: "Apri 2021 - Sep 2021",
                                    title: "Advance Diploma In Software Engg",
                                    description: "This is a description. This is a description.This is a description. This is a description."
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
                                        date: "Apri 2021 - Sep 2021",
                                        title: "Diploma In Coumputer Science & Engg",
                                        description: "This is a description. This is a description.This is a description. This is a description."
                                    },
                                    {
                                        icon: <PiStudentBold className="text-3xl text-[#00C8DA]"/>,
                                        date: "Apri 2021 - Sep 2021",
                                        title: "Something Project",
                                        description: "This is a description. This is a description.This is a description. This is a description."
                                    },
                                    
                                ])}
                                />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Resume