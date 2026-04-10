import { Animated, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function getBackButtonTop(insetTop: number): ViewStyle {
  return { top: Math.max(insetTop, 12) };
}

export function getHeartScaleStyle(scale: Animated.Value) {
  return {
    transform: [{ scale }],
  };
}

export const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  scrollContent: { paddingBottom: 40 },
  heroWrap: {
    height: 280,
    backgroundColor: colors.border,
  },
  hero: { width: '100%', height: '100%' },
  backBtn: {
    position: 'absolute',
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  sheet: {
    marginTop: -24,
    backgroundColor: colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  title: { marginBottom: 12, fontSize: 30 },
  longDesc: { marginBottom: 24 },
  infoCard: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  infoTitle: {
    ...typography.label,
    color: colors.accentGreen,
    marginBottom: 12,
  },
  infoRow: {
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  infoRowLast: { borderBottomWidth: 0 },
  infoLabel: { ...typography.caption, marginBottom: 4, fontWeight: '600', color: colors.textSecondary },
  infoValue: { ...typography.body, color: colors.textPrimary },
  favWrap: {
    position: 'relative',
    overflow: 'visible',
  },
  favBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 14,
  },
  favInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  collectionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 14,
    paddingHorizontal: 4,
  },
  collectionText: {
    ...typography.caption,
    flex: 1,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  favIos: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.accentGreen,
  },
  favAndroid: {
    backgroundColor: colors.surface,
    elevation: 2,
    borderWidth: 0,
    borderTopWidth: 0,
    shadowColor: 'transparent',
  },
  favActive: {
    backgroundColor: colors.accentGreen,
    borderColor: colors.accentGreen,
    elevation: 0,
  },
  favPressed: { opacity: 0.88 },
  favLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.accentGreen,
  },
  favLabelIos: { letterSpacing: -0.2 },
  favLabelActive: { color: colors.italyWhite },
  missing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colors.background,
    gap: 16,
  },
  backChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.accentGreen,
  },
  backChipText: { color: '#fff', fontWeight: '600' },
});
