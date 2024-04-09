import { Link } from "react-router-dom"
import { Button, Drawer} from "antd"
import {
  HomeOutlined, 
  FileDoneOutlined,
  BookOutlined,
  PhoneOutlined,
  GithubOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MenuOutlined,
  MailOutlined 
} from "@ant-design/icons"
import saurabh from '../../../assets/saurabh-2.png'
import React, { useState } from "react"


const Layout = ({children})=> {

    const menus = [
      {
        link: "/",
        name: "Home",
        icon: <HomeOutlined style={{fontSize: '25px', color: '#FF517E'}} />
      },
      {
        link: "/resume",
        name: "Resume",
        icon: <FileDoneOutlined style={{fontSize: '25px', color: '#00C8DA'}} />
      },
      {
        link: "/portfolio",
        name: "Portfolio",
        icon: <BookOutlined  style={{fontSize: '25px', color: '#FCBA58'}}/>
      },
      {
        link: "/contact-us",
        name: "Contact",
        icon: <PhoneOutlined style={{fontSize: '25px', color: '#FF754A'}}/>
      }
    ]

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

    const [open, setOpen] = useState(false)

    const onMobileMenuOpen = ()=> {
      setOpen(true)
    }
    const onMobileMenuClose = ()=>{
      setOpen(false)
    }
    const renderIcon = (icon) => {
      return React.cloneElement(icon, {
        style: null // Removing inline styles
      });
    };

    return (
        <div className="w-100 flex">
          <div className="md:w-[8%] hidden bg-white md:flex flex-col py-5 gap-8 h-screen overflow-y-scroll md:fixed left-menu-bar" style={{scrollbarWidth: '5px', scrollbarColor: 'blue'}}>
            <div className="flex items-center justify-center">
              <img src={saurabh} alt="saurabh-profile-pic" className="rounded-full w-24 h-24"/>
            </div>
            <div className="w-100">
            {
                menus.map((item, index) => (
                  <div key={index}>
                    <Link to={item.link}>
                    <Button
                      icon={item.icon}
                      type="text"
                      size="large"
                      block={true}
                      className="rounded-none h-20 flex flex-col items-center justify-center text-2xl"
                      title={item.name}
                    />

                    </Link>
                    <hr />
                  </div>
                ))
            }

                
            </div>
            <div className="flex justify-center items-center">
              <h1 
              className="font-semibold"
              style={{writingMode: "vertical-lr", rotate:'180deg' }}
              >Follow Me
              
              </h1>
            </div>
            <div className="flex flex-col items-center gap-2">
              {
                socialMenus.map((item, index) => (
                  <a href={item.link} target="_blank" key={index}>
                  <Button
                    icon={item.icon}
                    size="large"
                    type="link"
                    block
                    className="flex flex-col justify-center items-center p-5 rounded-none"
                  />
                  </a>
                ))
              }
            </div>
          </div>
          <div className="md:ml-[8%] md:w-[92%] w-full bg-white">
            <div className="text-right md:hidden fixed right-0">
              <Button
                icon={<MenuOutlined />}
                size="large"
                onClick={onMobileMenuOpen}
                className="m-3"
              />
            </div>
            {children}
            {/* <footer className="bg-[#FCC255] py-3 mt-5">
              <p className="text-center text-white font-semibold md:text-md text-sm">Copyright © 2024 saurabhk.online. All Rights Reserved</p>
            </footer> */}
          </div>
          <Drawer
          title={null}
          closable={false}
          placement="left"
          onClose={onMobileMenuClose}
          open={open}
          width="75%"
          footer={
            <div className="flex items-center justify-center gap-3">
               
              {
                
                socialMenus.map((item, index) => (
                  <a href={item.link} target="_blank" key={index}>
                  <Button
                    icon={item.icon}
                    size="large"
                    type="link"
                    block
                    className="flex flex-col justify-center items-center rounded-none"
                  />
                  </a>
                ))
              }
            </div>
          }
          >
            <div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img src={saurabh} alt="saurabh-profile-pic" className="rounded-full w-24 h-24"/>
                <span className="text-lg">Saurabh Kumar</span>
                
                
              </div>
              <div className="mt-5">
                {
                  menus.map((item, index) => (
                    <Link to={item.link} key={item.name} className="mb-3 ">
                    <Button
                      type="primary"
                      icon={renderIcon(item.icon)}
                      size="large"
                      block
                      className="shadow-none border-none text-sm text-left text-gray-400"
                      >
                        {item.name}
                    </Button>
                    </Link>
                  ))
                }

              </div>
              
            </div>
          </Drawer>
        </div>
    )
}

export default Layout