import React, { useRef, useState, useEffect } from 'react'
import { Header, NavBar, SideBar ,HeaderSideBar } from './styles'
import { Btn } from '../Buttons/styled'

import Logo from '../../assets/logo.png'
import Menu from '../../assets/menu.png'

import { AiOutlineClose } from 'react-icons/ai'


const HeaderBar = ({testePair}) => {

  const [sideState, setSideState] = useState(false)
  const menuRef = useRef()
  
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  function handleClick(e) {
    if (menuRef && !menuRef.current.contains(e.target) && sideState ) {
      setSideState(false)
    }
  }

  

  return (
    <Header>
      <NavBar>
        <img className='logo' src={Logo} alt='MobCar' />
        <img
          className='menu'
          onClick={() => setSideState(true)}
          src={Menu}
          alt='Menu'
        />
      </NavBar>
      <SideBar open={sideState} ref={menuRef} >
      <HeaderSideBar>
        <Btn  onClick={() => setSideState(false)}>
        <AiOutlineClose />
        </Btn>
      </HeaderSideBar>
      </SideBar>
    </Header>
  )
}

export default HeaderBar
