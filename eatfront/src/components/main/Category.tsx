import React from 'react'
import styled from 'styled-components'

const Category = () => {
    return(
        <>
        <Block>
            <div>면류</div>
            <div>|</div>
            <div>밥류</div>
            <div>|</div>
            <div>국물류</div>
        </Block>
        </>
    )
}


export default Category

const Block = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
font-size: 1.3rem;
height:3rem;
background: #FFF6A6;
margin-bottom:2rem;
`