import MyBtn from '../shared/my-btn';
import {PlusOutlined} from '@ant-design/icons'
import saurabh from '../../assets/saurabh-2.png'

const About = ()=> {
    return (
        <div className="grid md:grid-cols-5 grid-cols-1 px-[5%] py-[5%]">
            <div className="col-span-2">
                <div className="p-10">
                    <div className="border-4 border-[#FF517E] p-5">
                        <div className="mt-[-50px] mr-[-50px] relative">
                            <img src={saurabh} alt="selfintro image" />
                            <PlusOutlined className='absolute bottom-0 p-4 font-extrabold bg-[#00C8DA] text-white cursor-pointer'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-3 px-5 pt-4">
                <span className='text-2xl font-semibold p-2 hover:bg-[#FCC255] hover:text-white'>About Me</span>
                <h2 className='text-4xl font-semibold text-[#00C8DA] my-4'>I'm In The Web Development Industry With 2 Years Of Experience.</h2>
                <p className='text-gray-500'>
                    There are many variations of passages of Lorem Ipsum , but the a have suffered are some form, by injected humour, or the words which don't look even slightl. If you use a passage of, you need to be sure there isn't anything look even slightly believable. If you are going to use a of , you need to be sure there isn't hidden in the middle the on the tend.
                </p>
                <br />
                <p className='text-gray-500'>
                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generate on the are Internet tend to repeat predefined chunks as necessary, making of this the first true generator on the Internet which don't look even you.
                </p>
                <div className='grid md:grid-cols-4 grid-cols-2'>
                    <div className='flex flex-col gap-1 mt-5'>
                        <span className='text-xl text-[#00C8DA]'>
                            Saurabh Kumar
                        </span>
                        <span className='text-gray-500'>
                            Full Stack Developer
                        </span>
                    </div>
                    <div className='md:col-span-3 mt-5'>
                        <img src="/images/signature.png" alt="signature" />
                    </div>
                </div>
                <div className='flex md:mt-5 mt-10 gap-8'>
                    <MyBtn type='secondary' >
                        Download CV
                    </MyBtn>
                    <MyBtn>
                        Hire Me
                    </MyBtn>
                </div>
            </div>
        </div>
    )
}


export default About;