import React, { Component } from 'react'
import Logo from './Logo';

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
                <strong>Hi, I'm Joe Ruel.&nbsp;</strong>
                <span>I enjoy making things with code.&nbsp;</span>
              </p>
              <ul className="links">
                <code className="comment">// links</code>
                <li><a href="">Github</a></li>
                <li><a href="">Codepen</a></li>
                <li><a href="">LinkedIn</a></li>
              </ul>
              <ul>
                <code className="comment">// contact</code>
                <li className="email">joe [at] jruel [dot] com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
