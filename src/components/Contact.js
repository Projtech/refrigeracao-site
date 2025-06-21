import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background: #f8f9fa;
  padding: 3rem 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }
`;

const FormDescription = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.4rem;
  
  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: border-color 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
  
  &::placeholder {
    color: #aaa;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 16px; /* Previne zoom no iOS */
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    
    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 0.9rem;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: border-color 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
  
  &::placeholder {
    color: #aaa;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 16px; /* Previne zoom no iOS */
    min-height: 90px;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    min-height: 80px;
    
    &::placeholder {
      font-size: 0.8rem;
    }
  }
`;

const SubmitButton = styled.button`
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
  width: 100%;
  
  &:hover {
    background: #333;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
    margin-top: 0.25rem;
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #c3e6cb;
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.6rem;
  }
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #f5c6cb;
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.6rem;
  }
`;

// Adicionar um botão WhatsApp flutuante para mobile
const WhatsAppFloat = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25d366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  }
  
  @media (min-width: 769px) {
    display: none;
  }
  
  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
    bottom: 15px;
    right: 15px;
    font-size: 1.3rem;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (substitua pela lógica real)
    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para serviços de refrigeração.";
    const whatsappUrl = `https://wa.me/5511920044158?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <ContactContainer id="contact">
        <Container>
          <FormTitle>Solicitar Orçamento</FormTitle>
          <FormDescription>
            Nossa equipe técnica entrará em contato rapidamente.
          </FormDescription>

          {status === 'success' && (
            <SuccessMessage>
              ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </SuccessMessage>
          )}

          {status === 'error' && (
            <ErrorMessage>
              ❌ Erro ao enviar mensagem. Tente novamente.
            </ErrorMessage>
          )}

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nome *</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>E-mail *</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Telefone *</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Tipo de Serviço *</Label>
              <Input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="Ex: Manutenção de geladeira"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Mensagem *</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva o problema ou serviço necessário..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? '⏳ Enviando...' : '📧 Enviar Mensagem'}
            </SubmitButton>
          </Form>
        </Container>
      </ContactContainer>

      {/* Botão WhatsApp flutuante apenas no mobile */}
      <WhatsAppFloat 
        href="https://wa.me/5511920044158?text=Olá! Gostaria de solicitar um orçamento para serviços de refrigeração."
        target="_blank"
        onClick={handleWhatsAppClick}
        title="Conversar no WhatsApp"
      >
        💬
      </WhatsAppFloat>
    </>
  );
}

export default Contact;