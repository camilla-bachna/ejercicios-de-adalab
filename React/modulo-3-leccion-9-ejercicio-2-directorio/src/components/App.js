import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import getDataFromApi from '../services/api';
import '../stylesheets/App.scss';
import Home from './Home';
import PersonDetail from './PersonDetail';
import PersonNotFound from './PersonNotFound';

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
    this.renderPersonDetails = this.renderPersonDetails.bind(this);
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

  renderName() {
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
                {personsDetail.name.title} {personsDetail.name.first}
                {personsDetail.name.last}
              </h2>
            </li>
          );
        })
    );
  }

  renderPersons() {
    return this.state.personsDetails
      .filter((personsDetail) => {
        return personsDetail.location.city
          .toLowerCase()
          .includes(this.state.filterCity.toLowerCase());
      })
      .map((personsDetail, index) => {
        return (
          <li key={index} className="list__item">
            <Link to={`/person-info/${personsDetail.email}`}>
              <h2 className="list__item--detail">
                Name: {personsDetail.name.title} {personsDetail.name.first}
                {personsDetail.name.last}
              </h2>
            </Link>
            <img src={personsDetail.picture.medium} alt="profile foto"></img>
            <h3 className="list__item--detail">
              {' '}
              {personsDetail.location.city}
            </h3>
            <h4 className="list__item--detail">{personsDetail.dob.age}</h4>
            <p className="list__item--detail">
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolorum dicta aut distinctio dolor ducimus vitae in labore.
              Explicabo vitae, sunt minima quibusdam praesentium impedit
              asperiores voluptatibus laudantium ex alias ullam.
            </p>
          </li>
        );
      });
  }

  renderPersonDetails(routerProps) {
    console.log('Id', routerProps.match.params.personId);
    const routerPersonId = routerProps.match.params.personId;
    const personFound = this.state.personsDetails.find(
      (person) => person.email === routerPersonId
    );
    if (personFound) {
      return (
        <PersonDetail>
          {personFound.email} {personFound.name.first}{' '}
        </PersonDetail>
      );
    } else {
      return <PersonNotFound />;
    }
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
                <Link className="nav__link--link" to="/personsDetails">
                  Person's Detail
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <p>{this.state.isLoading ? 'Loading...' : ''}</p>

          <Switch>
            <Route path="/personsDetails">
              <PersonDetail personsDetails={this.state.personsDetails}>
                <ul className="list">{this.renderPersons()}</ul>
              </PersonDetail>
            </Route>
            <Route
              path="/person-info/:personId"
              render={this.renderPersonDetails}
            />
            <Route exact path="/home" component={Home}>
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
              <ul className="list">{this.renderName()}</ul>
            </Route>
            {/*     <Route path="/PersonDetail" component={PersonDetail}>
              
            </Route> */}
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
