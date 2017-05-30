require('../../sass/Footer.scss');

import React from "react";

const data = require('../data');

export default class Footer extends React.Component {
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
            <footer>
                <div className="footerContainer">
                    <div id="recentPostsColumn">
                        <div><strong>Recent Posts</strong></div>
                        <div>This site is brand spankin' new!</div>
                        <div>The blogs will start shortly...</div>
                        <div>Check back here soon for the most recent content.</div>
                    </div>
                    <div id="socialColumn">
                        <div><strong>Social</strong></div>
                        {socialItems}
                    </div>
                    <div id="contactContainer">
                        <div id="contactColumn">
                            <div><strong>Contact</strong></div>
                            <div>Contact me by email:</div>
                            <div>
                                <a href={"mailto:" + data.contact.email}>
                                    {data.contact.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="copyright">&copy; 2017 Jason Mitchell</div>
            </footer>
        );
    }
}