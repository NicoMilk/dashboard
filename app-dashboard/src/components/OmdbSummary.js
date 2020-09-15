import React, { Component } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card';

class OmdbSummary extends Component {
    state = {
        value: '',
        movie: {},
    }

    handleSubmit = (e) => {
        axios.get(`http://www.omdbapi.com/?apikey=89e82fd&t=${this.state.value}`)
            .then(res => {
                if (res.data.Response !== "False") {
                    console.log(res.data)
                    this.setState({ movie: res.data });
                } else {
                    this.setState({ movie: { Title: "Not Found", Plot: "pas de résultats pour cette recherche" } });
                }

            })
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }


    render() {
        return (
            <Card style={{ width: '25rem' }} className="shadow my-4">
                <h5 className="text-center p-2 font-weight-bold bg-warning">Synopsis de film</h5>
                <div className="p-2">
                    <div>
                        <input type="text" name="search" value={this.state.value} onChange={this.handleChange} />
                        <button onClick={this.handleSubmit} className="btn-dark">OK</button>
                    </div>
                    < div >
                        <h1>{this.state.movie.Title}</h1>
                        <h6>Movie Summary</h6>
                        <p>{this.state.movie.Plot}</p>
                    </div >
                </div>

            </Card>
        )
    }
}

export default OmdbSummary;