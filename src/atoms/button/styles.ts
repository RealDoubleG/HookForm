import { StyleSheet } from 'react-native';
import { colors } from 'globalStyles/colors';
import { fonts } from 'globalStyles/fonts';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.SECONDARY,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    width: '100%'
  },

  text: {
    color: '#FFF',
    fontFamily: fonts.BOLD,
    fontSize: 19
  }
});

export default styles;
