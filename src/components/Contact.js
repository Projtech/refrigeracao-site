import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background: #f8f9fa;
  padding: 3rem 3rem 2rem;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  text-align: center;
`;

const FormDescription = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
  
  &::placeholder {
    color: #aaa;
    font-size: 0.85rem;
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
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
  
  &::placeholder {
    color: #aaa;
    font-size: 0.85rem;
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
  
  &:hover {
    background: #333;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
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
    
    // Simular envio
    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1000);
  };

  return (
    <ContactContainer>
      <Container>
        <FormTitle>Solicitar Orçamento</FormTitle>
        <FormDescription>
          Nossa equipe técnica entrará em contato rapidamente.
        </FormDescription>
        
        {status === 'success' && (
          <SuccessMessage>
            Mensagem enviada com sucesso! Entraremos em contato em breve.
          </SuccessMessage>
        )}
        
        {status === 'error' && (
          <ErrorMessage>
            Erro ao enviar mensagem. Tente novamente.
          </ErrorMessage>
        )}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome</Label>
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
            <Label>E-mail</Label>
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
            <Label>Telefone</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(81) 99999-9999"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Serviço</Label>
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
            <Label>Mensagem</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva o problema..."
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </SubmitButton>
        </Form>
      </Container>
    </ContactContainer>
  );
}

export default Contact;