import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon
} from './SigninElements';

const SignIn = () => {
  // const [email, setEmail] = useState(null);
  // const [fname, setFname] = useState(null);
  // const [lname, setLname] = useState(null);
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Icon to='/'>Jarvis</Icon>
              <FormH1>Inscrivez-vous</FormH1>
              <FormLabel htmlFor='for'>Nom</FormLabel>
              <FormInput
                {...register('lastName')}
                placeholder='Votre nom...'
                required
              />
              <FormLabel htmlFor='for'>Prénom</FormLabel>
              <FormInput
                {...register('firstName')}
                placeholder='Votre prénom...'
                required
              />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                {...register('email')}
                placeholder='Votre addresse mail...'
                required
              />
              {/* <FormLabel htmlFor='for'>Mot de passe</FormLabel>
              <FormInput type='password' required /> */}
              <FormButton type='submit'>S'inscrire</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;