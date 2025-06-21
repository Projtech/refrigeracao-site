import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.02em;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  color: #4a4a4a;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #1a1a1a;
  }
`;

const ContactButton = styled.button`
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #333;
    transform: translateY(-1px);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>Refrigeration Company</Logo>
        <NavLinks>
          <NavLink>Serviços</NavLink>
          <NavLink>Projetos</NavLink>
          <NavLink>Sobre</NavLink>
          <NavLink>Contato</NavLink>
        </NavLinks>
        <ContactButton>Orçamento</ContactButton>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;