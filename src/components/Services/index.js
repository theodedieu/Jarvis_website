import React from 'react';
import Icon1 from '../../images/undraw_healthy_habit_bh5w.png';
import Icon2 from '../../images/undraw_healthy_habit_bh5w.png';
import Icon3 from '../../images/undraw_healthy_habit_bh5w.png';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>Lorem ipsum</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>Lorem ipsum</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>Lorem ipsum</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
};

export default Services;