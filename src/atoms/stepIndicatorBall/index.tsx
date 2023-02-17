import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import type { FC } from 'react';

interface stepIndicatorBallProps {
  enabled?: boolean;
  value: number;
  onPress: () => void;
}

const StepIndicatorBallAtom: FC<stepIndicatorBallProps> = ({ enabled, value, onPress }) =>
  enabled ? (
    <Pressable onPress={(): void => onPress()} style={styles.stepButton}>
      <Text style={styles.stepText}>{value}</Text>
    </Pressable>
  ) : (
    <View style={styles.disabledStepButton}>
      <Text style={styles.disabledStepText}>{value}</Text>
    </View>
  );

export default StepIndicatorBallAtom;
