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
  // ✅ DADOS ATUALIZADOS
  const businessData = {
    name: "Refrigeration Company",
    address: "R. Antônio Guganis, 200 - Jardim São Paulo, São Paulo - SP, 02044-110",
    phone: "(11) 92004-4158 • (11) 99209-1885",
    whatsapp: "5511920044158", // ✅ WHATSAPP CORRETO
    email: "contato@refrigerationcompany.com",
    hours: "Segunda a Sábado: 8h às 20h\nDomingo: Fechado",
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
          
          {/* ✅ MAPA ATUALIZADO */}
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975145165717!2d-46.62047!3d-23.497832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef76201a4d4b7%3A0xbc7857ba935510fe!2sR.%20Ant%C3%B4nio%20Guganis%2C%20200%20-%20Jardim%20S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002044-110!5e0!3m2!1spt-BR!2sbr!4v1625097200000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              title="Localização Refrigeration Company"
            />
          </MapContainer>
          
          {/* ✅ BOTÕES ATUALIZADOS */}
          <ActionButtons>
            <GoogleLink 
              href="https://www.google.com/maps/place/Refrigeration+Company/@-23.4978323,-46.6181401,17z/data=!4m8!3m7!1s0x94cef76201a4d4b7:0xbc7857ba935510fe!8m2!3d-23.4978323!4d-46.6181401!9m1!1b1!16s%2Fg%2F11x77fp4tv?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank"
            >
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
          
          {/* ✅ LINK DAS AVALIAÇÕES ATUALIZADO */}
          <GoogleLink 
            href="https://www.google.com/maps/place/Refrigeration+Company/@-23.4978323,-46.6181401,17z/data=!4m8!3m7!1s0x94cef76201a4d4b7:0xbc7857ba935510fe!8m2!3d-23.4978323!4d-46.6181401!9m1!1b1!16s%2Fg%2F11x77fp4tv?authuser=0&hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank"
          >
            📱 Ver todas as avaliações no Google
          </GoogleLink>
        </ReviewsContainer>
      </Container>
    </InfoContainer>
  );
}

export default GoogleInfo;