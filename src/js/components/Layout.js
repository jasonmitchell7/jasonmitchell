import React from "react";

import Footer from "./Footer";
import Header from "./Header/Header";
import Nav from "./Nav";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Nav activePath={this.props.location.pathname}/>
                <Header/>
                <div id="contentView">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}