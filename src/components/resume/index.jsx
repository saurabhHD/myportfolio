import { Steps } from "antd"
import {UserOutlined} from "@ant-design/icons"

const Resume = ()=> {
    return (
        <div className="py-3">
            <div className="text-center">
                <span className="text-xl font-bold">Resume</span>
                <h1 className="text-3xl font-bold mt-3 text-[#556D91]">My Education</h1>
            </div>
            <div className="flex justify-center">
                <Steps
                direction="vertical"
                items={[
                    {
                        icon: <UserOutlined />,
                        title : 'B.tech',
                        description: 'I have complete my b.tech from Aktu'
                    },
                    {
                        title: 'Diploma',
                        description: 'I have comple my diplom from Gov Polytechnic Bijnor'
                    }
                    ,
                    {
                        title: 'Diploma',
                        description: 'I have comple my diplom from Gov Polytechnic Bijnor'
                    }
                    ,
                    {
                        title: 'Diploma',
                        description: 'I have comple my diplom from Gov Polytechnic Bijnor'
                    }
                    ,
                    {
                        title: 'Diploma',
                        description: 'I have comple my diplom from Gov Polytechnic Bijnor'
                    }
                    ,
                    {
                        title: 'Diploma',
                        description: 'I have comple my diplom from Gov Polytechnic Bijnor'
                    }
                ]}
                />
            </div>
        </div>
    )
}

export default Resume