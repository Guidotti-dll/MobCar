import React from 'react'
import { Header, NavBar } from './styles'

import Logo from '../../assets/logo.png'
import Menu from '../../assets/menu.png'

const HeaderBar = ({testePair}) => {

  function banana () {
    testePair()
  }

  return (
    <Header>
      <NavBar>
        <img className='logo' src={Logo} alt='MobCar' />
        <img
          className='menu'
          onClick={banana}
          src={Menu}
          alt='Menu'
        />
      </NavBar>
    </Header>
  )
}

export default HeaderBar
