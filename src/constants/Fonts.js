import Layout from './Layout';
const type = {
  regular: Layout.isAndroid ? 'Roboto' : 'Arial',
  medium: Layout.isAndroid ? 'Roboto' : 'Arial',
  bold: Layout.isAndroid ? 'Roboto' : 'Arial',
};

const size = {
  input: 18,

  xxLarge: 42,
  xLarge: 24,
  large: 20,
  regular: 16,
  medium: 14,
  small: 12,
  extraSmall: 10,
  tiny: 8,
  extraTiny: 6,
};

const style = {};

export default {
  ...type,
  type,
  size,
  style,
};
