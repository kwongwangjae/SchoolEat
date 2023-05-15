import React from 'react'
import styled from 'styled-components'
import ramen from '../../images/013039_1.jpg'
import FarStar from '../main/FarStar'
 const MenuPage = ({ title, price }: { title: string; price: string }) => {
   return (
    <>
     <div>
       <Block>
         <IMGBlock>
           <IMG src={ramen}/>
         </IMGBlock>
         <FarStar></FarStar>
         <TitleText>{title}</TitleText>
         <PriceText>{price}</PriceText>
       </Block>
     </div>
     </>
   )
 }

 export default MenuPage

 const TitleText = styled.div`
 display:flex;
   font-size: 1rem;
   font-weight: 800;
   @media all and (max-width: 767px) {
     font-size: 1rem;
     margin-top:0;
     margin-top:0.5rem;

 `

 const PriceText = styled.div`
   display: flex;
   font-size: 0.6rem;
   font-weight: 1000;
   margin-top: 0.5rem;
   @media all and (max-width: 767px) {
     font-size: 0.6rem;
     margin-top: 0;
     margin-top: 0.3rem;
   }
 `
 const Block = styled.div`
   width: 13.5rem;
   height: 13rem;
   margin: 1rem 4rem 1rem 4rem;
   border-radius: 20px;
   @media all and (min-width: 768px) and (max-width: 1023px) {
     margin: 0;
     margin: 0.5rem 2rem 0.5rem 2rem;
   }
   @media all and (max-width: 767px) {
     width: 8rem;
     height: 17rem;
     margin: 0;
   }
 `
 const IMGBlock = styled.div`
   display: flex;
   justify-content: center;
   width: 13.5rem;
   height: 10rem;
   background: white;
   border-radius: 20px;
   padding: 0.5rem 0;
   @media all and (max-width: 767px) {
     width: 8rem;
     height: 10rem;
   }
 `
 const IMG = styled.img`
   width: 13.5rem;
   @media all and (max-width: 767px) {
     width: 6rem;
   }
 `