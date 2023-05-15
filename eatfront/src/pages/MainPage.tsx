import React from 'react'
import MenuPageList from '../components/main/MenuPageList'
import MenuList from '../components/main/MenuList'
import HeaderTop from '../components/header/HeaderTop'
import Category from '../components/main/Category'
const MainPage = () => {
    return (
      <>
      <HeaderTop/>
      <Category/>
      <MenuPageList MenuList={MenuList}/>
      </>
    )
  }
  
  export default MainPage