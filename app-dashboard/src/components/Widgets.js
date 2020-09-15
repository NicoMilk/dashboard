import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Widgets extends Component {
    state = {
        widgets: [
            {
                id: 1,
                name: "Omdb - Actors",
                selected: false,
            },
            {
                id: 2,
                name: "Omdb - Summary",
                selected: false,
            },
            {
                id: 3,
                name: "System - Time",
                selected: false,
            },
            {
                id: 4,
                name: "Google - Maps",
                selected: false,
            },
            {
                id: 5,
                name: "News - Headlines",
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
        return <Accordion defaultActiveKey="0" className="my-3">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-info">
                    Ajouter un widget
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">

                    <Card.Body>
                        {this.state.widgets.map((widget) => (
                            <div className="d-flex flex-wrap p-2" key={widget.id}>
                                <h6 className="mx-2">{widget.name}</h6>
                                <Button variant="outline-success" size="sm">+</Button>
                            </div>))}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    }

    /*             (
                <div style={this.getStyle()}>
                    <h1>{this.props.widget.name}</h1>
                    <p>{this.props.widget.service}</p>
    
                </div>
            ) */

}

/* Widgets.propTypes = {
    widget: PropTypes.object.isRequired
} */

export default Widgets
