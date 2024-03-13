import Layout from "../shared/layout"
import { Button } from "antd"

const Home = ()=> {
    return (
       <Layout>
         {/* <img src="/images/selfintro.jpg" alt="self-into" className="scale-x-[-1] w-fit" /> */}
         <div className="flex flex-col gap-10 justify-center h-screen bg-gray-50">
            <div className="px-[7%]">
                <p className="text-3xl font-semibold mb-5">
                    <span className="text-white bg-yellow-300 p-3">HELLO!</span> STRANGER!</p>
                <h1 className="text-8xl font-bold mb-4 text-[#00C8DA]">Mr. Saurabh Kumar</h1>
                <p className="text-3xl border-l-4 border-yellow-400 pl-2 mb-5 font-semibold">Freelance Web & Mobile UI/UX Designer</p>
                <div className="space-x-10">
                    <Button
                    type="primary"
                    size="large"
                    shape="round"
                    className="bg-[#FCC255] hover:bg-[#FF517E]"
                    >
                        Download CV
                    </Button>
                    <Button
                    type="primary"
                    size="large"
                    shape="round"
                    className="bg-[#FF517E] hover:bg-[#FCC255]"
                    >
                       Send Message
                    </Button>
                </div>
            </div>
         </div>
       </Layout>
    )
}

export default Home