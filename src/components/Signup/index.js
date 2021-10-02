import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
} from './SignupElements';

const APIUrl = 'https://api.jarvis-app.fr/api/newsletter/add';

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    await toast.promise(
      fetch(APIUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => { 
        console.log('Success:', data)
      })
      .catch(error => { 
        console.error('Error:', error)
      }),
      {
        pending: 'Inscription en cours',
        success: 'Vous êtes inscrit !',
        error: 'Oups, une erreur a eu lieu...'
      }
    )
  }

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
                {...register('lastname')}
                placeholder='Votre nom...'
                required
              />
              <FormLabel htmlFor='for'>Prénom</FormLabel>
              <FormInput
                {...register('firstname')}
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
      <ToastContainer 
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default SignUp;