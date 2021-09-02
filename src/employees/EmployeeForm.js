import { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const EmployeeHireForm = () => {
    const [ employee, hireEmployee] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        locationId: 0,
        isManager: false,
        isFullTime: false,
        hourlyWage: 0

    })
    const [employeeLocations, setEmployeeLocations] = useState([]) 
    const history = useHistory()
    
    useEffect(
        () => {
            fetch("http://localhost:8088/locations") 
            .then(res => res.json())
            .then(
                (employeeLocationData) => {
                    setEmployeeLocations(employeeLocationData)
                })
        },[]
    )

    const saveNewEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            address: employee.address,
            phoneNumber: employee.phoneNumber,
            locationId: employee.locationId,
            isManager: false,
            isFullTime: false,
            hourlyWage: employee.hourlyWage
        }
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        fetch("http://localhost:8088/employees?_expand=location", fetchOptions)
        .then(res => res.json())
        .then(
            () => {
                history.push("/employees")
            }
        )
    }

    return (
        <>
            <h2>New Employee</h2>
            <fieldset className="employeeForm">
                <div className="form-group"> 
                    <label htmlFor="name">Name: </label>
                    <input 
                        required autoFocus
                        type="text" 
                        className="form-control" 
                        placeholder="Full name"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                hireEmployee(copy)
                            }
                        } />
                </div>
                <div className="form-group"> 
                    <label htmlFor="address">Address: </label>
                    <input 
                        required
                        type="text" 
                        className="form-control" 
                        placeholder="Street address"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.address = event.target.value
                                hireEmployee(copy)
                            }
                        } />
                </div>
                <div className="form-group"> 
                    <label htmlFor="phone">Phone number: </label>
                    <input 
                        required
                        type="text" 
                        className="form-control" 
                        placeholder="000-000-0000"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.phoneNumber = event.target.value
                                hireEmployee(copy)
                            }
                        } />
                </div>
                <div className="form-group"> 
                    <label htmlFor="location">Location: </label>
                    <select name="location" id="location"
                    onChange={
                        (event) => {
                            const copy = {...employee}
                            copy.locationId = parseInt(event.target.value)
                            hireEmployee(copy)
                        }
                    }>
                        <option value="employeeLocation--0">Choose a location...</option>
                        {employeeLocations.map((employeeLocation) => 
                        <option value={employeeLocation.id}
                        >{employeeLocation.name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="manager">Manager?</label>
                    <input type="checkbox" id="manager"
                    onChange={
                        (event) => {
                            const copy = {...employee}
                            copy.isManager = event.target.checked
                            hireEmployee(copy)
                        }
                    }/>
                </div>
                <div className="form-group">
                    <label htmlFor="fullTime">Full-Time?</label>
                    <input type="checkbox" id="fullTime"
                    onChange={
                        (event) => {
                            const copy = {...employee}
                            copy.isFullTime = event.target.checked
                            hireEmployee(copy)
                        }
                    }/>       
                </div>
                <div className="form-group">
                    <label htmlFor="hourlyWage">Hourly Wage</label>
                    <input 
                    required
                    type="text" className="form-control" placeholder="0"
                    onChange={
                        (event) => {
                            const copy = {...employee}
                            copy.hourlyWage = parseInt(event.target.value)
                            hireEmployee(copy)
                        }
                    }/>
                </div>
            </fieldset>
            <button className="button__hireForm"
            onClick={saveNewEmployee}>
                Hire Employee
            </button>
        </>
    )
}