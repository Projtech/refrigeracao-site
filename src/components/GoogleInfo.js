import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.section`
  background: #f8f9fa;
  padding: 4rem 3rem;
  border-top: 1px solid #e9ecef;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
`;

const BusinessInfo = styled.div``;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const InfoIcon = styled.div`
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
`;

const InfoContent = styled.div``;

const InfoLabel = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`;

// NOVO: Container para o mapa
const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1.5rem;
  border: 1px solid #e9ecef;
`;

// NOVO: Botões de ação
const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

const GoogleLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border: 2px solid #e9ecef;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #1a1a1a;
    background: #1a1a1a;
    color: white;
  }
`;

// NOVO: Botão WhatsApp
const WhatsAppButton = styled.a`
  background: #25d366;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: #128c7e;
    transform: translateY(-1px);
  }
`;

const ReviewsContainer = styled.div``;

const ReviewsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Stars = styled.div`
  color: #ffc107;
  font-size: 1.2rem;
`;

const RatingText = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
`;

const ReviewCount = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const ReviewsList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const ReviewCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const ReviewAuthor = styled.span`
  font-weight: 600;
  color: #1a1a1a;
`;

const ReviewStars = styled.div`
  color: #ffc107;
`;

const ReviewText = styled.p`
  color: #666;
  line-height: 1.5;
  margin: 0;
  font-size: 0.95rem;
`;

function GoogleInfo() {
  // Dados da empresa
  const businessData = {
    name: "Refrigeration Company",
    address: "Rua Exemplo, 123 - Olinda, PE",
    phone: "(81) 99999-9999",
    whatsapp: "5581999999999", // NOVO: Número do WhatsApp
    email: "contato@refrigerationcompany.com",
    hours: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
    rating: 4.8,
    reviewCount: 47
  };

  const reviews = [
    {
      author: "Priscilla Valesca",
      rating: 5,
      text: "Atendimento exemplar! Minha geladeira Consul não estava gelando, com o motor queimado, depois da manutenção ela está funcionando muito bem, tive toda atenção da equipe da empresa! Estou satisfeita e indico!"
    },
    {
      author: "Maria Vitória",
      rating: 5,
      text: "Atendimento rápido... Muito atencioso...muito profissional... Resolveu os meus problemas na mesma hora... Super recomendo e indico"
    },
    {
      author: "João Silva",
      rating: 5,
      text: "Profissionais muito competentes. Resolveram o problema da minha câmara fria rapidamente. Recomendo!"
    }
  ];

  return (
    <InfoContainer>
      <Container>
        <BusinessInfo>
          <Title>Informações de Contato</Title>
          <InfoGrid>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoContent>
                <InfoLabel>Endereço</InfoLabel>
                <InfoText>{businessData.address}</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>📞</InfoIcon>
              <InfoContent>
                <InfoLabel>Telefone</InfoLabel>
                <InfoText>{businessData.phone}</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
              <InfoContent>
                <InfoLabel>E-mail</InfoLabel>
                <InfoText>{businessData.email}</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>🕒</InfoIcon>
              <InfoContent>
                <InfoLabel>Horário de Funcionamento</InfoLabel>
                <InfoText style={{whiteSpace: 'pre-line'}}>{businessData.hours}</InfoText>
              </InfoContent>
            </InfoItem>
          </InfoGrid>
          
          {/* NOVO: Mapa do Google Maps */}
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5!2d-34.8609!3d-8.0178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDEnMDQuMSJTIDM0wrA1MSczOS4yIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              title="Localização Refrigeration Company"
            />
          </MapContainer>
          
          {/* NOVO: Botões de ação */}
          <ActionButtons>
            <GoogleLink href="https://goo.gl/maps/SeuLinkAqui" target="_blank">
              🗺️ Ver no Google Maps
            </GoogleLink>
            <WhatsAppButton 
              href={`https://wa.me/${businessData.whatsapp}?text=Olá! Gostaria de solicitar um orçamento para serviços de refrigeração.`}
              target="_blank"
            >
              💬 WhatsApp
            </WhatsAppButton>
          </ActionButtons>
        </BusinessInfo>

        <ReviewsContainer>
          <Title>Avaliações dos Clientes</Title>
          <ReviewsHeader>
            <Rating>
              <Stars>★★★★★</Stars>
              <RatingText>{businessData.rating}</RatingText>
              <ReviewCount>({businessData.reviewCount} avaliações)</ReviewCount>
            </Rating>
          </ReviewsHeader>
          
          <ReviewsList>
            {reviews.map((review, index) => (
              <ReviewCard key={index}>
                <ReviewHeader>
                  <ReviewAuthor>{review.author}</ReviewAuthor>
                  <ReviewStars>{'★'.repeat(review.rating)}</ReviewStars>
                </ReviewHeader>
                <ReviewText>{review.text}</ReviewText>
              </ReviewCard>
            ))}
          </ReviewsList>
          
          <GoogleLink href="https://g.page/SeuNegocio/review" target="_blank">
            📱 Ver todas as avaliações no Google
          </GoogleLink>
        </ReviewsContainer>
      </Container>
    </InfoContainer>
  );
}

export default GoogleInfo;