import React from 'react'
import { SidebarContainer, Icon, CloseIcon,  SidebarWarpper, SidebarMenu, SidebarLink, SideBtnWarp, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWarpper>
            <SidebarMenu>
                <SidebarLink to=''>Home</SidebarLink>
                <SidebarLink to='about'>About</SidebarLink>
                <SidebarLink to='Services'>Services</SidebarLink>
                <SidebarLink to='My-Work'>My Work</SidebarLink>
            </SidebarMenu>
            <SideBtnWarp>
                <SidebarRoute to='/Contact-Me'>Contact Me</SidebarRoute>
            </SideBtnWarp>
        </SidebarWarpper>
    </SidebarContainer>
  )
}

export default Sidebar