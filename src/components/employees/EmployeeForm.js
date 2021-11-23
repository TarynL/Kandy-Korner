import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({

        manager: false,
        fullTime: false

    });
    const [locations, setLocations] = useState([])
    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        })
            .then(() => {
                history.push("/employees")
            })

    }

    useEffect(
        () => {
            fetch('http://localhost:8088/locations')
                .then(res => res.json())
                .then(
                    (locations) => {
                        setLocations(locations)
                    }
                )
        },
        []
    )

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full name..."
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.name = event.target.value
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <select
                        required
                        className="form-control"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.locationId = parseInt(event.target.value)
                                updateEmployee(copy)
                            }
                        } >
                        <option value="0">Choose a location...</option>
                        {
                            locations.map(
                                (location) => {
                                    return <option key={location.id} value={location.id}>{location.name}</option>
                                }
                            )
                        }

                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.manager = event.target.checked
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">FullTime:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.fullTime = event.target.checked
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Hourly Rate"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.hourlyRate = parseInt(event.target.value)
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Save Employee
            </button>
        </form>
    )
}
