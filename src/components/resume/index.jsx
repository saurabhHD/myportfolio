import { Steps } from "antd"

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
                        title : 'B.tech',
                        description: 'I have complete my b.tech from Aktu'
                    }
                ]}
                />

                
            </div>
        </div>
    )
}

export default Resume