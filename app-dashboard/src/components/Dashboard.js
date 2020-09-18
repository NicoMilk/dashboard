import React, { Component } from 'react';
//import Widgets from './Widgets'
import PropTypes from 'prop-types'
//import axios from 'axios';
/* import OmdbSummary from './OmdbSummary';
import OmdbActors from './OmdbActors';
import News from './News';
import MapContainer from './Map';*/

class Dashboard extends Component {

  render() {

    return (<div className="d-flex flex-row flex-wrap justify-content-around align-self-start">
      {this.props.widgets.map((widget) => {

        return (
          <div key={widget.id}>
            {widget.cmp}
          </div>)
      })
      }

    </div>)
  }
}



Dashboard.propTypes = {
  widgets: PropTypes.array.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  updateWidget: PropTypes.func.isRequired,
}

export default Dashboard;