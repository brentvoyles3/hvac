import CustomImage from "./CustomImage"

export default function Home() {
    const images = [
        "/img/gallery/img_1.jps",
        "/img/gallery/img_2.jps",
        "/img/gallery/img_3.jps",
        "/img/gallery/img_4.jps",
        "/img/gallery/img_5.jps",
        "/img/gallery/img_6.jps",
        "/img/gallery/img_7.jps",
        "/img/gallery/img_8.jps",
        "/img/gallery/img_9.jps",
    ]
    return(
        <div className="section home">
            <div className="col">
                <h1 className="title">What We Are About</h1>
                <p className="info"> ChapmanHVAC is a family owned company that began business in 2014. We believe in hardwork, loyalty, and guaranteeing customer satisfaction. Don't hesitate to check out more below!</p>
                <button className="btn"> Explore Now </button>
            </div>
            <div className="col gallery">
                { images.map((src,index) => (
                     <CustomImage key={index} imgSrc={src} pt={"85%"}/>
                ))}
            </div>
        </div>
    )
}