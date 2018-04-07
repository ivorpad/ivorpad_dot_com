import React from 'react'
import { Field, reduxForm } from 'redux-form';
import TextAreaAutoSize from 'react-textarea-autosize';


let ContactForm = props => {
  const { handleSubmit } = props;

  return(
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
        <Field className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="firstName" component="input" type="text" />
      </div>
      <div>
        <label className="block text-grey-darker text-sm font-bold mb-2 mt-6" htmlFor="firstName">Last Name</label>
        <Field className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="lastName" component="input" type="text" />
      </div>
      <div>
        <label className="block text-grey-darker text-sm font-bold mb-2 mt-6" htmlFor="email">Email</label>
        <Field className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="email" component="input" type="email" /> 
      </div>
      <div className="relative">
        <label className="block text-grey-darker text-sm font-bold mb-2 mt-6" htmlFor="subject">Subject</label>
        <Field className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow" name="subject" component="select">
          <option value="">Please select a subject</option>
          <option value="say-hi">Just want to say hi</option>
          <option value="project">Talk about a project</option>
        </Field>
        <div className="arrow pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>
      <div>
        <label className="block text-grey-darker text-sm font-bold mb-2 mt-6" htmlFor="comment">Comment</label>
        <Field name="comment" component={({ input }) => {
          return(
            <TextAreaAutoSize
              className="shadow-inner appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-normal"
              minRows={3}
              {...input}
            />
          )
        }} /> 
      </div>
      <button className="bg-blue mt-6 py-3 px-6 rounded shadow-md text-white hover:bg-blue-dark uppercase text-xs font-bold" type="submit">Submit</button>    </form>
  )
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

export default ContactForm;