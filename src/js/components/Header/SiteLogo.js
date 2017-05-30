require('../../../sass/Header/SiteLogo.scss');

import React from "react";

import DropInDropOut from "./DropInDropOut";

const data = require('../../data');

export default class SiteLogo extends React.Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.getLogoTranslation = this.getLogoTranslation.bind(this);
        this.getDescriptionElement = this.getDescriptionElement.bind(this);
        this.descriptionInterval = this.descriptionInterval.bind(this);

        this.state = {
            logoTranslate: this.getLogoTranslation(0),
            descriptorIndex: 0,
            joyIndex: 0,
            lastIncrementedJoy: false,
            changeDelay: 2400

        }
    }

    handleScroll(event) {
        this.setState({
            logoTranslate: this.getLogoTranslation(event.srcElement.body.scrollTop)
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.interval = setInterval(this.descriptionInterval, this.state.changeDelay);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        clearInterval(this.interval);
    }

    getLogoTranslation(position) {
        return {
            transform: 'translate(0px, ' + Math.floor(position / 2) + '%'
        }
    }

    descriptionInterval() {
        const getNextIndexOf = function(collection, currentIndex) {
            return (currentIndex + 1 >= collection.length) ? 0 : currentIndex + 1;
        };

        if (this.state.lastIncrementedJoy) {
            this.setState({
                descriptorIndex: getNextIndexOf(data.descriptors, this.state.descriptorIndex),
                lastIncrementedJoy: !this.state.lastIncrementedJoy
            });
        } else {
            this.setState({
                joyIndex: getNextIndexOf(data.joys, this.state.joyIndex),
                lastIncrementedJoy: !this.state.lastIncrementedJoy
            });
        }
    }

    getDescriptionElement() {
        return (
            <span className="description">
                {"I am a "}
                <DropInDropOut phrase={data.descriptors[this.state.descriptorIndex]} delay={this.state.changeDelay}/>
                {" who enjoys "}
                <DropInDropOut phrase={data.joys[this.state.joyIndex]} delay={this.state.changeDelay}/>
            </span>
        );
    }

    render() {
        return (
            <div id="siteLogo" style={this.state.logoTranslate}>
                <div className="name">Jason Mitchell</div>
                <div className="separator"></div>
                {this.getDescriptionElement()}
            </div>
        );
    }
}