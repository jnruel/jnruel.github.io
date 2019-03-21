import React, { Component } from 'react'
// import IconGithub from './components/icons/IconGithub';
import Icon from './Icon';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main">
        {/* <div className="links">
          <a href="">
            <Icon icon="github"/>
          </a>

          <a href="">
            <Icon icon="linkedin"/>
          </a>
        </div> */}
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
            &hellip;a Chicago-based full stack developer.
            Check me out on <a target="_blank" href="https://github.com/jnruel">Github</a> and <a target="_blank" href="https://www.linkedin.com/in/joeruel/">LinkedIn</a>.
            </div>
          </div>
        </div>
      </main>

    )
  }
}

export default App
