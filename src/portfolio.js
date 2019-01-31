import React, { Component } from 'react';
import logo from './portfolio/digital/pink and grey.jpg';
import './portfolio.css';
class portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="column">
            <div className="content">
              <img src={logo} className="Portfolio"/>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src={logo} className="Portfolio"/>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src={logo} className="Portfolio"/>
            </div>
          </div>
        </div>
        <div className="content">
          <img src={logo} className="Portfolio"/>
        </div>
      </div>
    );
  }
}
