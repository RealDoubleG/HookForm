import * as React from 'react';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { NativeBaseProvider, useToast } from 'native-base';
import { ScrollView, Text, View } from 'react-native';
import { handleForm } from 'store/slices/Form';
import { useAppSelector } from 'store/store';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonAtom from 'atoms/button';
import LogoAtom from 'atoms/logo';
import StepIndicatorMolecule from 'molecules/stepIndicator';
import SubTitleLabelAtom from 'atoms/subTitleLabel';
import TextInputAtom from 'atoms/textInput';
import TitleLabelAtom from 'atoms/titleLabel';
import styles from './styles';

const regex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/u;

const minCPFlenth = 11;

const validationSchema = yup.object().shape({
  cpf: yup
    .string()
    .required('Digite um cpf')
    .min(minCPFlenth, 'Informe todos os valores do cpf')
    .matches(regex, 'Informe um cpf válido')
});

export default () => {
  const { form } = useAppSelector((state) => state.form);

  const dispatch = useDispatch();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    clearErrors,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      cpf: ''
    },
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data) => {
    dispatch(
      handleForm({
        formStep: 2,
        key: 'cpf',
        value: data.cpf
      })
    );
  };

  const onChange = (arg) => ({
    value: arg.nativeEvent.text
  });

  const toast = useToast();

  const onError = (errors) => console.log(errors);

  React.useEffect(() => {
    console.log(form.cpf);
  }, [form]);

  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
        <View />

        <View style={styles.container}>
          <LogoAtom />
          <StepIndicatorMolecule />
          <Text>{errors.cpf?.message}</Text>

          <View style={styles.textContainer}>
            <TitleLabelAtom text={'Informe seu CPF'} />
            <SubTitleLabelAtom text={'Informe sua data de nascimento no'} />
            <SubTitleLabelAtom text={'campo abaixo:'} />
          </View>

          <Controller
            control={control}
            name={'cpf'}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputAtom
                mask={'999.999.999-99'}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={form.cpf !== '' ? form.cpf : value}
                placeHolder={'CPF'}
                // value={value}
                valueWithMask={false}
              />
            )}
            rules={{ required: true }}
          />
        </View>

        <ButtonAtom onPress={handleSubmit(onSubmit, onError)} text={'verificar'} />
      </ScrollView>
    </NativeBaseProvider>
  );
};
