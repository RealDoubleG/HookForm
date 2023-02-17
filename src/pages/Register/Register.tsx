import { ImageBackground } from 'react-native';
import React from 'react';
import RegisterTemplate from 'templates/register';
import imageBackground from 'assets/images/bg.png';
import styles from './styles';

import type { FC } from 'react';

const Register: FC = () => (
  <ImageBackground source={imageBackground} style={styles.container}>
    <RegisterTemplate />
  </ImageBackground>
);

export default Register;
