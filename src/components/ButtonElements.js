import styled from 'styled-components';
import { Link } from 'react-scroll';
import { jarvisBlue, jarvisLightBlue, white } from './constants';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? jarvisBlue : jarvisLightBlue)};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : white)};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer:
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    flex-direction: column;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? jarvisLightBlue : jarvisBlue)};
    }
`;