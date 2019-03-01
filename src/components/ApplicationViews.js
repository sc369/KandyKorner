import { Route } from 'react-router-dom'
import React, { Component } from "react"
import CandyList from './candy/CandyList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'


export default class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        candies: [],
        candyTypes: [],
        candyTypeLookup: []
    }

    deleteCandy = id => {
        return fetch(`http://localhost:8088/candies/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch(`http://localhost:8088/candies`))
            .then(e => e.json())
            .then(candies => this.setState({
                candies: candies
            })
            )
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:8088/candies")
            .then(r => r.json())
            .then(candies => newState.candies = candies)
            .then(() => fetch("http://localhost:8088/employees")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:8088/locations")
                .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:8088/candyTypes")
                .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => fetch("http://localhost:8088/candyTypeLookup")
                .then(r => r.json()))
            .then(candyTypeLookup => newState.candyTypeLookup = candyTypeLookup)

            .then(() => this.setState(newState))
    }
    render() {
        return (
            <React.Fragment>
                <Route exact path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies}
                        deleteCandy={this.deleteCandy}
                        candyTypeLookup={this.state.candyTypeLookup}
                        candyTypes={this.state.candyTypes} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}
