import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
`

// position: absolute;
// left: 50%;
// transform: translateX(-50%);

export default function ContentStyle(props) {
    return (
        <Content>{props.children}</Content>
    )
}
