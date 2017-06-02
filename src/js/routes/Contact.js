require('../../sass/Contact.scss');

import React from "react";

const data = require('../data');

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        const socialItems = data.contact.social.map(function(socialItem, i) {
            return (
                <div key={i}>
                    <a href={socialItem.url}>
                        {socialItem.name}
                    </a>
                </div>
            );
        });

        return (
            <div id="contactPage" className="sectionPadding">
                <h1>Contact Me</h1>
                <div id="contactMethods">
                    <div className="email">
                        <h3>Email</h3>
                        <a href={"mailto:" + data.contact.email}>
                            {data.contact.email}
                        </a>
                    </div>
                    <div className="social">
                        <h3>Social</h3>
                        {socialItems}
                    </div>
                </div>
            </div>
        );
    }
}