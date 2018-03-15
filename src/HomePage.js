import React, { Component } from 'react'
import moment from 'moment';
import { Link } from "react-router-dom";

export default class HomePage extends Component {

  state = {
    email: ''
  }

  setRef = (ref) => {
    this.email = ref;
  }

  handleClick = (e) => {
    e.preventDefault();
  }

  getAge(dateOfBirth) {
    return moment().diff(dateOfBirth, 'years', false)
  }

  render() {

    const age = this.getAge("1983-04-26");

    return (
      <div className="dt w-100">
        <div className="dtc v-mid tc ph3 ph4-1 pv5">
          <h1 className="f1 f2-m">Ivor.</h1>
          <section className="mw5 mw7-ns center ph5-ns pb4">
            <p className="intro lh-copy serif">
              I’m a Full Stack Developer with experience in PHP, JavaScript, CSS and Ruby on Rails.
    I currently work full time for Envato, but I love tinckering with fun side projects.
react... I have {age} years.</p>
          </section>
          <Link to="/contact">
          <button className="f6 lh-copy ba b--black pv2 ph4 br2 bw1 tracked pointer bg-animate hover-bg-black hover-white items-center">Available to Hire</button>
          </Link>
        </div>
      </div>
    )
  }
}
