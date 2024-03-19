import { Button} from "antd"
import {
  HomeOutlined, 
  FileDoneOutlined,
  BookOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
  InstagramOutlined 
} from "@ant-design/icons"

const Layout = ({children})=> {

    const menus = [
      {
        name: "Home",
        icon: <HomeOutlined style={{fontSize: '25px', color: '#FF517E'}} />
      },
      {
        name: "Resume",
        icon: <FileDoneOutlined style={{fontSize: '25px', color: '#00C8DA'}} />
      },
      {
        name: "Portfolio",
        icon: <BookOutlined  style={{fontSize: '25px', color: '#FCBA58'}}/>
      },
      {
        name: "Contact",
        icon: <PhoneOutlined style={{fontSize: '25px', color: '#FF754A'}}/>
      }
    ]

    const socialMenus = [
      {
        link: '#',
        icon: <GithubOutlined  className="text-blue-800" style={{fontSize: '25px'}} />
      },
      {
        link: '#',
        icon: <p className="text-blue-600" style={{fontSize: '25px'}} >in</p>
      },
      {
        link: '#',
        icon: <WhatsAppOutlined className="text-green-500" style={{fontSize: '25px'}}/>
      },
      {
        link: '#',
        icon: <TwitterOutlined className="text-sky-500" style={{fontSize: '25px'}} />
      },
      {
        link: '#',
        icon: <InstagramOutlined className="text-pink-600" style={{fontSize: '25px'}} />
      }
    ]

    return (
        <div className="w-100 flex">
          <div className="md:w-[8%] hidden bg-white md:flex flex-col py-5 gap-8 h-screen overflow-y-scroll md:fixed left-menu-bar" style={{scrollbarWidth: '5px', scrollbarColor: 'blue'}}>
            <div className="flex items-center justify-center">
              <img src="/images/profile.png" alt="saurabh-profile-pic" />
            </div>
            <div className="w-100">
            {
                menus.map((item, index) => (
                  <div key={index}>
                    <Button
                      icon={item.icon}
                      type="text"
                      size="large"
                      block={true}
                      className="rounded-none h-20 flex flex-col items-center justify-center text-2xl"
                      title={item.name}
                    >
                      
                    </Button>
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
                  <Button
                    key={index}
                    icon={item.icon}
                    size="large"
                    type="text"
                    block
                    className="flex flex-col justify-center items-center p-5 rounded-none"
                  />
                ))
              }
            </div>
          </div>
          <div className="md:ml-[8%] md:w-[92%] w-full bg-white">
            {children}
            <footer className="bg-[#FCC255] py-3 mt-5">
              <p className="text-center text-white font-semibold md:text-md text-sm">Copyright © 2024 saurabhk.online. All Rights Reserved</p>
            </footer>
          </div>
        </div>
    )
}

export default Layout