import { useState }  from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const links = [
       {
        name: "Home",
        path: "/"
       },
       {
        name: "Services",
        path: "services"
       },
       {
        name: "Gallery",
        path: "gallery"
       },
    ]
    return (
<>
<div className="navbar container"> 
    <a href="!#" className="logo"> C<span>ha</span>pman<span>H</span>vac</a>
    <div className="nav-links">
        { links.map (link => (
            <a href="#!" key={link.name}>{link.name}</a>
        ))}
       {/* <a href="!#">Home</a>
        <a href="!#">Services</a>
    <a href="!#">Gallery</a> */}
    </div>
    {/* onClick not working...*/ }
    <div onClick={() => {setShowSidebar(!showSidebar)}} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
        <div className="bar"> </div>
        <div className="bar"> </div>
        <div className="bar"> </div>
    </div>
</div>
<Sidebar links={links} />
</>
    )
}