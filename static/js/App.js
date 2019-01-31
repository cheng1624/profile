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
import eva from './portfolio/digital/red.jpg';
import CD from './portfolio/digital/mockup-digipack-1_orig.jpg';
import CD2 from './portfolio/digital/mockup-digipack-3_1_orig.jpg';
import beach from './portfolio/digital/beach storyboard.jpg';
import cat from './portfolio/IMG_1315.JPG';
import frenchie from './portfolio/IMG_0204.JPG';
import baby from './portfolio/IMG_1288.JPG';
import hands from './portfolio/IMG_7917.JPG';
import girl from './portfolio/IMG_4857.jpg';
import four from './portfolio/IMG_0330.jpg';
import lights from './portfolio/IMG_3445.JPG';
import jean from './portfolio/IMG_2376.JPG';
import blind from './portfolio/IMG_2100.JPG';
import blind2 from './portfolio/IMG_2101.jpg';
import pearl from './portfolio/IMG_7037.jpg';
import egg from './profile/egg.png';


class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="icon" href="logo" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GRACE </h1>
          <h1 className="App-title"> CHEN</h1>
          <ul className="Navigation">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#portfolio" target="_blank">PORTFOLIO</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </header>
        <header className="App-header2">
          <a name="about"></a>
          <h2 className="heading">
            ABOUT
          </h2>
        </header>
        <p className="Intro">
        I am a 16 year old designer and developer based in sunny San Diego.
        </p>
        <p className="body">
        After studying traditional art for 10 years, I made the switch to degital art and design.
        My love for subtle details, visual communication, and pleasing aesthetics led me to interface design and now I am part
        of an internation group of high schoolers who are ready to make something amazing.
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
            <img src={eva} className="Portfolio"/>
            <img src={baby} className="Portfolio"/>
            <img src={frenchie} className="Portfolio"/>
            <img src={cat} className="Portfolio"/>
            <img src={girl} className="Portfolio"/>
            <img src={pearl} className="Portfolio"/>
            <img src={four} className="Portfolio"/>
            <img src={lights} className="Portfolio"/>
            <img src={jean} className="Portfolio"/>
            <img src={blind} className="Portfolio"/>
            <img src={blind2} className="Portfolio"/>
            <img src={hands} className="Portfolio"/>
        </p>
        <header className="App-header4">
          <h2 className="heading">
            <a name="contact"></a>
            CONTACT
          </h2>
        </header>
        <p className="body"></p>
        <img src={egg} className="egg"/>
        <p className="contact">
        If you would like to collaborate on awesome projects feel free to contact me.
        </p>
        <p className="Contact">GRACE CHEN</p>
        <p className="contact">UI Designer & Artist </p>
        <p className="contact"><a href="mailto:gracechen567@gmail.com">gracechen567@gmail.com</a></p>
        <p className="body"><a href="https://www.instagram.com/gg.creativity/" class="fa fa-instagram"></a>
        <a href="mailto:gracechen567@gmail.com" class="fa fa-google"></a></p>

        <footer className="App-footer">

        </footer>
      </div>

    );

  }
}

export default App;
