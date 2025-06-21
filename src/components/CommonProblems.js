import React, { useState } from 'react';
import styled from 'styled-components';

const ProblemsContainer = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 3rem;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
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

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  background: ${props => props.active ? '#1a1a1a' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border: 2px solid ${props => props.active ? '#1a1a1a' : '#e9ecef'};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    border-color: #1a1a1a;
    transform: translateY(-2px);
  }
`;

const ProblemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProblemCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border-color: #1a1a1a;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
  }
`;

const ProblemIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const ProblemTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
`;

const ProblemDescription = styled.p`
  color: #666;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const UrgencyBadge = styled.span`
  background: ${props => {
    switch(props.level) {
      case 'alta': return '#ff4757';
      case 'media': return '#ffa502';
      case 'baixa': return '#2ed573';
      default: return '#666';
    }
  }};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
`;

const SolveButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-size: 0.9rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
`;

const EmergencyButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #ff4757;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 5px 20px rgba(255, 71, 87, 0.4);
  z-index: 1000;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(255, 71, 87, 0.6);
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  animation: pulse 2s infinite;
`;

function CommonProblems() {
  const [activeCategory, setActiveCategory] = useState('geladeiras');

  const categories = [
    { id: 'geladeiras', name: 'Geladeiras', icon: '🧊' },
    { id: 'ar-condicionado', name: 'Ar-Condicionado', icon: '❄️' },
    { id: 'camara-fria', name: 'Câmara Fria', icon: '🏭' },
    { id: 'expositor', name: 'Expositor', icon: '🛒' }
  ];

  const problems = {
    'geladeiras': [
      {
        title: 'Não está gelando',
        description: 'Sua geladeira ligada mas não está resfriando? Pode ser problema no termostato, gás ou compressor.',
        icon: '🌡️',
        urgency: 'alta'
      },
      {
        title: 'Ventilador parou',
        description: 'Ventilador interno não funciona, causando má circulação de ar e distribuição desigual da temperatura.',
        icon: '🌀',
        urgency: 'media'
      },
      {
        title: 'Compressor queimou',
        description: 'Motor do compressor não liga ou faz ruídos estranhos? Precisa de diagnóstico técnico especializado.',
        icon: '⚙️',
        urgency: 'alta'
      }
    ],
    'ar-condicionado': [
      {
        title: 'Não gela',
        description: 'Ar-condicionado liga mas não resfria o ambiente. Pode ser falta de gás, filtro sujo ou problema elétrico.',
        icon: '🔥',
        urgency: 'alta'
      },
      {
        title: 'Pingando água',
        description: 'Goteiras na unidade interna indicam entupimento no dreno ou problemas na instalação.',
        icon: '💧',
        urgency: 'media'
      },
      {
        title: 'Placa eletrônica parou',
        description: 'Falha na placa de controle impede funcionamento normal. Requer diagnóstico eletrônico.',
        icon: '🔌',
        urgency: 'alta'
      },
      {
        title: 'Filtros sujos',
        description: 'Filtros entupidos reduzem eficiência e podem causar problemas maiores no equipamento.',
        icon: '🧹',
        urgency: 'baixa'
      },
      {
        title: 'Compressor parou',
        description: 'Unidade externa não funciona, sem circulação de gás refrigerante no sistema.',
        icon: '⚡',
        urgency: 'alta'
      }
    ],
    'camara-fria': [
      {
        title: 'Não gela suficiente',
        description: 'Temperatura inadequada compromete conservação dos produtos. Pode ser vazamento de gás ou isolamento.',
        icon: '📉',
        urgency: 'alta'
      },
      {
        title: 'Ventiladores pararam',
        description: 'Sem circulação forçada, a temperatura fica desigual, afetando a conservação dos alimentos.',
        icon: '🌪️',
        urgency: 'alta'
      }
    ],
    'expositor': [
      {
        title: 'Porta não veda',
        description: 'Vedação comprometida causa perda de frio e aumento no consumo de energia.',
        icon: '🚪',
        urgency: 'media'
      },
      {
        title: 'Parou de gelar',
        description: 'Expositor sem refrigeração compromete produtos à venda. Diagnóstico urgente necessário.',
        icon: '🛑',
        urgency: 'alta'
      }
    ]
  };

  const handleSolveNow = (problemTitle) => {
    const message = `Olá! Preciso de ajuda com: ${problemTitle}. Poderia me enviar um orçamento?`;
    const whatsappUrl = `https://wa.me/5581999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <ProblemsContainer>
        <Container>
          <Header>
            <Title>Problemas Comuns em Refrigeração</Title>
            <Subtitle>
              Identifique rapidamente o problema do seu equipamento e solicite um orçamento especializado
            </Subtitle>
          </Header>

          <CategoryTabs>
            {categories.map(category => (
              <Tab
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon} {category.name}
              </Tab>
            ))}
          </CategoryTabs>

          <ProblemsGrid>
            {problems[activeCategory]?.map((problem, index) => (
              <ProblemCard key={index}>
                <UrgencyBadge level={problem.urgency}>
                  {problem.urgency === 'alta' ? '🔴 URGENTE' : 
                   problem.urgency === 'media' ? '🟡 MODERADO' : '🟢 ROTINA'}
                </UrgencyBadge>
                
                <ProblemIcon>{problem.icon}</ProblemIcon>
                
                <ProblemTitle>{problem.title}</ProblemTitle>
                
                <ProblemDescription>{problem.description}</ProblemDescription>
                
                <SolveButton onClick={() => handleSolveNow(problem.title)}>
                  💬 Resolver Agora via WhatsApp
                </SolveButton>
              </ProblemCard>
            ))}
          </ProblemsGrid>
        </Container>
      </ProblemsContainer>

      <EmergencyButton href="https://wa.me/5581999999999?text=EMERGÊNCIA! Preciso de atendimento urgente em refrigeração!">
        🚨 EMERGÊNCIA 24H
      </EmergencyButton>
    </>
  );
}

export default CommonProblems;