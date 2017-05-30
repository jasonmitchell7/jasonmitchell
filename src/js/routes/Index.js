import React from "react";

import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills/Skills";

export default class Index extends React.Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="sectionPadding">
                <AboutMe/>
                <Skills/>
            </div>
        );
    }
}