import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Button from './Button';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

export default class Homepage extends Component {

  render() {
    return (
      <main className="homepage-content container pt-8 pb-8 mx-auto w-4/5 px-4 lg:w-3/4 md:w-3/4 xl:w-3/5 md:pt-0 lg:pt-0 xl-pt-0 md:pb-0 lg:pb-0 xl:pb-0">
        <div className="flex flex-col main--section">
          <h1 className="main-title pb-6 text-5xl text-blue-darkest">Welcome, my name is &nbsp;
          <Tooltip title="(eye-vor || /ʌɪˈvɔːr/)" position="top" trigger="mouseenter" animation="fade" arrow={true} >
              <span className="border-b border-blue-dark border-dotted text-blue-dark">Ivor</span>
            </Tooltip>
          </h1>
          <section className="mt-2 mb-8">
            <p className="font-serif leading-normal text-xl text-grey-darkest">
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

      </main>
    )
  }
}
