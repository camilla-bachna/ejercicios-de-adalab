import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Home from './Home';
import Relax from './Relax';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="title">El contador con ciclo de vida</h1>
          <nav className="nav">
            Menu:
            <ul className="nav__list">
              <li className="nav__link">
                <Link className="nav__link--link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav__link">
                <Link className="nav__link--link" to="/relax">
                  Relax
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/relax" component={Relax} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
