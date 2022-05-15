import React from 'react'
import { Container, Content } from './SidebarStyles'
import { 
  FaTimes, 
  FaHome,  
  FaRegSun, 
  FaUserAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
} from 'react-icons/fa'

import SidebarItem from './SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar