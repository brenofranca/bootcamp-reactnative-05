import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: metrics.baseMargin * 2,
  },
  buttonCancel: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius,
    flex: 1,
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
    padding: metrics.basePadding / 2,
  },
  buttonCancelText: {
    color: colors.white,
  },
  buttonSuccess: {
    alignItems: 'center',
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    borderWidth: 0,
    color: colors.white,
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding / 2,
  },
  buttonSuccessText: {
    color: colors.white,
  },
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.darkerTransparent,
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding,
  },
  form: {
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    marginTop: metrics.baseMargin * 2,
    padding: metrics.basePadding,
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    height: 45,
    paddingHorizontal: metrics.basePadding,
  },
  outputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin * 2,
  },
  outputTextError: {
    color: colors.danger,
  },
  outputTextSuccess: {
    color: colors.secundary,
  },
  title: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin * 2,
    textAlign: 'center',
  },
});

export default styles;
