import React from "react";

import Skill from "./Skill";

const data = require('../../data');

export default class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollPosition: 0
        };
    }

    render() {
        const skillElements = data.skills.map(function(skill, i) {
            return (
                <Skill key={i} skill={skill}/>
            );
        }.bind(this));

        return (
            <div className="sectionPadding">
                <h1>Skills</h1>
                {skillElements}
            </div>
        );
    }
}