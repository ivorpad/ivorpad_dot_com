import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
class TopNav extends Component {

  state = {
    menuIsOpen: false
  }

  handleTopNavMenu() {
    console.log('clicked')
  }

  render() {
    return (
      <div className="bg-grey-light border-b pt-4 pb-4 shadow-inner">
        <div className="container flex justify-between mx-auto px-4">
          <div className="w-1/4">
            <a href="/">Logo</a>
          </div>
          <div>
            <div className="w-1/4 sm:block md:block lg:hidden">
              <svg onClick={this.handleTopNavMenu} className="hamburguer fill-current text-orange-lighter" height="32px" id="Layer_1" style={{ enableBackground: 'new 0 0 32 32' }} version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>
            </div>

            <div className="w-1/4 hidden sm:hidden md:hidden lg:block xl:block">
              <ul className="flex list-reset">
                <li><Link className="text-blue-darker no-underline text-xs font-bold uppercase tracking-wide border-blue pb-4 border-b-2 pl-3 pr-3" to="/">Home</Link></li>
                <li className="ml-3"><Link className="text-blue-darker no-underline border-b-2 border-transparent hover:border-blue text-xs font-bold uppercase tracking-wide pb-4 pl-3 pr-3" to="/blog">Articles</Link></li>
                <li className="ml-3"><Link className="text-blue-darker no-underline border-b-2 border-transparent hover:border-blue text-xs font-bold uppercase tracking-wide pb-4 pl-3 pr-3" to="/about">About</Link></li>
                <li className="ml-3"><Link className="text-blue-darker no-underline border-b-2 border-transparent hover:border-blue text-xs font-bold uppercase tracking-wide pb-4 pl-3 pr-3" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNav;