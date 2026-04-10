import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';

export function getItalianHeaderWrap(insetTop: number): ViewStyle {
  return {
    paddingTop: Math.max(insetTop, 12),
  };
}

export const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: colors.background,
    gap: 16,
  },
  stripes: {
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    height: 52,
    width: 10,
  },
  stripeGreen: {
    flex: 1,
    backgroundColor: colors.italyGreen,
  },
  stripeWhite: {
    flex: 1,
    backgroundColor: colors.italyWhite,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  stripeRed: {
    flex: 1,
    backgroundColor: colors.italyRed,
  },
  titleBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    letterSpacing: 0.2,
  },
});
