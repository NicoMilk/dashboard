import React, { Component } from 'react';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/Header';
import Widgets from './components/Widgets';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserApi from './apis/User.js'


class App extends Component {

  state = {
    isLoggedIn: false,
    user: {
      name: "",
      user: {}
    }
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

  setWidgets = (userWidgets) => {
    //reset widgets in user model
  }

  render() {
    return (

      <Router>
        <Header isLoggedIn={this.state.isLoggedIn} user={this.state.user} logout={this.logout} />
        <Route exact path="/">
          <div className="container md-col-10 d-flex justify-content-start">
            <div style={{ width: '30%', minWidth: '250px' }} >
              <Widgets />
            </div>
            <Dashboard widgets={this.state.user.widgets} setWidgets={this.setWidgets} />
          </div>
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
