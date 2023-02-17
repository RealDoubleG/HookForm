import { Text } from 'react-native';
import styles from './styles';
import type { FC } from 'react';

interface TitleLabelAtomProps {
  text: string;
}

const TitleLabelAtom: FC<TitleLabelAtomProps> = ({ text }) => (
  <Text style={styles.title}>{text}</Text>
);

export default TitleLabelAtom;
