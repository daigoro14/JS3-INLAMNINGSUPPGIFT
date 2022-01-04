import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomerCreate from '../components/CustomerCreate'
import { CustomerContext } from '../App'
import HeaderStyle from '../components/styled/HeaderStyle'
import ContentStyle from '../components/styled/ContentStyle'
import styled from 'styled-components'

const UserInfoDiv = styled.div`
    position: absolute;
    float:left
`

export default function HomePage(props) {
    const [userInfo, setUserInfo] = useState('')
    const {customerList, setCustomerList} = useContext(CustomerContext)

    useEffect(() => {
        fetchData()
        fetchDataUser()
    }, [])

    function fetchData() {
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("js3-uppgift")
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setCustomerList(data.results))
    }

    function fetchDataUser() {
        const url = "https://frebi.willandskill.eu/api/v1/me"
        const token = localStorage.getItem("js3-uppgift")
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setUserInfo(data))
    }

    return (
        <div>
            {userInfo && (
                <>
                    <HeaderStyle>Welcome, {userInfo.firstName}</HeaderStyle>
                    <UserInfoDiv>
                        <p>Firstname: {userInfo.firstName}</p>
                        <p>Lastname: {userInfo.lastName}</p>
                        <p>Email: {userInfo.email}</p>
                    </UserInfoDiv>
                </>
            )}
            <ContentStyle>
                <CustomerCreate onSuccess={fetchData}/>
                <br />
                <h2>Customers</h2>
                {customerList && customerList.map((item, index) => {
                return (
                    <div key={item.id}>
                        <Link to={`/detail/${index}`}><p>{item.name}</p></Link>
                    </div>
                )
                })}
            </ContentStyle>
        </div>
    )
}
