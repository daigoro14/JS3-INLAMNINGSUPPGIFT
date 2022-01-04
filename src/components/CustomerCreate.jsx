import React, { useState } from 'react'
import Button from './styled/ButtonStyle'
import InputStyle from './styled/InputStyle'

export default function CustomerCreate(props) {
    const [name, setName] = useState('')
    const [organisationNr, setOrganisationNr] = useState('')
    const [vatNr, setVatNr] = useState('')
    const [reference, setReference] = useState('')
    const [paymentTerm, setPaymentTerm] = useState('')
    const [website, setWebsite] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    function handleOnSubmit(e) {
        e.preventDefault()
        if (props.id){
            const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}`
            const payload = {name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber}
            const token = localStorage.getItem('js3-uppgift')
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            fetch(url, {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(data => props.onSuccess())
        } else{
            const url = 'https://frebi.willandskill.eu/api/v1/customers/'
            const payload = {name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber}
            const token = localStorage.getItem('js3-uppgift')
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(data => props.onSuccess())
        }
    }
    return (
        <div>
            <b>Create Customer</b>
            <form onSubmit ={handleOnSubmit}>
                <InputStyle 
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                />

                <InputStyle 
                    placeholder="Organisation Number"
                    value={organisationNr}
                    onChange={e => setOrganisationNr(e.target.value)} 
                />

                <InputStyle 
                    placeholder="Vat Number"
                    value={vatNr}
                    onChange={e => setVatNr(e.target.value)}
                    pattern="SE\d{10}" 
                    required
                    title="Must start with SE and follow up with 10 digits" 
                />  

                <InputStyle 
                    placeholder="Reference"
                    value={reference}
                    onChange={e => setReference(e.target.value)} 
                />  

                <InputStyle
                    placeholder="Payment Term"
                    value={paymentTerm}
                    onChange={e => setPaymentTerm(e.target.value)}
                    pattern="\d{1,}"
                    required
                    title="This field requires at least 1 digit"
                />  

                <InputStyle
                    placeholder="Website"
                    value={website}
                    onChange={e => setWebsite(e.target.value)} 
                />  

                <InputStyle
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />  

                <InputStyle
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)} 
                />  
                <Button type="submit">Create Customer</Button>
            </form>
        </div>
    )
}
