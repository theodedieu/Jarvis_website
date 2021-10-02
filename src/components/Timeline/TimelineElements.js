import styled from 'styled-components';
import { jarvisBlue, jarvisLightBlue } from '../constants';

export const TimelineContainer = styled.div`
  background: linear-gradient(130deg, ${jarvisBlue} 0%, ${jarvisLightBlue} 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;