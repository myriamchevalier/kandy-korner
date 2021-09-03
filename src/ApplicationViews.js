import React from "react"
import { Route } from "react-router-dom"
import { Customers } from "./customers/CustomerList"
import { EmployeeHireForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"

export const ApplicationViews = () => {
    return (
        <>

        
            <Route path="/locations">
                <LocationList/>
            </Route>

            <Route path="/products">
                <ProductList/>
            </Route>

            <Route exact path="/employees">
                <EmployeeList/>
            </Route>

            <Route path="/employees/create">
                <EmployeeHireForm/>
            </Route>

            <Route path="/customers">
                <Customers />
            </Route>

            
        </>
    )
}