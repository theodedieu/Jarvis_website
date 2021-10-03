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
  FormInputArea,
  FormLabel,
  FormWrap,
  Icon
} from './ContactElements';

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
        pending: 'Envoi en cours',
        success: 'Votre message a bien été envoyé !',
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
              <FormH1>Contactez-nous</FormH1>
              <FormLabel htmlFor='for'>Nom</FormLabel>
              <FormInput
                {...register('lastname')}
                placeholder='Votre nom...'
                required
              />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                {...register('email')}
                placeholder='Votre addresse mail...'
                required
              />
              <FormLabel htmlFor='for'>Message</FormLabel>
              <FormInputArea
                {...register('message')}
                maxLength={2500}
                placeholder='Votre message...'
                required
                rows={7}
              />
              <FormButton type='submit'>Envoyer</FormButton>
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