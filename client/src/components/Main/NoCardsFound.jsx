import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid black;
`
const Title = styled.h2`
    font-size: 50px;
    font-weight: 500;
    text-align: center;
    margin: 0 auto; 
    border: 1px solid black;
`
const NoCardsFound = () => {
    return ( 
        <Container>
            <Title>No cards were found!</Title>
        </Container>
     );
}
 
export default NoCardsFound;