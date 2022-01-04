import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CustomerContext } from '../App'
import CustomerCreate from '../components/CustomerCreate'

export default function CustomerDetailPage() {
    const params = useParams()
    const arrayIndex = params.id
    const {customerList} = useContext(CustomerContext)
    const navigate =  useNavigate()

    
    const token = localStorage.getItem("js3-uppgift")


    function handleOnDelete(customer){
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customer.id}/`
        console.log(customer.id)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        fetch(url, {
            method: "DELETE",
            headers: headers
        })
        .then(() => {
            navigate("/home")
        }) 
    }


    return (
        <div>
            <button onClick={() => handleOnDelete(customerList[arrayIndex])}>
                Delete this Customer
            </button>
            <CustomerCreate id={customerList[arrayIndex].id}/>
            <p>{customerList[arrayIndex].name}</p>
            <p>{customerList[arrayIndex].organisationNr}</p>
            <p>{customerList[arrayIndex].vatNr}</p>
            <p>{customerList[arrayIndex].reference}</p>
            <p>{customerList[arrayIndex].paymentTerm}</p>
            <p>{customerList[arrayIndex].website}</p>
            <p>{customerList[arrayIndex].setEmail}</p>
            <p>{customerList[arrayIndex].phoneNumber}</p>
        </div>
    )
}
