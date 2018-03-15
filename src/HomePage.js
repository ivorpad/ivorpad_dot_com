import React, { Component } from 'react'
import moment from 'moment';
import { Link } from "react-router-dom";
import Button from './Button'

export default class HomePage extends Component {

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
            <Button> Available to Hire </Button>
          </Link>
        </div>
      </div>
    )
  }
}
