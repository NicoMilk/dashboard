import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icon from 'react-bootstrap-icons';

export class ShowCacaoTickets extends Component {
  constructor() {
    super()
    this.state = {
      userId: '',
      userToken: '',
      isLogged: false,
      tickets: [],
      color: 'yellow',
    }
  }

  componentDidMount = () => {
    if (this.state.isLogged) {
      const tokenBearer = 'Bearer ' + this.state.userToken
      axios.get(`http://localhost:3002/tickets/user/${this.state.userId}`, { 'headers': { 'Authorization': tokenBearer } })
        .then(res => {
          this.setState({ tickets: res.data })
        })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.userId && this.state.userToken) {
      const tokenBearer = 'Bearer ' + this.state.userToken
      axios.get(`http://localhost:3002/tickets/user/${this.state.userId}`, { 'headers': { 'Authorization': tokenBearer } })
        .then(res => {
          this.setState({ isLogged: true })
          this.setState({ tickets: res.data })
        })
    }
  }

  setColor = (e) => {
    this.setState({ color: e.target.value })
  }

  render() {
    let color
    let display

    // choose background color
    if (this.state.color === 'yellow') {
      color = 'bg-warning'
    }
    if (this.state.color === 'blue') {
      color = 'bg-info'
    }

    //!logged = login form - logged = user's ticket list
    if (!this.state.isLogged) {
      display =
        <div className="d-flex flex-row p-3 align-items-start">
          <Form>
            <Form.Control type="text" name="userId" placeholder="UserID" onChange={this.handleChange} />
            <Form.Control type="text" name="userToken" placeholder="Token" onChange={this.handleChange} />
            <br />
            <button onClick={this.handleSubmit} className="btn-dark">OK</button>
          </Form>
        </div>
    } else {
      display =
        <div className="overflow-auto px-3">
          {
            this.state.tickets.map((ticket) => (
              <div>
                <p className="text-center">
                  {ticket.concert_id.bands.join(' - ')}<br />
                  {new Date(ticket.concert_id.date).toLocaleString('fr-FR', { year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' })}<br />
                  {ticket.concert_id.place}
                </p>
                <hr />
              </div>
            ))
          }
        </div>
    }

    return (
      <div>
        <Card style={{
          width: '25rem', maxHeight: "300px"
        }
        } className="shadow my-4" >
          <div className={color + " d-flex justify-content-between p-2"}>
            <h5 className={"text-center p-2 font-weight-bold " + color}>Show Cacao - Tickets</h5>
            <Dropdown className="ml-auto mr-1">
              <Dropdown.Toggle id="dropdown-basic">
                <Icon.Tools className="" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Form.Check type="radio" name="color" value="yellow" label="Yellow" onClick={this.setColor} checked={this.state.color === 'yellow'} />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Form.Check type="radio" name="color" value="blue" label="Blue" onClick={this.setColor} checked={this.state.color === 'blue'} />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href=""><Icon.XSquareFill onClick={this.props.deleteWidget.bind(this, this.props.id)} color="red" size={30} className="" /></a>
          </div>
          <div className="overflow-auto px-3">
            {display}
          </div>
        </Card >
      </div>
    )
  }
}

export default ShowCacaoTickets
