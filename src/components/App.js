import React, { Component } from 'react'
import { HashRouter, Route, Link } from "react-router-dom";
import Home from './Home';
import Resume from './Resume';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter basename="/" >
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
        </main>
      </HashRouter>
    )
  }
}

export default App;
