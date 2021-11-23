import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            fetch('http://localhost:8088/employees')
                .then(res => res.json())
                .then(
                    (employees) => {
                        setEmployees(employees)
                    }
                )
        },
        []
    )


    return (
        <>
            {
                employees.map(
                    (employee) => {
                        return <p key={employee.id}>{employee.name}</p>
                    }
                )
            }
            <div className="newEmployee">
                <button onClick={() => history.push("/employees/create")}>Add new employee</button>
            </div>
        </>
    )
}