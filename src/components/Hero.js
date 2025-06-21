import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background: #fafafa;
  padding: 8rem 3rem 4rem;
  text-align: left;
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
`;

const Content = styled.div``;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #333;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #1a1a1a;
  border: 2px solid #e0e0e0;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #1a1a1a;
    background: #1a1a1a;
    color: white;
  }
`;

const ImagePlaceholder = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 400px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
`;

function Hero() {
  return (
    <HeroContainer>
      <Container>
        <Content>
          <Subtitle>
            Soluções técnicas especializadas em refrigeração residencial, 
            comercial e industrial. Qualidade, eficiência e confiabilidade.
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton>Solicitar Orçamento</PrimaryButton>
            <SecondaryButton>Ver Projetos</SecondaryButton>
          </ButtonGroup>
        </Content>
        <ImagePlaceholder>
          Imagem dos equipamentos
        </ImagePlaceholder>
      </Container>
    </HeroContainer>
  );
}

export default Hero;