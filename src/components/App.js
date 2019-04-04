import React, { Component } from 'react'
import Logo from './Logo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('test');
    return (
      <main>
        <div className="content-main">
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
              I'm a full stack developer based in Chicago.
              Check me out on <a target="_blank" href="https://github.com/jnruel">Github</a> and <a target="_blank" href="https://www.linkedin.com/in/joeruel/">LinkedIn</a>.
              </div>
            </div>
          </div>
        </div>
        <div className="content-logo">
          <div className="logo-container">
            <Logo width="100%" height="100%"/>
          </div>
        </div>
      </main>
    )
  }
}

export default App;
