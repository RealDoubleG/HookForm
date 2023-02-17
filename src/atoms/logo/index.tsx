import { Image } from 'react-native';
import styles from './styles';
import type { FC } from 'react';

import img from 'assets/images/logo.png';

const LogoAtom: FC = () => <Image source={img} style={styles.ImageStyle} />;

export default LogoAtom;
