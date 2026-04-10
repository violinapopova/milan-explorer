import { Animated, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function getIntroTopBarPadding(insetTop: number): ViewStyle {
  return { paddingTop: Math.max(insetTop, 12) };
}

export function getIntroScrollPaddingBottom(insetBottom: number): ViewStyle {
  return { paddingBottom: Math.max(insetBottom, 24) };
}

export function getIntroProgressFillWidth(formProgress: number): ViewStyle {
  return { width: `${formProgress * 100}%` };
}

export function getRocketLottieSize(windowW: number, windowH: number) {
  return {
    width: windowW - 32,
    height: Math.min(windowH * 0.62, windowW * 1.1),
  };
}

export function getLottieOverlayPadding(insetBottom: number): ViewStyle {
  return { paddingBottom: Math.max(insetBottom, 16) };
}

export function getRewardAnimatedStyle(opacity: Animated.Value, scale: Animated.Value) {
  return {
    opacity,
    transform: [{ scale }],
  };
}

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.splashLightYellow,
  },
  flex: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    zIndex: 2,
  },
  topLeft: {
    width: 44,
    alignItems: 'flex-start',
  },
  iconBtn: {
    padding: 8,
  },
  iconBtnPlaceholder: {
    width: 40,
    height: 40,
  },
  progressSlot: {
    flex: 1,
    paddingHorizontal: 8,
    alignItems: 'stretch',
    gap: 6,
  },
  stepIndicator: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: 0.2,
    alignSelf: 'center',
  },
  skip: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    minWidth: 56,
    alignItems: 'flex-end',
  },
  skipPlaceholder: {
    minWidth: 56,
  },
  skipText: {
    ...typography.label,
    fontSize: 13,
    color: colors.accentGreen,
  },
  pressed: { opacity: 0.75 },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  heroBlock: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.85)',
  },
  stepPill: {
    alignSelf: 'center',
    backgroundColor: 'rgba(13, 107, 74, 0.12)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },
  stepPillText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accentGreen,
    letterSpacing: 0.2,
  },
  bootRow: {
    alignItems: 'center',
    marginBottom: 12,
  },
  bootSmall: {
    width: 100,
    height: 140,
  },
  stepTitle: {
    ...typography.title,
    fontSize: 24,
    color: colors.textPrimary,
    marginBottom: 8,
    textAlign: 'center',
  },
  stepSub: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.textSecondary,
  },
  stepSubHero: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: 0,
    color: colors.textSecondary,
  },
  fieldLabel: {
    ...typography.label,
    color: colors.accentGreen,
    marginBottom: 8,
    fontWeight: '700',
  },
  fieldLabelSpaced: {
    marginTop: 16,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(26, 26, 26, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.textPrimary,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  chipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  chip: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  chipOn: {
    borderColor: colors.accentGreen,
    backgroundColor: colors.accentGreen,
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  chipPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  chipTextOn: {
    color: colors.italyWhite,
  },
  progressTrackWrap: {
    position: 'relative',
    marginTop: 4,
    marginBottom: 8,
    minHeight: 52,
    justifyContent: 'center',
  },
  progressTrack: {
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  sparkLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    marginTop: -26,
    height: 52,
    zIndex: 2,
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: colors.accentGreen,
  },
  progressMeta: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  rewardBanner: {
    alignItems: 'center',
    marginBottom: 4,
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 8,
  },
  rewardText: {
    ...typography.body,
    fontWeight: '700',
    color: colors.accentGreen,
    textAlign: 'center',
    flexShrink: 1,
    maxWidth: 260,
  },
  checkboxBlock: {
    marginTop: 8,
    paddingVertical: 8,
  },
  sparkAnchorCheckbox: {
    position: 'relative',
    minHeight: 72,
    justifyContent: 'center',
  },
  sparkLayerCheckbox: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 4,
  },
  toggleBlock: {
    marginTop: 12,
    marginBottom: 12,
  },
  sparkAnchorToggle: {
    position: 'relative',
    minHeight: 100,
    justifyContent: 'center',
  },
  sparkLayerToggle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 4,
  },
  successHint: {
    ...typography.caption,
    color: colors.accentGreen,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
  },
  mutedHint: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 8,
  },
  primaryBtnWrap: {
    marginTop: 18,
    borderRadius: 16,
    shadowColor: '#1A1A1A',
    shadowOpacity: 0.14,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  primaryBtn: {
    backgroundColor: colors.accentGreen,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryBtnDisabled: {
    opacity: 0.45,
  },
  primaryBtnPressed: {
    opacity: 0.94,
    transform: [{ scale: 0.98 }],
  },
  primaryBtnText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.italyWhite,
    letterSpacing: 0.3,
  },
  lottieOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    backgroundColor: colors.splashLightYellow,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});
