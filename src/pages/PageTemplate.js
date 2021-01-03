import React from 'react';

// common components to each page
import Footer from "../Footer";
import Navigation from "../Navigation";

import "./page.css";

function PageTemplate(props) {
    return (
        <div>
            <Navigation />
            <div>{props.children}</div>
            <Footer />
        </div>
    );
}

export default PageTemplate;
