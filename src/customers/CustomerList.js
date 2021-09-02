import { useEffect, useState } from "react"

export const Customers = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(
                (customersData) => {
                    setCustomers(customersData)
                }
            )
        },
        []
    )
    
    
    return (
        <>
        <h2>Customers</h2>
            {customers.map((customer) => {
                return <div key={customer.id}>
                    <p>{customer.name}</p>
                    <p>{customer.email}</p>
                </div> 
             })}
    </>
)
}