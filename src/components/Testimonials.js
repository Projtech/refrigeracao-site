import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const TestimonialCard = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  color: #ffd700;
`;

function Testimonials() {
  const testimonials = [
    {
      text: "Atendimento exemplar! Minha geladeira Consul não estava gelando, com o motor queimado, depois da manutenção ela está funcionando muito bem, tive toda atenção da equipe da empresa! Estou satisfeita e indico!",
      author: "Priscilla Valesca"
    },
    {
      text: "Atendimento rápido... Muito atencioso...muito profissional... Resolveu os meus problemas na mesma hora... Super recomendo e indico",
      author: "Maria Vitória"
    }
  ];

  return (
    <TestimonialsContainer>
      <Container>
        <Title>O que nossos clientes dizem</Title>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
          </TestimonialCard>
        ))}
      </Container>
    </TestimonialsContainer>
  );
}

export default Testimonials;