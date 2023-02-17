import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import type { FC } from 'react';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const ButtonAtom: FC<ButtonProps> = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default ButtonAtom;
