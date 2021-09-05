import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

import { jarvisBlue, jarvisLightBlue, white } from '../constants';

// background: ${({ scrollNav }) => (scrollNav ? white : 'transparent')};
// padding: ${({ scrollNav }) => (scrollNav ? '3px' : '0px')};

export const Nav = styled.nav`
  background: ${white};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  padding: '3px';
  top: 0;
  z-index: 10;
  transition: 0.2s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.img`
  justify-self: flex-start;
  align-self: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  height: 50px;
`;

// export const NavLogo = styled(LinkR)`
//   color: #010606;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
// `;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${white};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

// color: ${({ scrollNav }) => (scrollNav ? '#010606' : white)};
export const NavLinks = styled(LinkS)`
  color: #010606;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${jarvisBlue};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${jarvisBlue};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${white};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${jarvisLightBlue};
  }
`;