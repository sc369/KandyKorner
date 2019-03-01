import React, { Component } from 'react'
import "../components.css"

class EmployeeList extends Component {
    render() {
        console.log(this.props.candyTypes)
        return (
            <section className="employees output">
                <h1>Employees</h1>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList