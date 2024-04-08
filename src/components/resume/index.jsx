import { Steps } from "antd"
import {UserOutlined} from "@ant-design/icons"
import "./index.css"

const Resume = ()=> {

    const educationInfo = [
        {
            date: 2023,
            title: "B.Tech (Computer Science & Engineering)",
            desc: "Completed Bachelor of Technology in Computer Science & Engineering from AKTU University Lucknow.",
            color: '#1B5F8C'
        },
        {
            date: 2021,
            title: "Advance Diploma in Software Engineering (Online)",
            desc: "Completed an advanced diploma in Software Engineering (Online) program, spanning two years, from Wap Institute.",
            color: '#4CADAD'
        },
        {
            date: 2020,
            title: "Diploma In Computer Science & Engineering",
            desc: "Completed a three-year diploma program in Computer Science & Engineering from Government Polytechnic Bijnor.",
            color: '#E24A68'
        },
        {
            date: 2017,
            title: "Intermediate",
            desc: "Completed Intermediate education from UP Board.",
            color: '#FBCA3E'
        },
        {
            date: 2015,
            title: "High School",
            desc: "Completed Intermediate education from UP Board.",
            color: '#41516C'
        }
    ];
    

    return (
        <div className="py-3">
            <div className="text-center">
                <span className="text-xl font-bold p-2 hover:bg-[#FCC255] hover:text-white">Resume</span>
                <h1 className="text-3xl font-bold mt-3 text-[#556D91]">My Education</h1>
            </div>
            <div className="flex justify-center items-center mt-5">
                <ul>
                    {
                        educationInfo.map((item, index) => (
                            <li style={{ '--accent-color': item.color }} key={item.title}>
                                <div className="date">{item.date}</div>
                                <div className="title">{item.title}</div>
                                <div className="descr">{item.desc}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Resume