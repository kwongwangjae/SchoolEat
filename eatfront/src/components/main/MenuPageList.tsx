import React from 'react'
import MenuPage from './MenuPage'
import styled from 'styled-components'

 interface ProductCardProps {
   title: string
   price: string
 }

 const MenuPageList = ({
    MenuList,
 }: {
    MenuList: ProductCardProps[]
 }) => {
   return (
     <Div>
       {MenuList &&
         MenuList.map((v, index) => (
           <MenuPage key={index} title={v.title} price={v.price} />
         ))}
     </Div>
   )
 }

 export default MenuPageList

 const Div = styled.div`
   display: flex;
   flex-flow: row wrap;
   justify-content: space-evenly;
 `