import React, { Component } from 'react'
import './Candy.css'

class Candy extends Component {
    componentDidMount() {
        console.log(`componentDidMount -- candy ${this.props.candy.id}`)
    }
    render() {
        console.log(`render -- candy ${this.props.candy.id}`)

        return (
            <div key={this.props.candy.id} className="card">
                <div className="card-body">
                    <section className="card-title">
                        <img src={this.props.candy.img} className="img" />
                        <div>{this.props.candy.name}</div>
                        <div className="ownerList">({this.props.candyTypes.join(", ")})</div>
                        < button
                            onClick={() => this.props.deleteCandy(this.props.candy.id)}
                            className="delete_candy">Delete</button>
                    </section>
                </div>
            </div>
        )
    }
}

export default Candy