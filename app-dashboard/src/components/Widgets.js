import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import OmdbSummary from './OmdbSummary';
import OmdbActors from './OmdbActors';
import OmdbPoster from './OmdbPoster';
import News from './News';
import ClockDate from './ClockDate';
import ClockTime from './ClockTime';
import ShowCacaoConcerts from './ShowCacaoConcerts';
import ShowCacaoTickets from './ShowCacaoTickets';

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
                id: 8,
                compName: OmdbPoster,
                name: "Omdb - Poster",
                selected: false,
            },
            {
                id: 3,
                compName: News,
                name: "News - Headlines",
                selected: false,
            },
            {
                id: 4,
                compName: ClockDate,
                name: "Clock - Date",
                selected: false,
            },
            {
                id: 5,
                compName: ClockTime,
                name: "Clock - Time",
                selected: false,
            },
            {
                id: 6,
                compName: ShowCacaoConcerts,
                name: "ShowCacao - Concerts",
                selected: false,
            },
            {
                id: 7,
                compName: ShowCacaoTickets,
                name: "ShowCacao - Tickets",
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
    }



}

Widgets.propTypes = {
    addWidget: PropTypes.func.isRequired
}

export default Widgets
