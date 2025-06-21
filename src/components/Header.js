import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  color: #4a4a4a;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.2s ease;
  position: relative;
  
  &:hover {
    color: #1a1a1a;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #1a1a1a;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
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

// Mobile Menu Components
const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLine = styled.span`
  width: 24px;
  height: 2px;
  background: #1a1a1a;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: 1px;
  
  &:first-child {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }
  
  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 1.5rem;
`;

const MobileNavLink = styled.div`
  color: #4a4a4a;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    color: #1a1a1a;
    transform: translateX(5px);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileContactButton = styled.button`
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    background: #333;
  }
`;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para efeito no header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao clicar em um link
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Funcionalidade do botão de orçamento
  const handleContactClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para serviços de refrigeração.";
    const whatsappUrl = `https://wa.me/5511920044158?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'
      }}>
        <Nav>
          <Logo>Refrigeration Company</Logo>
          
          {/* Desktop Navigation */}
          <DesktopNav>
            <NavLinks>
              <NavLink>Serviços</NavLink>
              <NavLink>Projetos</NavLink>
              <NavLink>Sobre</NavLink>
              <NavLink>Contato</NavLink>
            </NavLinks>
            <ContactButton onClick={handleContactClick}>
              Orçamento
            </ContactButton>
          </DesktopNav>

          {/* Mobile Menu Button */}
          <MobileMenuButton 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <MenuLine isOpen={isMobileMenuOpen} />
            <MenuLine isOpen={isMobileMenuOpen} />
            <MenuLine isOpen={isMobileMenuOpen} />
          </MobileMenuButton>
        </Nav>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen}>
          <MobileNavLinks>
            <MobileNavLink onClick={handleMobileNavClick}>Serviços</MobileNavLink>
            <MobileNavLink onClick={handleMobileNavClick}>Projetos</MobileNavLink>
            <MobileNavLink onClick={handleMobileNavClick}>Sobre</MobileNavLink>
            <MobileNavLink onClick={handleMobileNavClick}>Contato</MobileNavLink>
            <MobileContactButton onClick={handleContactClick}>
              💬 Solicitar Orçamento
            </MobileContactButton>
          </MobileNavLinks>
        </MobileMenu>
      </HeaderContainer>

      {/* Overlay para fechar menu ao clicar fora */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 999,
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;