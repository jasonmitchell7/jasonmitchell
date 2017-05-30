import React from "react";

export default class Error404 extends React.Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="404 sectionPadding">
                <h1>404 - Page Not Found</h1>
                <div className="404Message">
                    Oh no! Something went wrong and we couldn't find the page you were looking for...
                </div>
                <div className="404Face">
                    =(
                </div>
            </div>
        );
    }
}