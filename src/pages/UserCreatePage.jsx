import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import ContentStyle from '../components/styled/ContentStyle'
import HeaderStyle from '../components/styled/HeaderStyle'
import Inputstyle from '../components/styled/InputStyle'

export default function UserCreatePage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [organisationKind, setOrganisationKind] = useState('')

    function renderInput(type, value, setValue, placeholder) {
        return (
            <Inputstyle 
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        )
    }

    function handleOnSubmit(e){
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/auth/users/"
        const payload = {
            email,
            password,
            organisationKind,
            name: "daigoro persson"
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <>
            <HeaderStyle>Create User</HeaderStyle>
            <ContentStyle>
                <form onSubmit={handleOnSubmit}>
                    {renderInput ("text", email, setEmail, "Email")}
                    {renderInput ("password", password, setPassword, "Password")}
                    {renderInput ("text", organisationKind, setOrganisationKind, "Organisation Kind")}
                    <button type="submit">Create User</button>
                </form>
                <br />
                <p>Already Have an account? <Link to="/login">Sign in</Link> </p>
            </ContentStyle>
        </>
    )
}
