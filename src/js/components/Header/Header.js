require('../../../sass/Header/Header.scss');

import React from "react";

import SiteLogo from "./SiteLogo";

export default class Header extends React.Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <div className="header">
                <div className="box">
                    <div className="fader"></div>
                    <SiteLogo/>
                </div>
            </div>
        );
    }
}