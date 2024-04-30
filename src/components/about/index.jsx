import MyBtn from '../shared/my-btn';
import {
    PlusOutlined, 
    GithubOutlined,
    WhatsAppOutlined,
    TwitterOutlined,
    InstagramOutlined,
    MailOutlined,
    CloseOutlined 
  } from "@ant-design/icons"
  import { Button, Tooltip} from "antd"
import saurabh from '../../assets/saurabh-kumar-transparent.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = ()=> {

    const navigate = useNavigate()

    const socialMenus = [
        {
          link: 'https://github.com/saurabhHD',
          icon: <GithubOutlined  className="text-blue-800" style={{fontSize: '25px'}} />
        },
        {
          link: '#',
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
      ]
    
    const [profile, setProfile]  = useState(false)

    const profileToggle = ()=> {
        setProfile(!profile)
    }

    return (
        <div className="grid md:grid-cols-5 grid-cols-1 px-[5%] py-[5%]">
            <div className="col-span-2">
                <div className="p-10">
                    <div className="border-4 border-[#FF517E] p-5">
                        <div className="mt-[-50px] mr-[-50px] relative">
                            <img src={saurabh} alt="selfintro image" className="bg-gray-200 hover:bg-pink-500"/>
                            {
                                profile && 
                                <>
                                <Tooltip title="Close about me !" color='#FF517E' placement='top' className='md:visible invisible' >
                                    <CloseOutlined className='md:visible invisible absolute bottom-0 md:p-4 p-1 font-extrabold bg-[#00C8DA] text-white cursor-pointer z-10' onClick={profileToggle} htmlType="button"/>
                                </Tooltip>
                                <Tooltip title="Close about me !" color='#FF517E' placement='top' className='md:invisible '>
                                <CloseOutlined className='md:invisible visible absolute top-0 right-0 p-3 font-extrabold bg-[#00C8DA] text-white cursor-pointer z-10' onClick={profileToggle} htmlType="button"/>
                                </Tooltip>
                                </>
                                ||
                                <Tooltip title="More about me !" color='#FF517E'>
                                    <PlusOutlined className='absolute bottom-0 p-4 font-extrabold bg-[#00C8DA] text-white cursor-pointer z-10' onClick={profileToggle} htmlType="button"/>
                                </Tooltip>
                            }   
                            {
                                profile && 
                                <div className='absolute top-0 left-0 w-full h-full md:p-4 p-2 bg-black opacity-70 text-white'>
                                    <p className='md:text-2xl text-sm'>Saurabh Kumar</p>
                                    <p className='text-gray-400 text-sm'>Full Stack Developer</p>
                                    <div className='grid grid-cols-2 md:grid-cols-3 md:mt-5 md:gap-2'>
                                        <p className='text-[#FCC255] font-bold'>Age</p>
                                        <p className='md:col-span-2'>24</p>
                                        <p className='text-[#FCC255] font-bold'>Email</p>
                                        <p className='md:col-span-2 break-all'>saurabhasdeveloper@gmail.com</p>
                                        <p className='text-[#FCC255] font-bold'>Phone</p>
                                        <p className='md:col-span-2'>+91 7300865788</p>
                                        <p className='text-[#FCC255] font-bold'>Residence</p>
                                        <p className='md:col-span-2'>India</p>
                                        <p className='text-[#FCC255] font-bold'>Qualification</p>
                                        <p className='md:col-span-2'>B.Tech (CSE)</p>
                                        <p className='text-[#FCC255] font-bold'>Exprience</p>
                                        <p className='md:col-span-2'>2 Year+</p>
                                    </div>
                                    <div className='flex justify-center items-center md:mt-8 mt-2'>
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
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-3 px-5 pt-4">
                <span className='text-2xl font-semibold p-2 hover:bg-[#FCC255] hover:text-white'>About Me</span>
                <h2 className='text-4xl font-semibold text-[#00C8DA] my-4'>I'm In The Web Development Industry With 3 Years Of Experience.</h2>
                <p className='text-gray-500'>
                From crafting robust backend solutions with Node.js to designing intuitive user interfaces with React.js, every project has honed my skills and expanded my horizons.
                </p>
                <br />
                <p className='text-gray-500'>
                In an ever-evolving tech landscape, I prioritize innovation and strive to deliver top-notch, scalable solutions. My passion for coding and dedication to learning are the pillars of my success.
                </p>
                <div className='grid md:grid-cols-4 grid-cols-1'>
                    <div className='flex flex-col gap-1 mt-5'>
                        <span className='text-xl text-[#00C8DA]'>
                            Saurabh Kumar
                        </span>
                        <span className='text-gray-500'>
                            Full Stack Developer
                        </span>
                    </div>
                    {/* <div className='md:col-span-3 mt-5'>
                        <img src="/images/signature.png" alt="signature" />
                    </div> */}
                </div>
                <div className='flex md:mt-5 mt-10 gap-8'>
                    <MyBtn type='secondary' >
                        Download CV
                    </MyBtn>
                    <MyBtn onBtnClick={(e)=> navigate("/contact-us")}>
                        Hire Me
                    </MyBtn>
                </div>
            </div>
        </div>
    )
}


export default About;