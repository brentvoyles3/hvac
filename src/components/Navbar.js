import { useState }  from "react";
import Sidebar from "./Sidebar";

import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const links = [
       {
        name: "Home",
        path: "/",
        icon: faHome
       },
       {
        name: "Services",
        path: "services",
        icon: faList
       },
       {
        name: "Gallery",
        path: "gallery",
        icon: faCog
       },
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }


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
    <div onClick={() => {setShowSidebar(true)}} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
        <div className="bar"> </div>
        <div className="bar"> </div>
        <div className="bar"> </div>
    </div>
</div>
{ showSidebar && <Sidebar close={closeSidebar} links={links} /> }
</>
    )
}