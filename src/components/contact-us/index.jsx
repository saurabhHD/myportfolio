import { Form, Input } from "antd"
const {TextArea} = Input
import MyBtn from "../shared/my-btn"
import {PhoneOutlined, MailOutlined} from "@ant-design/icons"

const ContactUs = ()=> {
    return (
        <div className="py-3 mt-5">
            <div className="text-center">
                <span className="text-xl font-bold p-2 hover:bg-[#FCC255] hover:text-white">Contact Me</span>
                <h1 className="text-3xl font-bold mt-3 text-[#556D91]">Get In Touch</h1>
            </div>
            <div className="flex justify-center items-center px-10 mt-6 "> 
               <div className="shadow-md rounded-lg p-6 w-[50%]">
                    <p className="text-xl text-center text-[#556D91] font-semibold">My Contact</p>
                    <Form
                    layout="vertical"
                    >
                        <div className="grid grid-cols-2 gap-5 mt-6">
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
                        <div className="grid grid-cols-2 gap-5">
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
            <div className="flex justify-center items-center gap-52 mt-10">
                    <div className="flex flex-col items-center">
                        <PhoneOutlined  className="scale-x-[-1] text-5xl text-[#FF517E]"/>
                        <p className="text-[#556D91] text-2xl font-semibold mt-3">Contact Me</p>
                        <p className="text-gray-500">+91 9999999999</p>
                    </div>
                    <div className="flex flex-col items-center">
                        
                        <MailOutlined  className="text-5xl text-[#FF517E]"/>
                        <p className="text-[#556D91] text-2xl font-semibold mt-3">Email Me</p>
                        <p className="text-gray-500">saurabhasdeveloper@gmail.com</p>
                    </div>
            </div>
        </div>
    )
}

export default ContactUs