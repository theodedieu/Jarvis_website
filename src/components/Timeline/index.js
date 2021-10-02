import React from 'react';
import { FaMedal, FaTrophy } from 'react-icons/fa';
import { ImMobile } from 'react-icons/im';
import { IoSchool } from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineContainer } from './TimelineElements';
import { ServicesH1 } from '../Services/ServicesElements';
import { jarvisBlue } from '../constants';
import JarvisIcon from '../../images/logo/Jarvis_logo_J_blanc.png';

const Timeline = () => {
  return (
    <TimelineContainer id='timeline'>
      <ServicesH1>Timeline</ServicesH1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: jarvisBlue, color: '#fff' }}
          // contentArrowStyle={{ borderRight: `7px solid  ${jarvisBlue}` }}
          date="Sept. 2019"
          iconStyle={{ background: jarvisBlue, color: '#fff' }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">Création de Jarvis</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: jarvisBlue }}>Piscine Moonshot Epitech</h4>
          <p>
            Idéation du projet lors de la piscine Moonshot d'Epitech
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct. 2019"
          iconStyle={{ background: jarvisBlue, color: '#fff' }}
          icon={<FaMedal />}
        >
          <h3 className="vertical-timeline-element-title">Projet récompensé</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: jarvisBlue }}>Warm-up days Epitech Innovative Projects</h4>
          <p>
            Projet récompensé aux Warm-up days Epitech Innovative Projects
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Déc. 2019"
          iconStyle={{ background: jarvisBlue, color: '#fff', display: 'flex', justifyContent:'center', alignItems:'center' }}
          icon={<img src={JarvisIcon} style={{ height: 30, width: 30 }} alt='jarvisIcon'/>}
        >
          <h3 className="vertical-timeline-element-title">L'identité Jarvis</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: jarvisBlue }}>Partenariat avec e-artsup</h4>
          <p>
            Création de l'identité visuelle de Jarvis et nouveau design de l'application
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Fév. 2020"
          iconStyle={{ background: jarvisBlue, color: '#fff' }}
          icon={<FaTrophy />}
        >
          <h3 className="vertical-timeline-element-title">Élu meilleur projet</h3>
            {/* Jarvis gagnant d'Epitech Experience tek3 */}
          <h4 className="vertical-timeline-element-subtitle" style={{ color: jarvisBlue }}>Epitech Experience tek3</h4>
          <p>
            Jarvis gagnant d'Epitech Experience tek3
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: jarvisBlue, color: '#fff' }}
          // contentArrowStyle={{ borderRight: `7px solid  ${jarvisBlue}` }}
          date="Aout. 2021"
          iconStyle={{ background: jarvisBlue, color: '#fff' }}
          icon={<ImMobile />}
        >
          <h3 className="vertical-timeline-element-title">Lancement Bêta</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: jarvisBlue }}>Première version publique de l'application</h4>
          <p>
            Sortie de la Bêta de Jarvis permettant à des utilisateurs extérieurs de prendre en main l'application afin d'apporter un retour aux équipes Jarvis.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineContainer>
  );
};

export default Timeline;