require('../../sass/Contact.scss');

import React from "react";

const data = require('../data');

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validName: true,
            validEmail: true,
            validMessage: true,
            submitted: false
        };

        this.clearSubmitted = this.clearSubmitted.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateText = this.validateText.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.getNotificationDiv = this.getNotificationDiv.bind(this);
    }

    clearSubmitted() {
        if (this.state.submitted) {
            this.setState({
                submitted: false
            });
        }
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    doSubmit() {
        console.log("submitted!!");
        this.setState({
            submitted: true
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.submitted) {
            const validName = this.validateText(this.nameField.value);
            const validEmail = this.validateEmail(this.emailField.value);
            const validMessage = this.validateText(this.messageField.value);

            this.setState({
                validName: validName,
                validEmail: validEmail,
                validMessage: validMessage
            });

            if (validName && validEmail && validMessage) {
                this.doSubmit();
            }
        }
    }

    validateText(text) {
        return text !== "";
    }

    validateEmail(email) {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return (this.validateText(email) && re.test(email));
    }

    getNotificationDiv() {
        if (!this.state.validName || !this.state.validEmail || !this.state.validMessage) {
            return (
                <div id="formNotification">
                    Could not send message. Fill in all fields and ensure the email is valid.
                </div>
            );
        } else if (this.state.submitted) {
            return (
                <div className="formNotification">
                    Message sent successfully!
                </div>
            );
        }

        return "";
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
                    <form id="contactForm">
                        <div id="contactDescription">
                            Send me a <strong>message</strong>
                        </div>
                        <div className="formInfo">
                            <div className="formField">
                                <input type="text"
                                       name="name"
                                       className={this.state.validName ? "" : "invalidInput"}
                                       onChange={this.clearSubmitted}
                                       placeholder="Name"
                                       ref={(input) => {this.nameField = input;}}
                                />
                            </div>
                            <div className="formField">
                                <input type="text"
                                       name="email"
                                       className={this.state.validEmail ? "" : "invalidInput"}
                                       onChange={this.clearSubmitted}
                                       placeholder="Email"
                                       ref={(input) => {this.emailField = input;}}
                                />
                            </div>
                        </div>
                        <div className="formField">
                            <textarea name="message"
                                      className={this.state.validMessage ? "" : "invalidInput"}
                                      onChange={this.clearSubmitted}
                                      placeholder="Message"
                                      ref={(input) => {this.messageField = input;}}
                            />
                        </div>
                        {this.getNotificationDiv()}
                        <span className="formSubmit">
                            <input type="submit"
                                   value={this.state.submitted ? "Sent" : "Send"}
                                   onClick={this.handleSubmit}
                            />
                        </span>
                    </form>
                    <div id="otherContactMethods">
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
            </div>
        );
    }
}