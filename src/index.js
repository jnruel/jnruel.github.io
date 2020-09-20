
import { h, render } from 'preact';
import { PureComponent } from 'preact/compat';
import Home from './components/Home';
import './styles/main.scss'

// class App extends PureComponent {
//   render() {
//     return(<Home/>)
//   }
// }

class App extends PureComponent {
  render(props) {
    return <Home/>
  }
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
