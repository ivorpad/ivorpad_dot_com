import React, { Component } from 'react';
import ContactForm from './form/ContactForm';
import axios from 'axios';

export default class Contact extends Component {

  submit = ({ firstName, lastName, email, subject, comment }) => {
    axios.post(`/api/send`, {
      firstName,
      lastName,
      email,
      subject,
      comment
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container flex px-4 justify-center">
        <div className="form-container w-1/2">
          <h2 className="py-8 text-blue-darkest ml-8 inline-block align-middle">Contact</h2> <span className="align-middle text-sm text-grey-dark font-serif italic"> — Get in touch! </span>
          <p className="ml-8 pb-8 text-grey-darker leading-normal text-justify text-lg -mt-3 pr-8">If you have any inquiries feel free to drop me a line. You can request a quote for your project or just say hi!</p>
          <ContactForm onSubmit={this.submit} />
        </div>
      </div>
    )
  }
}
