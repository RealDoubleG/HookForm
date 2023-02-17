import { StyleSheet } from 'react-native';
import { colors } from 'globalStyles/colors';

const styles = StyleSheet.create({
  disabledStepButton: {
    alignItems: 'center',
    borderColor: colors.LIGHT_GRAY,
    borderRadius: 100,
    borderWidth: 2,
    height: 30,
    justifyContent: 'center',
    width: 30
  },

  disabledStepText: {
    fontSize: 16,
    fontWeight: '800'
  },

  stepButton: {
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 100,
    height: 30,
    justifyContent: 'center',
    width: 30
  },

  stepText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800'
  }
});

export default styles;
