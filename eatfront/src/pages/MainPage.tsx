import React from 'react'
import MenuPageList from '../components/main/MenuPageList'
import MenuList from '../components/main/MenuList'
import HeaderTop from '../components/header/HeaderTop'
const MainPage = () => {
    return (
      <>
      <HeaderTop/>
      <MenuPageList MenuList={MenuList}/>
      </>
    )
  }
  
  export default MainPage