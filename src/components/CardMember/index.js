import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  CardContainer,
  CardH1,
  CardWrapper,
  MemberIcon
} from './CardMemberElements';
import {
  ServicesCard,
  ServicesP,
} from '../Services/ServicesElements';

import Arthur from '../../images/team/jarvis_arthur.png';
import Camille from '../../images/team/jarvis_camille.png';
import Cyril from '../../images/team/jarvis_cyril.png';
import Guillaume from '../../images/team/jarvis_guillaume.png';
import Louis from '../../images/team/jarvis_louis.png';
import Theo from '../../images/team/jarvis_theo.png';

const TEAM = [
  {
    name: 'Camille Bouzerand',
    role: 'Développeur Front-end',
    img: Camille
  },
  {
    name: 'Arthur Dassier',
    role: 'Ingénieur DevOps',
    img: Arthur
  },
  {
    name: 'Théo Dedieu',
    role: 'Développeur Fullstack',
    img: Theo
  },
  {
    name: 'Guillaume Loiseleux',
    role: 'Développeur Fullstack',
    img: Guillaume
  },
  {
    name: 'Cyril Mammar',
    role: 'Développeur Back-end',
    img: Cyril
  },
  {
    name: 'Louis Nicaud',
    role: 'Développeur Back-end',
    img: Louis
  },
]

const Services = () => {
  return (
    <CardContainer id='team'>
      <CardWrapper>
        <Fade bottom cascade>
          {TEAM.map((item, index) => 
            <ServicesCard id={index}>
              <MemberIcon src={item.img} />
              <CardH1>{item.name}</CardH1>
              <ServicesP>{item.role}</ServicesP>
            </ServicesCard>
          )}
        </Fade>
      </CardWrapper>
    </CardContainer>
  )
};

export default Services;