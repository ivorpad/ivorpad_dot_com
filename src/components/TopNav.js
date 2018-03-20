import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
const TopNav = (props) => {

  return (
    <div className="top-nav">
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-50-ns pa2">
            <div className="pv1">
              <a href="/">Logo</a>
            </div>
          </div>
          <div className="fl w-100 w-50-ns pa2">
            <div className="pv1 cf">
              <ul className="main-menu fr">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav;