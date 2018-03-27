import React, { Component } from 'react';
import ContactForm from './form/ContactForm';
import axios from 'axios';

export default class Contact extends Component {

  submit = ({ firstName, lastName, email, comment }) => {
    axios.post(`/api/send`, {
      firstName,
      lastName,
      to: email,
      comment
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Contact Page</h1>
        <ContactForm onSubmit={this.submit} />
      </div>
    )
  }
}
