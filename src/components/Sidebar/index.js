import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}
  top ${({ isOpen}) => (isOpen ? '0' : '-100%')}
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const SidebarWrapper = styled.div`
  
`;

const SidebarMenu = styled.div`
  
`;

const SidebarLink = styled(LinkR)`
  
`;


const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about">About</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="/discover">Discover</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="/services">Services</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="/signup">Sign Up</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      
    </SidebarContainer>
  )
}

export default Sidebar
