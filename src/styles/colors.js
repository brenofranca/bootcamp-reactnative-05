import Color from 'color';

export default {
  white: '#FFF',
  lighter: '#f2f2f2',
  light: '#DDD',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  black: '#000',

  primary: '#666666',
  primaryDark: Color('#666666').darken(0.1),
  secundary: '#6ADC00',
  success: '#9DCA83',
  danger: '#E37A7A',

  transparent: 'transparent',
  darkerTransparent: 'rgba(0, 0, 0, 0.6)',
  whiteTransparent: 'rgba(255, 255, 255, 0.3)',
};
