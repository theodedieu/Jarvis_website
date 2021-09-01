import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from './ServicesElements';

import HealthIcon from '../../images/undraw_medicine_b1ol.svg';
import NutritionIcon from '../../images/undraw_healthy_options_sdo3.svg';
import SportIcon from '../../images/undraw_fitness_stats_sht6.svg';

const Services = () => {
  return (
    <ServicesContainer id='features'>
      <ServicesH1>Fonctionnalités</ServicesH1>
      <ServicesWrapper>
        <Fade bottom cascade>
          <ServicesCard>
            <ServicesIcon src={HealthIcon} />
            <ServicesH2>Traitement</ServicesH2>
            <ServicesP>Recevez des alertes glycémiques, paramètrez des rappels de médicament</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={NutritionIcon} />
            <ServicesH2>Alimentation</ServicesH2>
            <ServicesP>Ajoutez vos repas quotidiens et obtenez leurs valeurs caloriques et nutritionnelles</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={SportIcon} />
            <ServicesH2>Activité</ServicesH2>
            <ServicesP>Enregistrez vos activités sportives et obtenez des données statistiques clés</ServicesP>
          </ServicesCard>
        </Fade>
      </ServicesWrapper>
    </ServicesContainer>
  )
};

export default Services;