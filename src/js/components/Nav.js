require('../../sass/Nav.scss');

import React from "react";
import { Link } from "react-router";

import MobileNav from './MobileNav';
import SiteNav from './SiteNav';

const assets = require('../assets');

export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            lastPath: props.activePath.replace("/", "")
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activePath !== undefined && this.state.lastPath !== nextProps.activePath) {
            this.setState({
                isOpen: false,
                lastPath: nextProps.activePath.replace("/", "")
            });
        }
    }

    handleToggleClick() {
        this.setState({
            isOpen: !this.state.isOpen,
            lastPath: this.state.lastPath
        });
    }

    render() {
        return (
            <div className={this.state.isOpen ? 'nav isOpen' : 'nav'}>
                <Link to="index">
                    <img src={assets.logoInitialsSrc} className="navLogo"/>
                </Link>
                <SiteNav activePath={this.state.lastPath}/>
                <MobileNav/>
                <div className="navToggle" onClick={this.handleToggleClick.bind(this)}>
                    <span></span>
                </div>
            </div>
        );
    }
}