require('../../../sass/Skills.scss');

import React from "react";

import KnowledgeMeter from "./KnowledgeMeter";

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisplayed: false
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.getMeterForDisplay = this.getMeterForDisplay.bind(this);
    }

    handleScroll(event) {
        const scrollPos = event ? event.srcElement.body.scrollTop : window.scrollY;

        if (scrollPos > ((this.skillInfoDiv.offsetTop + 35) - window.innerHeight)) {
            this.setState({
                isDisplayed: true
            });

            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    componentDidMount() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    getMeterForDisplay() {
        if (navigator.userAgent.indexOf("Firefox") > 0) {
            return "";
        } else {
            return (
                <div className="skillKnowledge">
                    <KnowledgeMeter level={this.props.skill.level} isDisplayed={this.state.isDisplayed}/>
                </div>
            );
        }

    }

    render() {
        return (
            <div className="skillContainer">
                <h3 className="skillName">{this.props.skill.name}</h3>
                <div className="skillInfo" ref={(div) => {this.skillInfoDiv = div;}}>
                    {this.getMeterForDisplay()}
                    <div>
                        <div className={this.state.isDisplayed ? "skillDescription showDescription" : "skillDescription"}>
                            {this.props.skill.description}
                        </div>
                        <div className="arrowDown"></div>
                    </div>
                </div>
            </div>
        );
    }
}