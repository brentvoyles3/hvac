import "./Home"
import "./CustomImage"

export default function ImproveHome() {
    return(
        <div className="section improve-home">
            <div className="col img">
                <img src="/img/gallery/improve.jpeg" alt=""/>
            </div>
        <div className="col">
            <h1 className="title">Get your HVAC Needs</h1>
            <button className="btn">Schedule Free Quote</button>
        </div>
    </div>
    )
}