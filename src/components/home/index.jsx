
import MyBtn from "../shared/my-btn"
import { ReactTyped } from "react-typed";

const Home = ()=> {
    
    return (
         <div className="flex flex-col gap-10 justify-center h-screen bg-gray-50">
            <div className="px-[7%]">
                <p className="md:text-3xl font-semibold mb-5">
                    <span className="text-white bg-yellow-300 p-3">HELLO!</span> STRANGER!</p>
                <h1 className="md:text-8xl text-3xl font-bold mb-4 text-[#00C8DA]">I'm Saurabh Kumar</h1>
                <p className="md:text-3xl text-xl border-l-4 border-yellow-400 pl-2 mb-5 font-semibold"> 
                    <ReactTyped
                    strings={[
                        "Full Stack Developer",
                        "Back End Developer",
                        "Front End Developer",
                    ]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                   />
                </p>
                <div className="space-x-10 pt-4">
                  <p className="text-gray-400">
                  I have honed my skills in building dynamic web applications utilizing MongoDB, Express.js, React, and Node.js. With expertise spanning across both front-end and back-end technologies, I excel in architecting and deploying scalable solutions that precisely cater to user needs. From conceptualization to implementation, I am committed to crafting intuitive and efficient software solutions.
                  </p>                    
                </div>
            </div>
         </div>
    )
}

export default Home