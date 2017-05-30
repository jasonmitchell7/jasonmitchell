require('../../../sass/KnowledgeMeter.scss');

import React from "react";

export default class KnowledgeMeter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedLevel: 0,
            increaseLevelDelay: 400
        };

        this.increaseDisplayedLevel = this.increaseDisplayedLevel.bind(this);
        this.meterLevels = this.meterLevels.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.increaseDisplayedLevel, this.state.increaseLevelDelay);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    increaseDisplayedLevel() {
        if (this.props.isDisplayed) {
            if (this.state.displayedLevel < this.props.level) {
                this.setState({
                    displayedLevel: this.state.displayedLevel + 1
                });
            } else if (this.interval) {
                clearInterval(this.interval);
            }
        }
    }

    meterLevels() {
        var meterLevels = [];

        for (var i = 0; i < this.state.displayedLevel; i++) {
            meterLevels.push(<div className="meterInside" key={i}></div>);
        }

        return meterLevels;
    };

    render() {
        return (
            <span className={this.props.isDisplayed ? "meterWrapper showMeter" : "meterWrapper"}>
                <div className="meterContainer">
                    {this.meterLevels()}
                </div>
                <div className="meterEndCap"></div>
            </span>
        );
    }
}