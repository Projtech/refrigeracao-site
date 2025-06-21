import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.section`
  background: white;
  padding: 4rem 3rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
`;

const ContactInfo = styled.div``;

const ContactForm = styled.div``;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ContactList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  color: #1a1a1a;
  margin: 0;
  font-weight: 500;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  justify-self: start;
  
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
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #c3e6cb;
  text-align: center;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #f5c6cb;
  text-align: center;
  font-weight: 500;
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
    
    try {
      // CONFIGURAÇÃO DO EMAILJS - VOCÊ PRECISA SUBSTITUIR ESTES VALORES
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',     // Você vai pegar no EmailJS
        'YOUR_TEMPLATE_ID',    // Você vai pegar no EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_name: 'Refrigeration Company'
        },
        'YOUR_PUBLIC_KEY'      // Você vai pegar no EmailJS
      );
      
      if (result.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro:', error);
      setStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const contactData = [
    {
      icon: '📞',
      label: 'Telefone',
      text: '(81) 99999-9999'
    },
    {
      icon: '✉️',
      label: 'E-mail',
      text: 'contato@refrigerationcompany.com'
    },
    {
      icon: '📍',
      label: 'Endereço',
      text: 'Rua Exemplo, 123 - Olinda, PE'
    },
    {
      icon: '🕒',
      label: 'Horário',
      text: 'Seg-Sex: 8h às 18h'
    }
  ];

  return (
    <ContactContainer>
      <Container>
        <ContactInfo>
          <Title>Entre em Contato</Title>
          <Description>
            Solicite um orçamento sem compromisso. Nossa equipe técnica 
            está pronta para atender suas necessidades em refrigeração.
          </Description>
          
          <ContactList>
            {contactData.map((item, index) => (
              <ContactItem key={index}>
                <ContactIcon>{item.icon}</ContactIcon>
                <ContactDetails>
                  <ContactLabel>{item.label}</ContactLabel>
                  <ContactText>{item.text}</ContactText>
                </ContactDetails>
              </ContactItem>
            ))}
          </ContactList>
        </ContactInfo>

        <ContactForm>
          <Title>Solicitar Orçamento</Title>
          
          {status === 'success' && (
            <SuccessMessage>
              ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </SuccessMessage>
          )}
          
          {status === 'error' && (
            <ErrorMessage>
              ✗ Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
            </ErrorMessage>
          )}

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nome Completo</Label>
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
              />
            </FormGroup>

            <FormGroup>
              <Label>Tipo de Serviço</Label>
              <Input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="Ex: Manutenção de geladeira, instalação de freezer..."
              />
            </FormGroup>

            <FormGroup>
              <Label>Mensagem</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva o problema ou serviço que precisa..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </SubmitButton>
          </Form>
        </ContactForm>
      </Container>
    </ContactContainer>
  );
}

export default Contact;