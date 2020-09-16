import React, { Component } from 'react'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form'

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
        // this.setState({ news: res.data.articles })
        console.log(res)
      })
  }

  render() {
    return (
      <div>
        <Card style={{
          width: '25rem', maxHeight: "300px"
        }
        } className="shadow my-4" >
          <Accordion >
            <h5 className="text-center p-2 font-weight-bold bg-warning">Show Cacao</h5>


            {/* <Accordion.Collapse eventKey="0"> */}

            <div className="d-flex flex-row p-3 align-items-start">
              {/* <Form.Control value={this.state.value} onChange={this.handleChange} as="select" custom>
                <option >Choisir une source</option>
                <option value="buzzfeed">Buzz Feed</option>
                <option value="cnn">CNN</option>
                <option value="google-news-fr">Google news</option>
                <option value="le-monde">Le Monde</option>
                <option value="lequipe">L'équipe</option>
                <option value="les-echos">Les Echos</option>
                <option value="national-geographic">National Geographic</option>
                <option value="reuters">Reuters</option>
              </Form.Control> */}
              <button onClick={this.handleSubmit} className="btn-dark">OK</button>
            </div>
            {/* </Accordion.Collapse> */}
          </Accordion>
          {/* <div className="overflow-auto px-3">
            {
              this.state.news.map((article) => (
                <div >
                  <p className="text-center">
                    {article.title} -
                                    <a href={article.url} className=" btn-sm btn-info">Lire</a>
                  </p>
                </div>
              ))
            }
          </div> */}
        </Card >
      </div>
    )
  }
}

export default ShowCacaoConcerts
