require('../../sass/Blog.scss');

import React from "react";

export default class Blog extends React.Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="blog sectionPadding">
                <h1>Blog</h1>
                <div className="blogItem">
                    Hi there! So this website is brand new, and I haven't written any blogs yet. Don't worry though, they will be here shortly!
                </div>
                <div className="blogItem">
                    In the meantime, feel try to read about me and browse my current programming knowledge.
                </div>
            </div>
        );
    }
}