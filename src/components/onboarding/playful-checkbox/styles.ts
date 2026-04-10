import { Animated, StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { typography } from '../../../theme/typography';

export function getRowScaleStyle(scale: Animated.Value) {
  return { transform: [{ scale }] };
}

export function getCheckmarkAnimatedStyle(
  opacity: Animated.Value,
  scale: Animated.AnimatedInterpolation<number>,
) {
  return { opacity, transform: [{ scale }] };
}

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 2.5,
    borderColor: colors.accentGreen,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: colors.accentGreen,
    borderColor: colors.accentGreen,
  },
  label: {
    ...typography.body,
    flex: 1,
    color: colors.textPrimary,
    fontWeight: '500',
    lineHeight: 22,
  },
});
