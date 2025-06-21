import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

// NOVOS COMPONENTES DO SLIDE
const SliderWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
`;

const SlideContainer = styled.div`
  display: flex;
  transform: translateX(-${props => props.currentSlide * 100}%);
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  background: white;
  display: flex;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
`;

const ContentSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SlideTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const ProblemText = styled.h4`
  font-size: 1.3rem;
  color: #e74c3c;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const Description = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const SolveButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
`;

function ProblemsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/ar-condicionado.jpg',
      title: 'Ar-Condicionado',
      problem: 'Não está gelando ou fazendo ruído estranho?',
      description: 'Problemas com gás, compressor ou filtros podem estar afetando seu ar-condicionado. Nossa equipe especializada resolve rapidamente.'
    },
    {
      id: 2,
      image: '/images/expositor.jpg',
      title: 'Expositor Comercial',
      problem: 'Temperatura inadequada ou porta não veda?',
      description: 'Seus produtos precisam da temperatura ideal para conservação e vendas. Garantimos o funcionamento perfeito do seu expositor.'
    },
    {
      id: 3,
      image: '/images/geladeira.jpg',
      title: 'Geladeira Residencial',
      problem: 'Não gela, faz barulho ou gasta muita energia?',
      description: 'Compressor, termostato ou vazamentos podem estar causando o problema. Diagnóstico preciso e reparo eficiente.'
    },
    {
      id: 4,
      image: '/images/camara-fria.jpg',
      title: 'Câmara Fria',
      problem: 'Temperatura instável ou ventilação inadequada?',
      description: 'Sistemas comerciais precisam de manutenção especializada e constante. Evite perdas de produtos com nosso serviço.'
    }
  ];

  const handleSolveNow = (equipment) => {
    const message = `Olá! Estou com problemas no meu ${equipment}. Poderia me ajudar com um orçamento?`;
    const whatsappUrl = `https://wa.me/5581999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <SliderContainer>
      <Container>
        <Header>
          <Title>Problemas com Seus Equipamentos?</Title>
          <Subtitle>
            Identifique o problema e solicite atendimento especializado
          </Subtitle>
        </Header>

        <SliderWrapper>
          <SlideContainer currentSlide={currentSlide}>
            {slides.map((slide) => (
              <Slide key={slide.id}>
                <ImageSection>
                  <SlideImage src={slide.image} alt={slide.title} />
                </ImageSection>
                
                <ContentSection>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <ProblemText>{slide.problem}</ProblemText>
                  <Description>{slide.description}</Description>
                  
                  <SolveButton onClick={() => handleSolveNow(slide.title)}>
                    💬 Resolver Agora
                  </SolveButton>
                </ContentSection>
              </Slide>
            ))}
          </SlideContainer>
        </SliderWrapper>
      </Container>
    </SliderContainer>
  );
}

export default ProblemsSlider;