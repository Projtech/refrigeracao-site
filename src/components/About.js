import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background: white;
  padding: 5rem 3rem 4rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 1rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
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
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const HighlightsSection = styled.div``;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const Highlight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const HighlightIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
`;

const HighlightContent = styled.div``;

const HighlightTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const HighlightText = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const StatsSection = styled.div``;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const StatCard = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e9ecef;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

function About() {
  const highlights = [
    {
      icon: '🔧',
      title: 'Experiência Comprovada',
      text: 'Mais de 5 anos no mercado como técnico especializado e certificado.'
    },
    {
      icon: '⚡',
      title: 'Atendimento Rápido',
      text: 'Diagnóstico preciso e soluções eficientes no menor tempo possível.'
    },
    {
      icon: '🛡️',
      title: 'Garantia Total',
      text: 'Todos os serviços com garantia e uso de peças de qualidade'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clientes Atendidos' },
    { number: '4.8', label: 'Avaliação Google' },
    { number: '8h', label: 'Suporte Disponível' },
    { number: '90d', label: 'Garantia Serviços' }
  ];

  return (
    <AboutContainer id="about">
      <Container>
        <TagLine>
          Especialistas em Refrigeração com Excelência Comprovada
        </TagLine>
        <Description>
          Somos uma empresa especializada em serviços de refrigeração, oferecendo soluções completas para residências e comércios com qualidade garantida.
        </Description>
        
        <ContentGrid>
          <HighlightsSection>
            <SectionTitle>Nossos Diferenciais</SectionTitle>
            <HighlightsGrid>
              {highlights.map((highlight, index) => (
                <Highlight key={index}>
                  <HighlightIcon>{highlight.icon}</HighlightIcon>
                  <HighlightContent>
                    <HighlightTitle>{highlight.title}</HighlightTitle>
                    <HighlightText>{highlight.text}</HighlightText>
                  </HighlightContent>
                </Highlight>
              ))}
            </HighlightsGrid>
          </HighlightsSection>

          <StatsSection>
            <SectionTitle>Números que Comprovam</SectionTitle>
            <StatsContainer>
              {stats.map((stat, index) => (
                <StatCard key={index}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsContainer>
          </StatsSection>
        </ContentGrid>
      </Container>
    </AboutContainer>
  );
}

export default About;