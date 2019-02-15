import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: metrics.imageRoudend,
    height: metrics.imageRoudend,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: metrics.imageRoudend / 2,
  },
  annotationFill: {
    width: metrics.imageRoudend,
    height: metrics.imageRoudend,
    borderRadius: metrics.imageRoudend / 2,
    backgroundColor: colors.primary,
    transform: [{ scale: 0.8 }],
  }
});

export default styles;
