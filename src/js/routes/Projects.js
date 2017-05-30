require('../../sass/Projects.scss');

import React from "react";

import Project from "./../components/Project";

const projects = require('../projects');

export default class Projects extends React.Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        const projectElements = projects.map(function(project, i) {
            return (
                <Project key={i} project={project}/>
            );
        }.bind(this));

        return (
            <div className="projects sectionPadding">
                <h1>Some of My Current and Past Projects</h1>
                {projectElements}
            </div>
        );
    }
}