import React, { useEffect, useState } from 'react';
import "./EmployeeList.css";

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
                <article className="employees">
                {
                    employees.map(
                        (employeeObject) => {
                            return <div key={`employee--${employeeObject.id}`} className="employee">
                                <p className="employee__name">{employeeObject.name}</p>
                                <p className="employee__type">{employeeObject.isManager? "Manager at": "Employee at"}</p>
                                <p className="employee__location">{employeeObject.location.name}</p>
                            </div>
                        }
                    )
                }
                </article>
                        
        </>
    )
}