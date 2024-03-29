import "./index.css"

const Portfolio = ()=> {
    const projects = [
        {
            title: "PhotoSignatureResize.com",
            link: "https://photosignatureresize.com",
            image: "https://res.cloudinary.com/dhrzyzezw/image/upload/f_auto,q_auto/v1/portfolio/drdcbpedjakeiuhvkx6u"
        },
        {
            title: "interflora.in",
            link: "https://www.interflora.in",
            image: "https://res.cloudinary.com/dhrzyzezw/image/upload/f_auto,q_auto/v1/portfolio/vjkc2blkbtsep5dhtnu0"
        },
        {
            title: "hotelsimna.com",
            link: "http://www.hotelsimna.com",
            image: "https://res.cloudinary.com/dhrzyzezw/image/upload/f_auto,q_auto/v1/portfolio/rnn13y9kate7uvnhbhcv"
        },
        {
            title: "balloonpro.in",
            link: "https://balloonpro.in",
            image: "https://res.cloudinary.com/dhrzyzezw/image/upload/f_auto,q_auto/v1/portfolio/rbe2tbvc9y4sfpagzkge"
        },
        {
            title: "midaasevents.co.in",
            link: "https://midaasevents.co.in",
            image: "https://res.cloudinary.com/dhrzyzezw/image/upload/f_auto,q_auto/v1/portfolio/dodbbwwbeqkgysz3d00d"
        },
        {
            title: "fnp.com",
            link: "https://www.fnp.com",
            image: "https://res.cloudinary.com/dhrzyzezw/image/upload/f_auto,q_auto/v1/portfolio/imxxoomj3gefiujwau1b"
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
                            <div className="shadow-lg rounded image-container" key={item.title}>
                                <img src={item.image} alt={item.title} className="image"/>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Portfolio