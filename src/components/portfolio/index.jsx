import { Tabs } from "antd"

const Portfolio = ()=> {

    const projectsCat = [
        {
            label: 'ALL',
            content : <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-[10%]">
            <img src="/images/cv-product01.jpg" alt="test" />
            <img src="/images/cv-product02.jpg" alt="test" />
            <img src="/images/cv-product03.jpg" alt="test" />
            <img src="/images/cv-product04.jpg" alt="test" />
            <img src="/images/cv-product05.jpg" alt="test" />
            <img src="/images/cv-product06.jpg" alt="test" />
            </div>
        },
        {
            label: 'DESIGN',
            content : <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-[10%]">
            <img src="/images/cv-product09.jpg" alt="test" />
            <img src="/images/cv-product08.jpg" alt="test" />
            <img src="/images/cv-product07.jpg" alt="test" />
            <img src="/images/cv-product01.jpg" alt="test" />
            <img src="/images/cv-product02.jpg" alt="test" />
            <img src="/images/cv-product03.jpg" alt="test" />
            </div>
        },
        {
            label: 'DEVELOPMENT',
            content : <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-[10%]">
            <img src="/images/cv-product06.jpg" alt="test" />
            <img src="/images/cv-product05.jpg" alt="test" />
            <img src="/images/cv-product04.jpg" alt="test" />
            <img src="/images/cv-product03.jpg" alt="test" />
            <img src="/images/cv-product02.jpg" alt="test" />
            <img src="/images/cv-product01.jpg" alt="test" />
            </div>
        },
        {
            label: 'PHOTOSHOP',
            content : <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-[10%]">
            <img src="/images/cv-product01.jpg" alt="test" />
            <img src="/images/cv-product04.jpg" alt="test" />
            <img src="/images/cv-product05.jpg" alt="test" />
            <img src="/images/cv-product06.jpg" alt="test" />
            </div>
        }
    ]

    return (
        <div className="py-3">
            <div className="text-center">
                <span className="text-xl font-bold p-2 hover:bg-[#FCC255] hover:text-white">Quality Work</span>
                <h1 className="text-3xl font-bold mt-3 text-[#556D91]">My Projects</h1>
            </div>
            <div className="flex justify-center">
                <Tabs
                centered
                onTabScroll={{direction: 'right'}}
                items={projectsCat.map(({label, content}, index) => {
                    return {
                        label : label,
                        key: index+1,
                        children: content 
                    }
                    
                }) 
                }
                animated
                tabBarStyle={{
                    border: 'none !important'
                }}
                className="mt-8"
                />
                
            </div>
        </div>
    )
}

export default Portfolio