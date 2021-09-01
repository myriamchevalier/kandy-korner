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



    return (
        <>
            <h2>New Employee</h2>
            <fieldset className="employeeForm">
                <div className="form-group"> 
                    <label for="name">Name: </label>
                    <input 
                        required autoFocus
                        type="text" 
                        className="form-control" 
                        placeholder="Full name" />
                </div>
                <div className="form-group"> 
                    <label for="address">Address: </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Street address" />
                </div>
                <div className="form-group"> 
                    <label for="phone">Phone number: </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Phone number" />
                </div>
                <div className="form-group"> 
                    <label for="location">Location: </label>
                    <select name="location" id="location"/>
                        <option value="location--0">Choose a location...</option>
                        {locations.map((location) => 
                        `<option value="location--${location.id}">${location.name}</option>`
                        )}
                </div>

            </fieldset>
        
        
        
        </>
    )
}