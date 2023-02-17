import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { handleForm } from 'store/slices/Form';
import { useAppSelector } from 'store/store';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonAtom from 'atoms/button';
import LogoAtom from 'atoms/logo';
import React from 'react';
import StepIndicatorMolecule from 'molecules/stepIndicator';
import SubTitleLabelAtom from 'atoms/subTitleLabel';
import TextInputAtom from 'atoms/textInput';
import TitleLabelAtom from 'atoms/titleLabel';
import styles from './styles';
import type { FC } from 'react';

const regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^(?:[a-zA-Z0-9]{6,15})$/u;

const schema = yup.object().shape({
  password: yup.string().required('Digite a senha').matches(regex, 'Escreva uma senha mais forte'),
  passwordConfirmation: yup
    .string()
    .required('Digite a confirmação de senha')
    .oneOf([yup.ref('password')], 'As senhas não são iguais')
});

const ThirdStepOrganism: FC = () => {
  const { form } = useAppSelector((state) => state.form);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      password: '',
      passwordConfirmation: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    dispatch(
      handleForm({
        formStep: 3,
        key: 'password',
        value: data.password
      })
    );
  };

  const onError = (errors, e) => console.log(errors);

  React.useEffect(() => {
    console.log('opa', form.password);
  }, [form]);

  console.log(watch('password', 'passwordConfirmation'));

  return (
    <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
      <View />

      <View style={styles.container}>
        <LogoAtom />
        <StepIndicatorMolecule />

        <View style={styles.textContainer}>
          <TitleLabelAtom text={'Crie sua nova senha'} />
          <SubTitleLabelAtom text={'Coloque aqui sua nova senha, para poder avançar.'} />
        </View>

        <Controller
          control={control}
          name={'password'}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputAtom
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              placeHolder={'Digite sua senha'}
              value={form.password !== '' ? form.password : value}
              valueWithMask={true}
            />
          )}
          rules={{ required: true }}
        />

        <Controller
          control={control}
          name={'passwordConfirmation'}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputAtom
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              placeHolder={'Confirme sua senha'}
              value={form.password !== '' ? form.password : value}
              valueWithMask={true}
            />
          )}
          rules={{ required: true }}
        />
      </View>

      <ButtonAtom onPress={handleSubmit(onSubmit, onError)} text={'verificar'} />
    </ScrollView>
  );
};

export default ThirdStepOrganism;
