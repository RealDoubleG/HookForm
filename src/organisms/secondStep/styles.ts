import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '50%',
    justifyContent: 'space-between',
    minHeight: 380,
    width: '100%'
  },

  formContainer: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    minHeight: 520,
    width: '100%'
  },

  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingRight: 30,
    width: '100%'
  }
});

export default styles;
