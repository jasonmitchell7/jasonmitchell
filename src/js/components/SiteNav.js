require('../../sass/Nav.scss');

import React from "react";
import { Link } from "react-router";

const data = require('../data');

export default class SiteNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePath: props.activePath.replace("/", "")
        };

        this.getArrowDownComponentForActivePath = this.getArrowDownComponentForActivePath.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            activePath: nextProps.activePath.replace("/", "")
        });
    }

    getArrowDownComponentForActivePath(navItemPath) {
        if (this.state.activePath === navItemPath || this.state.activePath === "" && navItemPath === "index") {
            return <div className="arrowDown"></div>
        }

        return "";
    }

    render() {
        const navItems = data.navItemData.map(function(navItem, i) {
            return (
                <Link to={navItem.to} key={i}>
                    <div className="navItem">
                        {navItem.title}
                        {this.getArrowDownComponentForActivePath(navItem.to)}
                    </div>
                </Link>
            );
        }.bind(this));

        return (
            <div className="siteNav">
                {navItems}
            </div>
        );
    }
}