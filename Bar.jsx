import React from 'react'
import { Link } from "react-router-dom";
function Bar() {
  return (
    <div className="bar">
        <ul>
            <li><Link to={"/Main"}>Home</Link></li>
            <li><Link to={"/Resume"}>Resume</Link></li>
            <li><Link to={"/Projects"}>Projects</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Bar