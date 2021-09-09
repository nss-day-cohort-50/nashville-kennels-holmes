import React, { useState, useEffect } from "react"
import Employee from "./Employee"
import EmployeeRepository from "../../repositories/EmployeeRepository"
import "./EmployeeList.css"


export default () => {
    const [emps, setEmployees] = useState([])
//This below was changed from get All to testLocation
    useEffect(
        () => {
            EmployeeRepository.testLocation().then(data => {
                setEmployees(data)
            })
        }, []
    )

    return (
        <>
            <div className="employees">
                {
                    emps.map(employee => <Employee key={employee.id} employee={employee} />)
                }
            </div>
        </>
    )
}


