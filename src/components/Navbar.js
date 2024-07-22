import { useState }  from "react";
export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
<div className="navbar container"> 
    <a href="!#" className="logo"> C<span>ha</span>pman<span>H</span>vac</a>
    <div className="nav-links">
        <a href="!#">Home</a>
        <a href="!#">Services</a>
        <a href="!#">Gallery</a>
    </div>
    {/* onClick not working...*/ }
    <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn acative" : "sidebar-btn"}>
        <div className="bar"> </div>
        <div className="bar"> </div>
        <div className="bar"> </div>
    </div>
</div>
    )
}