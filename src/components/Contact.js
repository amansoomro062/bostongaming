import React, { Component } from 'react';
import axios from 'axios'

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phonenumber: '',
            message: ''
        }
    }

    render() {
        return (
            <section className="page-section bg-primary" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Contact Me</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row" >
                        <div className="col-lg-8 mx-auto">
                            <form id="contactForm" name="sentMessage" onSubmit={this.handleSubmit.bind(this)} method="POST" >
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Name</label>
                                        <input className="form-control" id="name" type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}  placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email Address</label>
                                        <input className="form-control" id="email" type="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label>
                                        <input className="form-control" id="phonenumber" type="tel" placeholder="Phone Number" value={this.state.phonenumber} onChange={this.onPhoneChange.bind(this)} required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Message</label>
                                        <textarea className="form-control" id="message" rows="5" placeholder="Message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required="required" data-validation-required-message="Please enter a message."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br />
                                <div id="success"></div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-xl float-left" id="sendMessageButton" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onPhoneChange(event) {
        this.setState({ phonenumber: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();

        axios({
            method: "POST",
            url: "http://localhost:5039/contact",
            data: this.state
        }).then((response) => {
            console.log(response.status);
            if (response.status === 201) {
                alert("Message Sent.");
                console.log("Message sent");
                this.resetForm()
            } else {
                
                console.log("Message failed");
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', phonenumber: '', message: ''})
      }

}

export default Contact;