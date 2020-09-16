import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserApi from './apis/User.js'
import News from './components/News';
import OmdbSummary from './components/OmdbSummary';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Dashboard from './components/Dashboard';


class App extends Component {

  state = {
    isLoggedIn: false,
    user: {
      name: "",
      user: {}
    },
    userWidgets: [
      { name: News, value: "cnn" },
      { name: OmdbSummary, value: "avatar" },
    ],
  }

  componentDidMount() {

    const token = localStorage.getItem("token");
    if (token) {
      UserApi.auth()
        .then((response) => {
          this.setState({ user: response.data, isLoggedIn: true })
        })
        .catch(error => {
          console.log(error)
        });

    }
  }

  logUser = (token) => {
    localStorage.setItem("token", token);
    UserApi.auth()
      .then((response) => {
        this.setState({ user: response.data, isLoggedIn: true })
      })
      .catch(error => {
        console.log(error)
      });
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ user: { name: "", widgtes: [] }, isLoggedIn: false })
  }

  addWidget = (widgetName) => {
    this.setState({ userWidgets: this.state.userWidgets.concat({ name: widgetName }) })
  }


  render() {
    return (

      <Router>
        <Header isLoggedIn={this.state.isLoggedIn} user={this.state.user} logout={this.logout} addWidget={this.addWidget} />
        <Route exact path="/">
          <Dashboard widgets={this.state.userWidgets} deleteWidget={this.deleteWidget} />
        </Route>
        <Route path="/login" >
          <Login logUser={this.logUser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Router>
    );
  }
}

export default App;

/* <div className="container md-col-10 d-flex justify-content-start">
  <div style={{ width: '30%', minWidth: '250px' }} >
    <Widgets />
  </div>
  <Dashboard />
</div> */
