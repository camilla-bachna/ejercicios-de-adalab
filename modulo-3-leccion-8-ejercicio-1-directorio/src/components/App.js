import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import getDataFromApi from '../services/api';
import '../stylesheets/App.scss';
import Home from './Home';
import PersonDetail from './PersonDetail';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personsDetails: [],
      filterCity: '',
      filterAge: '',
      isLoading: true,
    };

    getDataFromApi().then((data) => {
      this.setState({
        personsDetails: data.results,
        isLoading: false,
      });
    });

    this.handleFilterCity = this.handleFilterCity.bind(this);
    this.handleFilterAge = this.handleFilterAge.bind(this);
  }

  handleFilterCity(ev) {
    this.setState({
      filterCity: ev.target.value,
    });
  }

  handleFilterAge(ev) {
    this.setState({
      filterAge: ev.target.value,
    });
  }

  renderPersonsDetails() {
    return (
      this.state.personsDetails
        .filter((personsDetail) => {
          return personsDetail.location.city
            .toLowerCase()
            .includes(this.state.filterCity.toLowerCase());
        })
        /* .filter((personsDetail) => {
        return personsDetail.dob.age.includes(this.state.filterAge);
      }) */
        .map((personsDetail) => {
          return (
            <li key={personsDetail.id.value} className="list__item">
              <h2 className="list__item--detail">
                Name: {personsDetail.name.title} {personsDetail.name.first}
                {personsDetail.name.last}
              </h2>
              <img src={personsDetail.picture.medium} alt="profile foto"></img>
              <h3 className="list__item--detail">
                {' '}
                {personsDetail.location.city}
              </h3>
              <h4 className="list__item--detail">{personsDetail.dob.age}</h4>
              <p className="list__item--detail">
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolorum dicta aut distinctio dolor ducimus vitae in
                labore. Explicabo vitae, sunt minima quibusdam praesentium
                impedit asperiores voluptatibus laudantium ex alias ullam.
              </p>
            </li>
          );
        })
    );
  }

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
                <Link className="nav__link--link" to="/PersonDetail">
                  Person's Detail
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <p>{this.state.isLoading ? 'Cargando..' : ''}</p>

          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/PersonDetail" component={PersonDetail} />
          </Switch>
          <input
            type="text"
            placeholder="filer by city..."
            onChange={this.handleFilterCity}
            className="input"
          />
          <input
            type="text"
            placeholder="filer by age..."
            onChange={this.handleFilterAge}
            className="input"
          />
          <ul className="list">{this.renderPersonsDetails()}</ul>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
