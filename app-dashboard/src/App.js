import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Widgets from './components/Widgets';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {

  }



  render() {
    return (
      <div className="App">
        <div className="container md-col-10 d-flex justify-content-start">
          <div style={{ width: '30%', minWidth: '250px' }} >
            <Widgets />
          </div>
          <Dashboard />
        </div>

      </div>
    );
  }
}

export default App;
