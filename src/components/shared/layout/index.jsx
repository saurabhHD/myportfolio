import { Button} from "antd"
import {
  HomeOutlined, 
  FileDoneOutlined,
  FileOutlined,
  PhoneOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
  InstagramOutlined 
} from "@ant-design/icons"

const Layout = ({children})=> {

    const menus = [
      {
        name: "Home",
        icon: <HomeOutlined />
      },
      {
        name: "Resume",
        icon: <FileDoneOutlined />
      },
      {
        name: "Portfolio",
        icon: <FileOutlined  />
      },
      {
        name: "Contact",
        icon: <PhoneOutlined />
      }
    ]

    const socialMenus = [
      {
        link: '#',
        icon: <FacebookOutlined />
      },
      {
        link: '#',
        icon: <LinkedinOutlined />
      },
      {
        link: '#',
        icon: <WhatsAppOutlined />
      },
      {
        link: '#',
        icon: <TwitterOutlined />
      },
      {
        link: '#',
        icon: <InstagramOutlined />
      }
    ]

    return (
        <div className="w-100 flex">
          <div className="w-[8%] bg-white border-r-4 border-[#ff517e] flex flex-col py-5 gap-8">
            <div className="flex items-center justify-center">
              <img src="public/images/profile.png" alt="saurabh-profile-pic" />
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
                      className="rounded-none h-20 flex flex-col items-center justify-center"
                    >
                      {item.name} 
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
            <div className="flex flex-col items-center">
              {
                socialMenus.map((item, index) => (
                  <Button
                    icon={item.icon}
                    size="large"
                    type="text"
                    className="text-[25px]"
                  />
                ))
              }
            </div>
          </div>
          <div className="w-[92%] bg-white">ss</div>
        </div>
    )
}

export default Layout