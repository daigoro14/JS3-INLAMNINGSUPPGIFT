import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    border-radius: 10px;
    border: 2px solid purple;
    display: flex;
    color: purple;
    margin-bottom: 2px;
`

export default function Inputstyle(props) {
    return (
        <>
            <Input 
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                pattern={props.pattern}
                required={props.required}
                title={props.title}
            />
        </>
    )
}
