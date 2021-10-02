import styled from 'styled-components';

import { jarvisBlue, jarvisLightBlue } from '../constants';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${jarvisBlue};
  background: linear-gradient(27.5deg, ${jarvisBlue} 0%, ${jarvisLightBlue} 100%);
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const CardH1 = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const CardH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const CardWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const MemberIcon = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 5px grey;
`;