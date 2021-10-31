import React from 'react';
import { Button } from '../../globalStyles';
import { GiHamShank } from 'react-icons/gi';
import { GiFriedFish, GiChickenOven } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nossos Pratos do Dia</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiChickenOven />
                </PricingCardIcon>
                <PricingCardPlan>Pernil</PricingCardPlan>
                <PricingCardCost>R$ 30,00</PricingCardCost>
                <PricingCardLength>Por Kilo</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Prato toda Segunda-feira</PricingCardFeature>
                  <PricingCardFeature>2 pessoas economia de R$ 5,00</PricingCardFeature>
                  <PricingCardFeature>Pernil + Suco natural</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Faça Seu Pedido</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiHamShank />
                </PricingCardIcon>
                <PricingCardPlan>Frango</PricingCardPlan>
                <PricingCardCost>R$ 25,00</PricingCardCost>
                <PricingCardLength>Por kilo</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Prato toda Quarta-feira</PricingCardFeature>
                  <PricingCardFeature>2 pessoas economia de R$ 10,00</PricingCardFeature>
                  <PricingCardFeature>Frango + Salada de Frutas</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Faça Seu Pedido</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiFriedFish /> 
                </PricingCardIcon>
                <PricingCardPlan>Salmão</PricingCardPlan>
                <PricingCardCost>R$ 25,00</PricingCardCost>
                <PricingCardLength>Por kilo</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Prato toda Sexta-feira</PricingCardFeature>
                  <PricingCardFeature>2 pessoas economia de R$ 10,00</PricingCardFeature>
                  <PricingCardFeature>Salmão + Suco Natural</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Faça Seu Pedido</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
