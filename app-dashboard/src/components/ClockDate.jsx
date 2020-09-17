import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export class ClockDate extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
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

  render() {
    return (
      <div>
        <Card style={{
          width: '25rem', maxHeight: "300px"
        }
        } className="shadow my-4" >
          <h5 className="text-center p-2 font-weight-bold bg-warning">Date</h5>

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