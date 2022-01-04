import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
    text-align: center;
`

export default function HeaderStyle(props) {
    return (
        <Header>{props.children}</Header>
    )
}
