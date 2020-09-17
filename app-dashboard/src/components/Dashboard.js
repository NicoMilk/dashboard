import React, { Component } from 'react';
//import Widgets from './Widgets'
import PropTypes from 'prop-types'
//import axios from 'axios';
/* import OmdbSummary from './OmdbSummary';
import OmdbActors from './OmdbActors';
<<<<<<< HEAD
import News from './News'; */

class Dashboard extends Component {

    render() {

        return <div className="d-flex flex-row flex-wrap justify-content-around align-self-start">
            {this.props.widgets.map((widget) => {
                const NewTag = widget.name
                return (
                    <div key={widget.id}>
                        <NewTag value={widget.value} id={widget.id} deleteWidget={this.props.deleteWidget} />
                    </div>

                )
            }
            )}

        </div>


    }
=======
import News from './News';
import ClockTime from './ClockTime';
import ClockDate from './ClockDate';

class Dashboard extends Component {

  render() {
    return (
      <div className="d-flex flex-row flex-wrap justify-content-around align-self-start">
        <OmdbSummary />
        <OmdbActors />
        <News />
        <ClockTime />
        <ClockDate />
      </div>

    )
  }
>>>>>>> clock
}



Dashboard.propTypes = {
    widgets: PropTypes.array.isRequired,
    deleteWidget: PropTypes.func.isRequired
}

export default Dashboard;