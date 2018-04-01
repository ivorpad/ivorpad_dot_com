import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Button from './Button';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

export default class HomePage extends Component {

  render() {
    return (
      <div className="text-center content-center flex flex-col mt-8 pt-8">
        <h1 className="pb-6">Welcome, my name is &nbsp;
          <Tooltip title="(eye-vor || /ʌɪˈvɔːr/)" position="top" trigger="mouseenter" animation="fade" arrow={true} >
            <span className="border-b-2 border-blue-dark">Ivor</span> 
          </Tooltip>
        </h1>
          <section className="w-2/3 mx-auto mt-8 mb-8">
          <p className="font-serif leading-normal text-xl">
            I’m a front-end developer <span className="amp">&</span> UI Designer with 8 years of experience in JavaScript (ES5+) and other current web technologies:
  React.js, Vue.js, PHP (mostly WordPress dev), CSS and HTML.</p>
          </section>
        <section className="buttons">
          <Link to="/about">
            <Button color="bg-grey-dark" hover="bg-grey-darker"> More about me </Button>
          </Link>
          <Link to="/contact">
            <Button color="bg-blue" hover="bg-blue-dark"> Available to Hire </Button>
          </Link>
        </section>
        </div>
    )
  }
}
