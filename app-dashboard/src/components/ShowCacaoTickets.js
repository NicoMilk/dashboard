import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

export class ShowCacaoTickets extends Component {
  constructor() {
    super()
    this.state = {
      userId: '',
      userToken: '',
      isLogged: false,
      tickets: [],
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
          this.setState({ tickets: res.data }, function () {
            console.log("user tickets : ", this.state.tickets)
          })
        })
    }
  }

  render() {
    let display

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
                  {ticket.concert_id.bands}<br />
                  {/* TODO toLocaleString not working */}
                  {ticket.concert_id.date.toLocaleString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}<br />
                  {ticket.concert_id.place}
                </p>
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
          <h5 className="text-center p-2 font-weight-bold bg-warning">Show Cacao - Tickets</h5>

          {display}
        </Card >
      </div>
    )
  }
}

export default ShowCacaoTickets
