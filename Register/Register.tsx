import React, { useRef } from 'react';

import Input from '../../components/Input/Input';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Subtitle from '../../components/Subtitle/Subtitle';

import { Form } from '@unform/mobile';
import { FormHandles } from "@unform/core";

import {Container,FormView,InputView,ButtonView,TitleView} from './Register.styles';

import { useNavigation } from '@react-navigation/core';

import * as Yup from "yup";
import axios, { AxiosError } from 'axios';
import getValidationErrors from '../../utils/getValidationErrors';

interface DataItems {
  name: string
  email: string
  number: string
}


const Register: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation()

  async function handleRegister(data:DataItems){
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail obrigatório"),
        number: Yup.string().required()
      });


      await schema.validate(data, {
        abortEarly: false,
      });
      navigation.navigate('Meet')

    } catch (err: any | AxiosError) {
      if(axios.isAxiosError(err)){
        console.log(err)
      }

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }

    return(
        <Container>
        <Header title="Cadastro" />
        <TitleView>
          <Heading title="Bem-vindo!" type="h3" />
          <Subtitle title="Preencha seus dados para ter 7 dias de graça:" type="small" />
        </TitleView>

        <Form ref={formRef} onSubmit={handleRegister}>
            <FormView>
              <InputView>
                <Input
                    name="name"
                    span="Como gostaria de ser chamado?"
                    placeholder="Como gostaria de ser chamado?"
                    textError="Nome inválido"
                    autoCorrect={false}
                    returnKeyType="next"
                />

                <Input
                  name="email"
                  span="Digite seu e-mail"
                  placeholder="Digite seu e-mail"
                  textError="E-mail inválido"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                />
                <Input
                  name="number"
                  span="Digite o número do seu celular"
                  placeholder="Digite o número do seu celular"
                  textError="Número de telefone inválido"
                  keyboardType="numeric"
                  onSubmitEditing={() => {
                    formRef.current?.submitForm();
                  }}
                />
              </InputView>

              <ButtonView>
                <ButtonPrimary size="large" title="Continuar" onPress={() => formRef.current?.submitForm()} />
              </ButtonView>
            </FormView>
        </Form>

  </Container>
    );
}
export default Register;