/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#161616';
const tintColorDark = '#F0F3F4';

export const Colors = {
  light: {
    text: '#171717',
    background: '#F0F3F4',
    cardBackground:'#FFFFFF',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    red: '#EA8867',
    blue: '#6390EB',
    yellow: '#F5C65F',
    green: '#8BC34A',
  },
  dark: {
    text: '#D3D3D3',
    background: '#161616',
    cardBackground:'#2C2C2C',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    red: '#EA8867',
    blue: '#6390EB',
    yellow: '#F5C65F',
    green: '#8BC34A',
  },

  borderColors: {
    red: '#EA8867',
    blue: '#6390EB',
    yellow: '#F5C65F',
    green: '#67AF7E',
  }
};