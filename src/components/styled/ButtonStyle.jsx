import React from 'react'
import Input from './InputStyle'
import styled from 'styled-components'

const Button = styled.button`
    color: purple;
`

export default function ButtonStyle(props) {
    return (
        <Button>{props.children}</Button>
    )
}
