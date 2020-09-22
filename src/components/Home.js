// import React, { Component } from 'react'
import Logo from './Logo';
import IconLink from './IconLink';
import Icon from './Icon';
import { h, render } from 'preact';
import { Component } from 'preact/compat';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page page__home">
        <div className="intro">
          <div className="intro-left">
            <div className="logo-container">
              <Logo />
            </div>
          </div>
          <div className="intro-right">
            <div className="bio">
              <p>
                <h1>Hi, I'm Joe.&nbsp;</h1>
                <h2>I enjoy making things with code.&nbsp;</h2>
              </p>
              <div className="links-container">
                <ul className="links">
                  <code className="comment">// links</code>
                  <li><IconLink url="https://github.com/jnruel" text="Github" icon="github"/></li>
                  <li><IconLink url="https://codepen.io/jruel" text="Codepen" icon="codepen"/></li>
                  <li><IconLink url="https://www.linkedin.com/in/joeruel/" text="LinkedIn" icon="linkedin" /></li>
                </ul>
              </div>
              <ul className="contact">
                <code className="comment">// contact</code>
                <li style={{display: 'flex'}} className="email"><Icon icon="email" /> joe [at] jruel [dot] com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
