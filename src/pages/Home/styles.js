import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding * 2,
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default styles;
