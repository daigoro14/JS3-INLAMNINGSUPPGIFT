import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputStyle from '../components/styled/InputStyle'
import HeaderStyle from '../components/styled/HeaderStyle'
import ContentStyle from '../components/styled/ContentStyle'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleOnSubmit(e){
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const payload = {email, password}

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            const token = data.token
            localStorage.setItem("js3-uppgift", token)
            navigate('/home')
        })
    }
    return (
        <div>
            <HeaderStyle>Login</HeaderStyle>
            <ContentStyle>
                <form onSubmit={handleOnSubmit}>
                    <InputStyle
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Email'
                    />
                    <InputStyle
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Password'
                    />
                    <button type="submit">Login</button>
                </form>
                <p>Dont have an account? <Link to="/user/create">Sign up</Link></p>
            </ContentStyle>
        </div>
    )
}
