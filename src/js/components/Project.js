require('../../sass/Projects.scss');

import React from "react";

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="projectElement">
                <div className="projectImage"></div>
                <div className="projectCard">
                    <div className="projectTitle">{this.props.project.title}</div>
                    <div className="projectBrief">{this.props.project.brief}</div>
                    <div className="projectDescription">{this.props.project.description}</div>
                </div>
            </div>
        );
    }
}