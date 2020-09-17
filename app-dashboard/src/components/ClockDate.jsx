import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icon from 'react-bootstrap-icons';

export class ClockDate extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      color: 'yellow'
    }
    this.timer = null
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({
        date: new Date()
      })
    })
  }

  setColor = (e) => {
    this.setState({ color: e.target.value }, function () {
    })
  }

  reload() {
    this.componentDidMount();
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
            <h5 className={"text-center p-2 font-weight-bold " + color}>Date</h5>
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


          <div className="text-center overflow-auto px-3">
            {
              <h4>{this.state.date.toLocaleString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</h4>
            }
          </div>
        </Card >
      </div>
    )
  }
}

export default ClockDate