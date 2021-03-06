import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Le partenaire qui vous réapprend à vivre avec votre diabète</HeroH1>
        <HeroP>
          Inscrivez-vous pour suivre l’actualité de Jarvis
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='/signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={false}
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
            >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              Découvrir {hover ? <ArrowForward /> : <ArrowRight />}
            </div>
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;