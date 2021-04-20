import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Home from './Home';
import About from './About';
import Pricing from './Pricing';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="title">React router</h1>
          <nav className="nav">
            Menu:
            <ul className="nav__list">
              <li className="nav__link">
                <Link className="nav__link--link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav__link">
                <Link className="nav__link--link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav__link">
                <Link className="nav__link--link" to="/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
