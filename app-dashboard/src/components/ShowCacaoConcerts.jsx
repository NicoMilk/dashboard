import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

export class ShowCacaoConcerts extends Component {
  constructor() {
    super()
    this.state = {
      concerts: [],
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3002/concerts`)
      .then(res => {
        this.setState({ concerts: res.data })
      })
  }

  render() {
    return (
      <div>
        <Card style={{
          width: '25rem', maxHeight: "300px"
        }
        } className="shadow my-4" >
          <h5 className="text-center p-2 font-weight-bold bg-warning">Show Cacao - Concerts</h5>

          <div className="overflow-auto px-3">
            {
              this.state.concerts.map((concert) => (
                <div /*key={concert._id}*/>
                  <p className="text-center">
                    {concert.bands}<br></br>
                    {concert.place}
                  </p>
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
