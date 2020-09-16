import React, { Component } from 'react';
//import Widgets from './Widgets'
//import PropTypes from 'prop-types'
//import axios from 'axios';
import OmdbSummary from './OmdbSummary';
import OmdbActors from './OmdbActors';
import News from './News';
import ShowCacaoTickets from './ShowCacaoTickets';

class Dashboard extends Component {

  render() {
    return (
      <div className="d-flex flex-row flex-wrap justify-content-around align-self-start">
        <OmdbSummary />
        <OmdbActors />
        <News />
        <ShowCacaoTickets />
      </div>

    )
  }
}



/* Dashboard.propTypes = {
    widgets: PropTypes.array
} */

export default Dashboard;