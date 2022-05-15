import React, { useState } from 'react'
import { Container } from './HeaderStyles'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar/Sidebar'
import CountDown from '../Count/CountDown'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <CountDown/>
    </Container>
  )
}

export default Header