import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  background: white;
  padding: 5rem 3rem;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: #fafafa;
  padding: 2.5rem;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: #e0e0e0;
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #1a1a1a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Feature = styled.li`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1rem;
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #1a1a1a;
    font-weight: bold;
  }
`;

function Services() {
  const services = [
    {
      icon: '🔧',
      title: 'Manutenção Técnica',
      description: 'Serviços especializados de manutenção preventiva e corretiva.',
      features: ['Diagnóstico preciso', 'Peças originais', 'Garantia de serviço']
    },
    {
      icon: '⚡',
      title: 'Instalação Profissional',
      description: 'Instalação técnica certificada com eficiência energética.',
      features: ['Projeto técnico', 'Instalação segura', 'Testes de funcionamento']
    },
    {
      icon: '🏢',
      title: 'Sistemas Comerciais',
      description: 'Soluções para comércios e indústrias de todos os portes.',
      features: ['Câmaras frigoríficas', 'Sistemas industriais', 'Manutenção 24h']
    }
  ];

  return (
    <ServicesContainer>
      <Container>
        <Header>
          <Title>Nossos Serviços</Title>
          <Description>
            Oferecemos soluções completas em refrigeração com tecnologia avançada e equipe especializada.
          </Description>
        </Header>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, idx) => (
                  <Feature key={idx}>{feature}</Feature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesContainer>
  );
}

export default Services;