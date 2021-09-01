import { useEffect, useState } from "react"
import { useHistory } from "react-router"
// Form for user to hire employees
// Create a form for hiring employees. You must be able to choose a location when filling out the form. An employee should have the following information provided.
// Name (string)
// Location (foreign key)
// Manager (boolean) (i.e. Is this employee a manager or not?)
// Full time (boolean)
// Hourly rate (number)
// address 
// phone number
// Once the user fills out the form, a new employee object representation should be created, then use fetch to POST that object to your database. When the saving process is complete, redirect the user to the /employee route to see a list of all employees.

export const EmployeeHireForm = () => {
    const [employee, updateEmployee] = useState([])
    const [employeeLocations, setEmployeeLocations] = useState([]) 
    // const history = useHistory()
    
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(
                (employeeData) => {
                    updateEmployee(employeeData)
                }
            )
            fetch("http://localhost:8088/locations") 
            .then(res => res.json())
            .then(
                (employeeLocationData) => {
                    setEmployeeLocations(employeeLocationData)
                })
        },[]
    )

    // const saveEmployee = (event) => {
    //     event.preventDefault()
    //     const newEmployee = {
    //         name: employee.name,
    //         specialty: employee.specialty
    //     }
    //     const fetchOptions = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         }, 
    //         body: JSON.stringify(newEmployee)
    //     }
    //     fetch("http://localhost:8088/employees", fetchOptions)
    //     .then(res => res.json())
    //     .then(
    //         () => history.push("/employees")
    //          )
    // }



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
                        placeholder="Full name" />
                </div>
                <div className="form-group"> 
                    <label htmlFor="address">Address: </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Street address" />
                </div>
                <div className="form-group"> 
                    <label htmlFor="phone">Phone number: </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Phone number" />
                </div>
                <div className="form-group"> 
                    <label htmlFor="location">Location: </label>
                    <select name="location" id="location">
                        <option value="employeeLocation--0">Choose a location...</option>
                        {employeeLocations.map((employeeLocation) => 
                        <option value={`location--${employeeLocation.id}`} key={`location--${employeeLocation.id}`}>{employeeLocation.name}</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="manager">Manager?</label>
                    <input type="checkbox" id="manager"/>
                </div>
                <div className="form-group">
                    <label htmlFor="fullTime">Full-Time?</label>
                    <input type="checkbox" id="fullTime"/>       
                </div>
                <div className="form-group">
                    <label htmlFor="hourlyWage">Hourly Wage</label>
                    <input type="text" className="form-control" placeholder="0"/>
                </div>
            </fieldset>
        
        
        
        </>
    )
}