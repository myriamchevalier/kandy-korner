import React, { useEffect, useState } from 'react';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    
    useEffect(
        () =>{
            fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then(
                (employeeData) => {
                    setEmployees(employeeData)
                }
            )
        },
        []
    )
    
    return(
        <>
            <h2>Employees</h2>
            {
                employees.map(
                    (employeeObject) => {
                        return <div>
                            <p>{employeeObject.name}</p>
                            <p>{employeeObject.manager? "Manager at": "Employee at"}</p>
                            <p>{employeeObject.location.name}</p>
                        </div>
                    }
                )
            }
        
        </>
    )
}