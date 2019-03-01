import React, { Component } from 'react'
import "../components.css"
import Candy from './Candy'

class CandyList extends Component {

    render() {
        return (
            <article className="candies output" >
                {this.props.candies.map(candy =>
                    <Candy key={`candy--${candy.id}`}
                        candy={candy}
                        deleteCandy={this.props.deleteCandy}
                        candyTypes={
                            this.props.candyTypeLookup
                                .filter(CTL => CTL.candyId === candy.id)
                                .map(filteredCTL =>
                                    this.props.candyTypes.find(
                                        candyType => candyType.id === filteredCTL.typeId
                                    ).name
                                )
                        } />


                )}
            </article >
        )
    }
}
export default CandyList





{/* < button>
                                    onClick={() => this.props.deleteCandy(candy.id)}
                                    className="delete_candy">Delete</button> */}
{/* {
                                this.props.candyTypeLookup
                                    .filter(CTL => CTL.candyId === candy.id)
                                    .map(filteredCTL =>
                                        <span>
                                            {
                                                this.props.candyTypes.find(
                                                    candyType => candyType.id === filteredCTL.typeId
                                                ).name
                                            }
                                        </span>
                                    )
                            } */}
