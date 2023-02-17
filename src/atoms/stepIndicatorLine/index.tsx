import { View } from 'react-native';
import { colors } from 'globalStyles/colors';
import styles from './styles';
import type { FC } from 'react';

interface StepIndicatorLineAtomProps {
  w: number | string;
  enabled?: boolean;
}

// eslint-disable-next-line id-length
const StepIndicatorLineAtom: FC<StepIndicatorLineAtomProps> = ({ w, enabled }) => (
  <View
    style={[
      styles.line,
      enabled ? { backgroundColor: colors.PRIMARY } : { backgroundColor: colors.LIGHT_GRAY },
      { width: w }
    ]}
  />
);

export default StepIndicatorLineAtom;
