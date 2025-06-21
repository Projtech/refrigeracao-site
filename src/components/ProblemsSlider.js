import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

// COMPONENTES DO SLIDE
const SliderWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  
  @media (max-width: 768px) {
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  }
  
  @media (max-width: 480px) {
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }
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
    text-align: center;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
    flex: none;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem 0.5rem;
  }
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
  
  @media (max-width: 768px) {
    max-height: 250px;
  }
  
  @media (max-width: 480px) {
    max-height: 200px;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 1rem 2rem 2rem;
    flex: none;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1.5rem 1.5rem;
  }
`;

const SlideTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ProblemText = styled.h4`
  font-size: 1.3rem;
  color: #e74c3c;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
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
  
  @media (max-width: 768px) {
    align-self: center;
    font-size: 1rem;
    padding: 0.9rem 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.5rem;
    width: 100%;
    justify-content: center;
  }
`;

// COMPONENTES DE NAVEGAÇÃO
const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: #1a1a1a;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }
  
  &.prev {
    left: -25px;
  }
  
  &.next {
    right: -25px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    
    &.prev { 
      left: 10px; 
    }
    &.next { 
      right: 10px; 
    }
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    
    &.prev { 
      left: 5px; 
    }
    &.next { 
      right: 5px; 
    }
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#1a1a1a' : '#ccc'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a1a1a;
    transform: scale(1.2);
  }
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

function ProblemsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const totalSlides = 4; // Temos 4 slides

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Funções de navegação
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slides = [
    {
      id: 1,
      image: '/images/ar-condicionado.png',
      title: 'Ar-Condicionado',
      problem: 'Não está gelando ou fazendo ruído estranho?',
      description: 'Problemas com gás, compressor ou filtros podem estar afetando seu ar-condicionado. Nossa equipe especializada resolve rapidamente.'
    },
    {
      id: 2,
      image: '/images/expositor.png',
      title: 'Expositor Comercial',
      problem: 'Temperatura inadequada ou porta não veda?',
      description: 'Seus produtos precisam da temperatura ideal para conservação e vendas. Garantimos o funcionamento perfeito do seu expositor.'
    },
    {
      id: 3,
      image: '/images/geladeira.png',
      title: 'Geladeira Residencial',
      problem: 'Não gela, faz barulho ou gasta muita energia?',
      description: 'Compressor, termostato ou vazamentos podem estar causando o problema. Diagnóstico preciso e reparo eficiente.'
    },
    {
      id: 4,
      image: '/images/camara-fria.png',
      title: 'Câmara Fria',
      problem: 'Temperatura instável ou ventilação inadequada?',
      description: 'Sistemas comerciais precisam de manutenção especializada e constante. Evite perdas de produtos com nosso serviço.'
    }
  ];

  const handleSolveNow = (equipment) => {
    const message = `Olá! Estou com problemas no meu ${equipment}. Poderia me ajudar com um orçamento?`;
    const whatsappUrl = `https://wa.me/5511920044158?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <SliderContainer id="services">
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
          
          {/* BOTÕES DE NAVEGAÇÃO */}
          <NavigationButton className="prev" onClick={prevSlide}>
            ←
          </NavigationButton>
          
          <NavigationButton className="next" onClick={nextSlide}>
            →
          </NavigationButton>
        </SliderWrapper>

        {/* DOTS DE NAVEGAÇÃO */}
        <DotsContainer>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      </Container>
    </SliderContainer>
  );
}

export default ProblemsSlider;