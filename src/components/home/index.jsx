
import MyBtn from "../shared/my-btn"
import { ReactTyped } from "react-typed";

const Home = ()=> {
    
    return (
         <div className="flex flex-col gap-10 justify-center h-screen bg-gray-50">
            <div className="px-[7%]">
                <p className="text-3xl font-semibold mb-5">
                    <span className="text-white bg-yellow-300 p-3">HELLO!</span> STRANGER!</p>
                <h1 className="text-8xl font-bold mb-4 text-[#00C8DA]">Mr. Saurabh Kumar</h1>
                <p className="text-3xl border-l-4 border-yellow-400 pl-2 mb-5 font-semibold"> 
                    <ReactTyped
                    strings={[
                        "Freelance Full Stack Developer",
                        "Freelance Back End Developer",
                        "Freelance Front End Developer",
                    ]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                   />
                </p>
                <div className="space-x-10 pt-4">
                    <MyBtn type="secondary">
                        Download CV
                    </MyBtn>
                    <MyBtn>
                        Send Message
                    </MyBtn>
                    
                </div>
            </div>
         </div>
    )
}

export default Home