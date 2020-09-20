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
              <Logo width="100%" height="100%"/>
            </div>
          </div>
          <div className="intro-right">
            <div className="bio">
              <p>
                <strong>Hi, I'm Joe.&nbsp;</strong>
                <span>I enjoy making things with code.&nbsp;</span>
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
