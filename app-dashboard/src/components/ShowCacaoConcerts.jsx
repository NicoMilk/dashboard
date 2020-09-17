import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icon from 'react-bootstrap-icons';

export class ShowCacaoConcerts extends Component {
  constructor() {
    super()
    this.state = {
      concerts: [],
      color: 'yellow',
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3002/concerts`)
      .then(res => {
        this.setState({ concerts: res.data })
      })
  }

  setColor = (e) => {
    this.setState({ color: e.target.value })
  }

  render() {
    let color

    // choose background color
    if (this.state.color === 'yellow') {
      color = 'bg-warning'
    }
    if (this.state.color === 'blue') {
      color = 'bg-info'
    }

    return (
      <div>
        <Card style={{
          width: '25rem', maxHeight: "300px"
        }
        } className="shadow my-4" >
          <div className={color + " d-flex justify-content-between p-2"}>
            <h5 className={"text-center p-2 font-weight-bold " + color}>Show Cacao - Concerts</h5>
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
            {
              this.state.concerts.map((concert) => (
                <div /*key={concert._id}*/>
                  <p className="text-center">
                    {concert.bands.join(' - ')}<br />
                    {concert.place}<br />
                    {new Date(concert.date).toLocaleString('fr-FR', { year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' })} - {concert.price + "€"}
                  </p>
                  <hr />
                </div>
              ))
            }
          </div>
        </Card >
      </div>
    )
  }
}

export default ShowCacaoConcerts
