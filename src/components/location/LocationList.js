import React, { Component } from 'react'
import "../components.css"


class LocationList extends Component {
    render() {
        return (
            <section className="locations output">
                <h1>Locations</h1>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            {location.name}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default LocationList