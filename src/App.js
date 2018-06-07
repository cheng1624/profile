import React, { Component } from 'react';
import './App.css';
import './index.css';
import logo from './portfolio/digital/pink and grey.jpg';
import eggie from './portfolio/digital/eggie2.jpg';
import japan from './portfolio/digital/japan_1_orig.jpg';
import matrix from './portfolio/digital/matrix_orig.jpg';
import hava from './portfolio/digital/hava_1_orig.jpg';
import heartbeat from './portfolio/digital/hearbeat-logo_1_orig.jpg';
import calc from './portfolio/digital/Calc.jpg';
import calc2 from './portfolio/digital/Calc2.jpg';
import gatsby from './portfolio/digital/gatsby_orig.jpg';
import eva from './portfolio/digital/Logo2.jpg';
import CD from './portfolio/digital/mockup-digipack-1_orig.jpg';
import CD2 from './portfolio/digital/mockup-digipack-3_1_orig.jpg';
import beach from './portfolio/digital/beach storyboard.jpg';
import Logo2 from './portfolio/digital/Logo2.jpg';
import cat from './portfolio/IMG_1315.JPG';
import frenchie from './portfolio/IMG_0204.JPG';
import baby from './portfolio/IMG_1288.JPG';
import hands from './portfolio/IMG_7917.JPG';
import girl from './portfolio/IMG_4857.jpg';
import four from './portfolio/IMG_0330.jpg';
import lights from './portfolio/IMG_3445.JPG';


class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="icon" href="logo" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GRACE CHEN</h1>
          <ul className="Navigation">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </header>
        <p className="body"></p>
        <header className="App-header2">
          <a name="about"></a>
          <h2 className="heading">
            ABOUT
          </h2>
        </header>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <header className="App-header3">
          <h2 className="heading">
            <a name="portfolio"></a>
            PORTFOLIO
          </h2>
        </header>
        <p className="Space">
            <img src={eggie} className="Portfolio"/>
            <img src={logo} className="Portfolio"/>
            <img src={japan} className="Portfolio"/>
            <img src={matrix} className="Portfolio"/>
            <img src={hava} className="Portfolio"/>
            <img src={heartbeat} className="Portfolio"/>
            <img src={calc} className="Portfolio"/>
            <img src={calc2} className="Portfolio"/>
            <img src={gatsby} className="Portfolio"/>
            <img src={CD} className="Portfolio"/>
            <img src={CD2} className="Portfolio"/>
            <img src={beach} className="Portfolio"/>
            <img src={Logo2} className="Portfolio"/>
            <img src={girl} className="Portfolio"/>
            <img src={frenchie} className="Portfolio"/>
            <img src={cat} className="Portfolio"/>
            <img src={baby} className="Portfolio"/>
            <img src={hands} className="Portfolio"/>
            <img src={four} className="Portfolio"/>
            <img src={lights} className="Portfolio"/>
        </p>
        <header className="App-header4">
          <h2 className="heading">
            <a name="contact"></a>
            CONTACT
          </h2>
        </header>
        <p className="body">
          asldjfasd
        </p>
        <footer className="App-footer">

        </footer>
      </div>

    );
  }
}

export default App;
