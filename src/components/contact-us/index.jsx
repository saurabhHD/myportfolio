import { Form, Input } from "antd"
const {TextArea} = Input
import MyBtn from "../shared/my-btn"
import {PhoneOutlined, MailOutlined} from "@ant-design/icons"

const ContactUs = ()=> {
    return (
        <div className="pb-3 mt-5 md:bg-[url('https://res.cloudinary.com/dhrzyzezw/image/upload/f_auto,q_auto/v1/portfolio/ao9jv6pcgcdzqmoqv7gk')] bg-cover h-screen">
            <div className="text-center bg-white mt-3 py-3">
                <span className="text-xl font-bold p-2 hover:bg-[#FCC255] hover:text-white">Contact Me</span>
                <h1 className="text-3xl font-bold mt-3 text-[#556D91]">Get In Touch</h1>
            </div>
            <div className="md:flex justify-center  items-center md:px-10 px-3 mt-6 py-5 "> 
                {/* <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56048.43037220901!2d77.17435457408114!3d28.598969862942468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1710760697993!5m2!1sen!2sin"  loading="lazy" className="w-[100%] h-[100%]">

                </iframe>
                </div> */}
               <div className="backdrop-blur bg-white/50 rounded-lg p-6">
                    <p className="text-xl text-center text-[#556D91] font-semibold">My Contact</p>
                    <Form
                    layout="vertical"
                    >
                        <div className="grid md:grid-cols-2 md:gap-5 mt-6">
                            <div>
                                <Form.Item
                                label="First Name"
                                name="firstname"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item
                                label="Last Name"
                                name="lastname"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-5">
                            <div>
                                <Form.Item
                                label="Email"
                                name="email"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item
                                label="Subject"
                                name="subject"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item
                        label="Message"
                        name="message"
                        >
                            <TextArea rows={4}/>
                        </Form.Item>
                        <MyBtn>
                            Submit Form
                        </MyBtn>
                    </Form>
               </div>
            </div>
            {/* <div className="grid md:grid-cols-2 md:gap-52 gap-5 mt-10">
                    <div className="flex flex-col items-center">
                        <PhoneOutlined  className="scale-x-[-1] text-5xl text-[#FF517E]"/>
                        <p className="text-[#556D91] text-2xl font-semibold mt-3">Contact Me</p>
                        <p className="text-gray-500 text-sm">+91 9999999999</p>
                    </div>
                    <div className="flex flex-col items-center">
                        
                        <MailOutlined  className="text-5xl text-[#FF517E]"/>
                        <p className="text-[#556D91] text-2xl font-semibold mt-3">Email Me</p>
                        <p className="text-gray-500 text-sm">saurabhasdeveloper@gmail.com</p>
                    </div>
            </div> */}
        </div>
    )
}

export default ContactUs