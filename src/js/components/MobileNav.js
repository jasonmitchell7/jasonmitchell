require('../../sass/Nav.scss');

import React from "react";
import { Link } from "react-router";

const data = require('../data');

export default class MobileNav extends React.Component {
    render() {
        const navItems = data.navItemData.map(function(navItem, i) {
            return (
                <Link to={navItem.to} key={i}>
                    <div className="navItem" id={"navItem" + i}>
                        {navItem.title}
                    </div>
                </Link>
            );
        });

        return (
            <div className="mobileNav">
                <span className="navTitle">Menu</span>
                {navItems}
            </div>
        );
    }
}