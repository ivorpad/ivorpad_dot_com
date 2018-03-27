import React from 'react'
import { Field, reduxForm } from 'redux-form';

let ContactForm = props => {
  const { handleSubmit } = props;
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label> <br/>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="firstName">Last Name</label> <br/>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label> <br />
        <Field name="email" component="input" type="email" /> 
      </div>
      <div>
        <label htmlFor="comment">Comment</label> <br />
        <Field name="comment" component="textarea" type="text" /> 
      </div>
      <button type="submit">Submit</button>    </form>
  )
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

export default ContactForm;