import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background: white;
  padding: 3rem 3rem 2rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const TagLine = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2.5rem;
`;

const CTAButton = styled.button`
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333;
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  margin-top: 3rem;
  color: #999;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ArrowDown = styled.div`
  width: 16px;
  height: 16px;
  border-right: 2px solid #999;
  border-bottom: 2px solid #999;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: rotate(45deg) translateY(0);
    }
    40% {
      transform: rotate(45deg) translateY(-4px);
    }
    60% {
      transform: rotate(45deg) translateY(-2px);
    }
  }
`;

function Hero() {
  const scrollToProblems = () => {
    const problemsSection = document.querySelector('[data-section="problems"]');
    if (problemsSection) {
      problemsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <Container>
        <TagLine>
          Especialistas em Refrigeração Técnica
        </TagLine>
        
        <Description>
          Soluções completas para geladeiras, freezers, ar-condicionados e câmaras frias. 
          Atendimento profissional para residências e empresas.
        </Description>

        <CTAButton onClick={scrollToProblems}>
          Identificar Meu Problema
        </CTAButton>

        <ScrollIndicator>
          <ArrowDown />
        </ScrollIndicator>
      </Container>
    </HeroContainer>
  );
}

export default Hero;