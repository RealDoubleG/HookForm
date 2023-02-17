import { KeyboardAvoidingView } from 'react-native';
import { useAppSelector } from 'store/store';

import FirstStepOrganism from '../../organisms/firstStep';
import SecondStepOrganism from '../../organisms/secondStep';
import ThirdStepOrganism from '../../organisms/thirdStep';

const RegisterTemplate = () => {
  const { step } = useAppSelector((state) => state.form);

  return (
    <KeyboardAvoidingView style={{ height: '100%', width: '100%' }}>
      {step.activeStep === 1 ? (
        <FirstStepOrganism />
      ) : step.activeStep === 2 ? (
        <SecondStepOrganism />
      ) : (
        <ThirdStepOrganism />
      )}
    </KeyboardAvoidingView>
  );
};

export default RegisterTemplate;
