import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserApi from './apis/User.js'
import News from './components/News';
import OmdbSummary from './components/OmdbSummary';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
//import Timer from './components/Timer';



class App extends Component {

  state = {
    isLoggedIn: false,
    user: {
      name: "",
      user: {}
    },
    userWidgets: [
      /*       { id: 1, name: News, value: "cnn" },
            { id: 2, name: OmdbSummary, value: "avatar" }, */
      { id: 1, name: News, params: { value: "cnn" } },
      { id: 2, name: OmdbSummary, params: { value: "avatar" } }
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

  setWidgets = (userWidgets) => {
    //reset widgets in user model
  }

  addWidget = (widgetName) => {
    const widget_id = uuid();
    this.setState({ userWidgets: this.state.userWidgets.concat({ id: widget_id, name: widgetName }) })
  }

  updateWidget = (widgetId, confValue) => {
    this.setState(state => {
      const list = state.userWidgets.map((item) => {
        if (item.id === widgetId) {
          return item.params = confValue
        } else {
          return item;
        }
      });

      return (
        { userWidgets: list, },
        console.log(this.state.userWidgets)
      );

    });
  }

  deleteWidget = (widgetId) => {
    this.setState(state => {
      const list = state.userWidgets.filter(item => item.id !== widgetId);
      return {
        userWidgets: list,
      };
    });

  }


  render() {
    return (

      <Router>
        <Header isLoggedIn={this.state.isLoggedIn} user={this.state.user} logout={this.logout} addWidget={this.addWidget} />
        <Route exact path="/">
          <Dashboard widgets={this.state.userWidgets} updateWidget={this.updateWidget} deleteWidget={this.deleteWidget} />
        </Route>
        <Route path="/login" history={this.props.history} >
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
