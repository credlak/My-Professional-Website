import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <nav>
            <ul>
                <li><Link to={{ pathname: "/" }}>home</Link></li>
                <li><Link to={{ pathname: "resume" }}>resume</Link></li>
                <li><Link to={{ pathname: "projects" }}>projects</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;