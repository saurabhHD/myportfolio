import "./index.css"

const Portfolio = ()=> {
    const projects = [
        {
            title: "fnp.com",
            link: "https://www.fnp.com",
            image: "images/fnp_6615_psr.jpg"
        },
        {
            title: "interflora.in",
            link: "https://www.interflora.in",
            image: "images/interflora_5930_psr.jpg"
        },
        {
            title: "hotelsimna.com",
            link: "http://www.hotelsimna.com",
            image: "images/simna-international_11zon.png"
        },
        {
            title: "balloonpro.in",
            link: "https://balloonpro.in",
            image: "images/baloon_250_psr.jpg"
        },
        {
            title: "midaasevents.co.in",
            link: "https://midaasevents.co.in",
            image: "images/middasevent_2271_psr.jpg"
        },
        
        {
            title: "eventzgraph.com",
            link: "https://eventzgraph.com",
            image: "images/homeeventzGraph_3060_psr.jpg"
        }
    ]
   return (
        <div className="py-3">
            <div className="text-center">
                <span className="text-xl font-bold p-2 hover:bg-[#FCC255] hover:text-white">Quality Work</span>
                <h1 className="text-3xl font-bold mt-3 text-[#556D91]">My Projects</h1>
            </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 m-8">
                    {
                        projects.map((item, index) => (
                            <div className="shadow-sm rounded image-container" key={item.title} title={item.title}>
                                <a href={item.link} target="_blank">
                                <img src={item.image} alt={item.title} className="image"/>
                                </a>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Portfolio