import { StyleSheet } from 'react-native';
import { colors } from 'globalStyles/colors';
import { fonts } from 'globalStyles/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%'
  },

  input: {
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: 10,
    color: colors.GRAY,
    fontFamily: fonts.BOLD,
    fontSize: 16,
    height: 50,
    padding: 10,
    width: '100%'
  }
});

export default styles;
