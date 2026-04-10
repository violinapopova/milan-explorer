import { Platform, TextStyle } from 'react-native';

export const typography = {
  display: {
    fontFamily: Platform.select({
      ios: 'PlayfairDisplay_700Bold',
      android: 'PlayfairDisplay_700Bold',
      default: 'serif',
    }),
    fontSize: 28,
    letterSpacing: -0.5,
    color: '#1A1A1A',
  } satisfies TextStyle,
  title: {
    fontFamily: Platform.select({
      ios: 'PlayfairDisplay_600SemiBold',
      android: 'PlayfairDisplay_600SemiBold',
      default: 'serif',
    }),
    fontSize: 22,
    letterSpacing: -0.3,
    color: '#1A1A1A',
  } satisfies TextStyle,
  headline: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1A1A1A',
  } satisfies TextStyle,
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: '#5C5C5C',
  } satisfies TextStyle,
  caption: {
    fontSize: 13,
    lineHeight: 18,
    color: '#8E8E8E',
  } satisfies TextStyle,
  label: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.4,
    textTransform: 'uppercase' as const,
    color: '#8E8E8E',
  } satisfies TextStyle,
};
