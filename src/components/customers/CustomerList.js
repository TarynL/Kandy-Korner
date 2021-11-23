import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            fetch('http://localhost:8088/customers')
                .then(res => res.json())
                .then(
                    (customers) => {
                        setCustomers(customers)
                    }
                )
        },
        []
    )


    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <p key={customer.id}>{customer.name}</p>
                    }
                )
            }

        </>
    )
}