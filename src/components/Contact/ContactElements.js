import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { jarvisBlue, jarvisLightBlue, white } from '../constants';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(145deg, ${jarvisBlue} 0%, ${jarvisLightBlue} 100%);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  text-decoration: none;
  color: #010101;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
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

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: ${white};
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px ${jarvisLightBlue};

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #010101;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #010101;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: 2px solid ${white};
  border-bottom: 2px solid ${jarvisBlue};
  border-radius: 4px;
  transition: 0.3s;
  outline: none;

  &:focus {
    border: 2px solid ${jarvisBlue};
  }
`;

export const FormInputArea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: 2px solid ${white};
  border-bottom: 2px solid ${jarvisBlue};
  border-radius: 4px;
  transition: 0.3s;
  outline: none;
  resize: none;

  ::placeholder {
    font-family: sans-serif;
  }

  &:focus {
    border: 2px solid ${jarvisBlue};
  }
`;

export const FormButton = styled.button`
  background: #7482ff;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #010101;
  font-size: 14px;
`;