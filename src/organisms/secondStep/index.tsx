import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';
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

const regex =
  /^(?:[0-2][0-9]|(?:3)[0-1])(?:\/)(?<temp5>(?<temp4>(?<temp3>0)[0-9])|(?<temp2>(?:1)[0-2]))(?<temp1>\/)\d{4}$/u;

const schema = yup.object().shape({
  birthDate: yup.string().required('Digite uma data').matches(regex, 'informe uma data válida')
});

const SecondStepOrganism: FC = () => {
  const { form } = useAppSelector((state) => state.form);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      birthDate: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    dispatch(
      handleForm({
        formStep: 3,
        key: 'birthDate',
        value: data.birthDate
      })
    );
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-shadow, @typescript-eslint/no-explicit-any, unused-imports/no-unused-vars
  const onError = (errors: any, event: any) => console.log(errors);

  React.useEffect(() => {
    console.log('opa', form.birthDate);
  }, [form]);

  console.log(watch('birthDate'));

  return (
    <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
      <View />

      <View style={styles.container}>
        <LogoAtom />
        <StepIndicatorMolecule />
        <Text>{errors.birthDate?.message}</Text>

        <View style={styles.textContainer}>
          <TitleLabelAtom text={'Para termos certeza que é você:'} />
          <SubTitleLabelAtom text={'Informe sua data de nascimento no campo abaixo:'} />
        </View>

        <Controller
          control={control}
          name={'birthDate'}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputAtom
              mask={'99/99/9999'}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              placeHolder={'Data de nascimento'}
              value={form.birthDate !== '' ? form.birthDate : value}
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

export default SecondStepOrganism;
