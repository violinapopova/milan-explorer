import { Animated, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function getTierBadgeStyle(tierColors: { bg: string; border: string }): ViewStyle {
  return {
    backgroundColor: tierColors.bg,
    borderColor: tierColors.border,
  };
}

export function getTierLabelColor(accent: string): TextStyle {
  return { color: accent };
}

export function getCompassRotateStyle(
  rotate: Animated.AnimatedInterpolation<string>,
): { transform: { rotate: Animated.AnimatedInterpolation<string> }[] } {
  return { transform: [{ rotate }] };
}

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: 20, paddingBottom: 8 },
  title: { fontSize: 26 },
  sub: { ...typography.caption, marginTop: 6, color: colors.textSecondary },
  tierBadge: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 14,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1.5,
  },
  tierTextCol: { flex: 1 },
  tierLabel: {
    ...typography.label,
    marginBottom: 4,
  },
  tierSub: {
    ...typography.caption,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  list: { paddingBottom: 32 },
  emptyContainer: { flexGrow: 1 },
  emptyInner: {
    paddingHorizontal: 32,
    paddingTop: 48,
    alignItems: 'center',
  },
  emptyTitle: {
    ...typography.title,
    textAlign: 'center',
    marginBottom: 12,
  },
  emptyBody: {
    ...typography.body,
    textAlign: 'center',
    color: colors.textSecondary,
    maxWidth: 320,
    marginBottom: 28,
  },
  compassBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  compassBtnPressed: { opacity: 0.85 },
  compassHint: {
    ...typography.caption,
    marginTop: 10,
    color: colors.accentGreen,
    fontWeight: '600',
  },
});
