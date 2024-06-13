import { Button, Form, Input } from "antd"
const {TextArea} = Input
import MyBtn from "../shared/my-btn"
import { IoLocationSharp, IoMail } from "react-icons/io5";
import {
    PhoneFilled, 
    MailOutlined, 
    UserOutlined, 
    ReadOutlined,
    WhatsAppOutlined,
    TwitterOutlined,
    InstagramOutlined,
    GithubOutlined,
} from "@ant-design/icons"


const ContactUs = ()=> {
    const socialMenus = [
        {
          link: 'https://github.com/saurabhHD',
          icon: <GithubOutlined  className="text-blue-800" style={{fontSize: '25px'}} />
        },
        {
          link: 'https://www.linkedin.com/in/saurabhhd/',
          icon: <p className="text-blue-600" style={{fontSize: '25px'}} >in</p>
        },
        {
          link: 'https://wa.me/+917300865788',
          icon: <WhatsAppOutlined className="text-green-500" style={{fontSize: '25px'}}/>
        },
        {
          link: 'https://twitter.com/saurabhhd',
          icon: <TwitterOutlined className="text-sky-500" style={{fontSize: '25px'}} />
        },
        {
          link: 'https://www.instagram.com/saurabhhd1/',
          icon: <InstagramOutlined className="text-pink-600" style={{fontSize: '25px'}} />
        },
        {
          link: 'mailto:saurabhasdeveloper@gmail.com',
          icon: <MailOutlined className="text-blue-600" style={{fontSize: '25px'}} />
        }
      ];

    return (
        <div className="pb-3 md:bg-[url('/images/map-blue_11zon.jpg')] bg-cover h-screen">
            <div className="text-center bg-white py-3">
                <span className="text-xl font-bold p-2 hover:bg-[#FCC255] hover:text-white">Contact Me</span>
                <h1 className="text-3xl font-bold mt-3 text-[#556D91]">Get In Touch</h1>
            </div>
            <div className="md:flex justify-center  items-center md:px-10 px-3 mt-6 py-5 "> 
               <div className="backdrop-blur bg-white/50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-5 mb-5">
                            <p className="text-xl text-[#556D91] font-semibold">Let's get in touch</p>
                            <p className="text-justify text-gray-800">Let's connect and explore how we can<br /> leverage technology to achieve your goals.<br /> Feel free to reach out to me using <br />the contact form below or connect <br />with me on social media. I look forward to hearing <br />  from you and starting this journey together!</p>
                            <div className="flex flex-col gap-3">
                                <p className="flex gap-2 items-center">
                                    <IoLocationSharp className="text-3xl"/>Electronics City Phase 1,<br/> Bengaluru, Karnataka 560100
                                </p>
                                <p className="flex gap-3 items-center">
                                    <IoMail className="text-2xl"/> saurabhasdeveloper@gmail.com
                                </p>
                                <p className="flex gap-3 items-center">
                                    <PhoneFilled className="text-2xl"/> +91 7300865788
                                </p>
                            </div>
                            <div>
                                <p>Connect with me on</p>
                                <div className='flex items-center mt-2'>
                                        <div className='grid grid-cols-6 gap-3'>
                                        {
                                            socialMenus.map((item, index) => (
                                            <a href={item.link} target="_blank" key={index} className='bg-white px-2 rounded'>
                                            <Button
                                                icon={item.icon}
                                                size="large"
                                                type="link"
                                                block
                                                className="flex flex-col justify-center items-center p-5 rounded-none transition-transform hover:scale-150"  
                                            />
                                            </a>
                                            ))
                                        }
                                        </div>
                                    </div>
                            </div>
                        </div>
                        
                        <div>
                            <p className="text-xl text-[#556D91] font-semibold ">Contact Form</p>
                            <Form
                            layout="vertical"
                            >
                                <div className="grid md:grid-cols-2 md:gap-5 mt-6">
                                    <div>
                                        <Form.Item
                                        label="First Name"
                                        name="firstname"
                                        >
                                            <Input prefix={<UserOutlined className="text-gray-400"/>} />
                                        </Form.Item>
                                    </div>
                                    <div>
                                        <Form.Item
                                        label="Last Name"
                                        name="lastname"
                                        >
                                            <Input prefix={<UserOutlined className="text-gray-400"/>} />
                                        </Form.Item>
                                    </div>
                                    
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-5">
                                    <div>
                                        <Form.Item
                                        label="Email"
                                        name="email"
                                        >
                                            <Input prefix={<MailOutlined className="text-gray-400"/>} />
                                        </Form.Item>
                                    </div>
                                    <div>
                                        <Form.Item
                                        label="Subject"
                                        name="subject"
                                        >
                                            <Input prefix={<ReadOutlined className="text-gray-400"/>}/>
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
               </div>
            </div>
            
        </div>
    )
}

export default ContactUs