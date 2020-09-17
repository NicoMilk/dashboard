import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; */
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import OmdbSummary from './OmdbSummary';
import OmdbActors from './OmdbActors';
import ClockDate from './ClockDate';
import ClockTime from './ClockTime';
import News from './News';

export class Widgets extends Component {
  state = {
    widgets: [
      {
        id: 1,
        compName: OmdbActors,
        name: "Omdb - Actors",
        selected: false,
      },
      {
        id: 2,
        compName: OmdbSummary,
        name: "Omdb - Summary",
        selected: false,
      },
      {
        id: 5,
        compName: News,
        name: "News - Headlines",
        selected: false,
      },
      {
        id: 90,
        compName: ClockDate,
        name: "Clock - Date",
        selected: false,
      },
      {
        id: 91,
        compName: ClockTime,
        name: "Clock - Time",
        selected: false,
      },
    ],
  }

  getStyle = () => {
    return {
      backgroundColor: this.props.widgets.selected ? '#1D99BB' : '#BB1D85',
      padding: '20px'
    }
  }

  render() {
    return <DropdownButton variant="success" id="dropdown-basic-button" title="Ajouter un widget">
      {this.state.widgets.map((widget) => (
        <div className="" key={widget.id}>
          <Dropdown.Item onClick={this.props.addWidget.bind(this, widget.compName)}>{widget.name}</Dropdown.Item>
        </div>))}
    </DropdownButton>

    /*             
        /* <Accordion defaultActiveKey="0" className="my-3"> 
        <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-info">
                        Ajouter un widget
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
    
                        <Card.Body>
                            {this.state.widgets.map((widget) => (
                                <div className="d-flex flex-wrap p-2" key={widget.id}>
                                    <h6 className="mx-2">{widget.name}</h6>
                                    <Button variant="outline-success" size="sm" onClick={this.}>+</Button>
                                </div>))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card> */
    /* </Accordion> */
  }



}

Widgets.propTypes = {
  addWidget: PropTypes.func.isRequired
}

export default Widgets
