import { Text } from 'react-native';
import styles from './styles';
import type { FC } from 'react';

interface SubTitleLabelAtomProps {
  text: string;
}

const SubTitleLabelAtom: FC<SubTitleLabelAtomProps> = ({ text }) => (
  <Text style={styles.title}>{text}</Text>
);

export default SubTitleLabelAtom;
