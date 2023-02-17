import { View } from 'react-native';
import { handleStep } from 'store/slices/Form';
import { useAppSelector } from 'store/store';
import { useDispatch } from 'react-redux';
import StepIndicatorBallAtom from 'atoms/stepIndicatorBall';
import StepIndicatorLineAtom from 'atoms/stepIndicatorLine';
import styles from './styles';
import type { FC } from 'react';

const StepIndicatorMolecule: FC = () => {
  const { step } = useAppSelector((state) => state.form);

  const dispatch = useDispatch();

  const valueToAddInStep = 1;

  return (
    <View style={styles.container}>
      {Array.from({ length: step.quantity }).map((_, index) => {
        const isActiveStep = step.activeStep >= index + valueToAddInStep;

        return (
          <>
            <StepIndicatorBallAtom
              enabled={isActiveStep}
              onPress={(): { payload: number; type: 'form/handleStep' } =>
                dispatch(handleStep(index + valueToAddInStep))
              }
              value={index + valueToAddInStep}
            />

            {step.quantity !== index + valueToAddInStep && <StepIndicatorLineAtom w={45} />}
          </>
        );
      })}
    </View>
  );
};

export default StepIndicatorMolecule;
