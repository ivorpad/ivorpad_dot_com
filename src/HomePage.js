import React, { Component } from 'react'

export default class HomePage extends Component {

  state = {
    email: ''
  }


  setRef = (ref) => {
    this.email = ref;
  }

  handleClick = (e) => {
    e.preventDefault()
  }

  render() {

    const inputClasses = "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
    const buttonClasses = "mv4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"

    return (
      <div>
        <h1>This is my homepage</h1>


        <div className="pa4 black-80">
          <form action="" className="measure center">
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Text Input</label>
              <input className={inputClasses} type="email" name="email-address" id="email-address" ref={this.setRef} />
            </div>
            <input className={buttonClasses} type="submit" value="Sign in" onClick={this.handleClick}/>
          </form>
        </div>

      </div>
    )
  }
}
