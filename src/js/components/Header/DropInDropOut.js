require('../../../sass/Header/DropInDropOut.scss');

import React from "react";

export default class DropInDropOut extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDroppingIn: false,
            isDroppingOut: false,
            lastPhrase: null
        };

        this.getClassName = this.getClassName.bind(this);
        this.getPhraseToDisplay = this.getPhraseToDisplay.bind(this);
        this.animationTimeout = this.animationTimeout.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.phrase != nextProps.phrase) {
            this.setState({
                isDroppingIn: false,
                isDroppingOut: true,
                lastPhrase: this.props.phrase
            });

            this.timeout = setTimeout(this.animationTimeout, this.props.delay / 2);
        }
    }

    animationTimeout() {
        if (this.state.lastPhrase) {
            this.setState({
                isDroppingIn: true,
                isDroppingOut: false,
                lastPhrase: null
            });

            this.timeout = setTimeout(this.animationTimeout, this.props.delay / 2);
        } else if (this.timeout) {
            this.setState({
                isDroppingIn: false,
                isDroppingOut: false
            });

            clearTimeout(this.timeout);
        }
    }

    getClassName() {
        if (this.state.isDroppingIn) {
            return "isDroppingIn";
        } else if (this.state.isDroppingOut) {
            return "isDroppingOut";
        }

        return "";
    }

    getPhraseToDisplay() {
        return (this.state.lastPhrase ? this.state.lastPhrase : this.props.phrase);
    }


    render() {
        return (
            <span className="dropInDropOut">
                <span className={this.getClassName()}> <strong> {this.getPhraseToDisplay()} </strong></span>
            </span>
        );
    }
}