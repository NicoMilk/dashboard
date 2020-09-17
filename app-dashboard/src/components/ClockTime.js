import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';

export class ClockTime extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      showSeconds: true,
      color: 'warning'
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

  handleChange = (e) => {
    this.setState({ showSeconds: e.target.checked })
  }

  setColor = (e) => {
    this.setState({ color: e.target.value }, function () {
    })
  }


  render() {
    let display
    let color

    if (this.state.showSeconds) {
      display = <h4>{this.state.date.toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</h4>
    } else {
      display = <h4>{this.state.date.toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</h4>
    }

    this.state.color === 'warning' ? color = <h5 className="text-center p-2 font-weight-bold bg-warning">Time</h5> : color = <h5 className="text-center p-2 font-weight-bold bg-info">Time</h5>

    return (
      <div>
        <Card style={{
          width: '25rem', maxHeight: "300px"
        }
        } className="shadow my-4" >
          {/* <h5 className="text-center p-2 font-weight-bold bg-"{this.state.color}>Time</h5> */}
          {color}

          <div className="text-center overflow-auto px-3">
            {
              // <h4>{this.state.date.toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</h4>
            }
            {display}
            {/* <Form.Group> */}
            <Form.Check type="checkbox" label="Seconds" onChange={this.handleChange} defaultChecked />
            <Form.Check type="radio" name="color" value="warning" label="Yellow" onClick={this.setColor} defaultChecked />
            <Form.Check type="radio" name="color" value="info" label="Blue" onClick={this.setColor} />
            {/* </Form.Group> */}
          </div>
        </Card >
      </div>
    )
  }
}

export default ClockTime