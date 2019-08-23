import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="page-home">
        {/* <div className="content-main"> */}
          <div className="intro">
            <div className="intro-left">
              <div className="hello">
                Hi, I'm
              </div>
              <div className="name">
                Joe Ruel
              </div>
            </div>
            <div className="intro-right">
              <div className="bio">
              I'm a web developer based in Chicago. <span>Take a look at my <Link to="/resume">r&eacute;sum&eacute;</Link> or check me out on <a target="_blank" href="https://github.com/jnruel" rel="noopener">Github</a> and <a target="_blank" href="https://www.linkedin.com/in/joeruel/" rel="noopener">LinkedIn</a>.</span>
              </div>
            </div>
          </div>
        {/* </div> */}
        <div className="content-logo">
          <div className="logo-container">
            <Logo width="100%" height="100%"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
