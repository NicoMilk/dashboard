import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserApi from './apis/User.js'
//import News from './components/News';
//import OmdbSummary from './components/OmdbSummary';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import WidgetApi from './apis/Widget.js'
//import Timer from './components/Timer';



class App extends Component {

  state = {
    isLoggedIn: false,
    user: {
      name: ""
    },
    userId: "",
    userWidgets: [],
    widgets: []
  }


  async componentDidMount() {

    const token = await localStorage.getItem("token");
    if (token) {
      const auth = await UserApi.auth();
      const rawWidgets = await WidgetApi.getWidgets();
      auth.data.widgets.map(async wid => await this.addComponent(wid));
      this.setState({ user: auth.data, isLoggedIn: true, widgets: rawWidgets.data });
    }
  }

  addComponent = async widget => {
    const { componentName } = widget;
    import(`./components/${componentName}.js`)
      .then(Component => {
        widget.cmp = (<Component.default key={widget.id} value={widget.value} id={widget.id} deleteWidget={this.deleteWidget} />);
        this.setState({ userWidgets: this.state.userWidgets.concat(widget) });
      })
      .catch(error => {
        console.error(`"${componentName}" not yet supported`);
      });
  };

  logUser = token => {
    localStorage.setItem("token", token);
    UserApi.auth()
      .then(response => {
        this.setState({ user: response.data, isLoggedIn: true })
      })
      .catch(error => {
        console.log(error)
      });
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ user: { name: "", widgets: [] }, isLoggedIn: false })
  }

  //recupère les widget de la db
  getWidgets = () => {
    const token = localStorage.getItem("token");
    if (token) {
      UserApi.auth()
        .then((response) => {

          this.setState({ userWidgets: response.data.widgets, isLoggedIn: true, userId: response.data.id })
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
  addWidget = widgetName => {
    console.log(widgetName);
    const widget = {
      id: uuid(),
      name: widgetName,
      componentName: widgetName,
      value: "",
    }
    console.log(`Loading ${widget.componentName} component...`, widget);
    import(`./components/${widget.componentName}.js`)
      .then(Component => {
        widget.cmp = (<Component.default key={widget.id} value={widget.value} id={widget.id} deleteWidget={this.deleteWidget} />);
        this.setState({ userWidgets: this.state.userWidgets.concat(widget) });
      })
      .catch(error => {
        console.error(`"${widget.componentName}" not yet supported`);
      });
  }

  deleteWidget = widgetId => {

    console.log(this.state.userWidgets);
    console.log("deleting...", widgetId);

    const userWidgets = (state) => {
      const list = state.userWidgets.filter(item => item.id !== widgetId);
      console.log(list);
      return list;

    };

    this.setState({ userWidgets: userWidgets(this.state) });
    console.log(this.state.userWidgets, userWidgets(this.state));
  }


  render() {
    return (

      <Router>
        <Header isLoggedIn={this.state.isLoggedIn} user={this.state.user} widgets={this.state.widgets} logout={this.logout} addWidget={this.addWidget} />
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
