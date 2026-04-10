import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  wrap: {
    width: '100%',
  },
  hint: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  track: {
    borderRadius: 16,
    backgroundColor: colors.background,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    overflow: 'hidden',
    minHeight: 52,
    justifyContent: 'center',
  },
  thumb: {
    position: 'absolute',
    left: 0,
    top: 4,
    bottom: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(13, 107, 74, 0.18)',
    zIndex: 0,
  },
  labels: {
    flexDirection: 'row',
    zIndex: 1,
  },
  half: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfPressed: {
    opacity: 0.85,
  },
  sideLabel: {
    ...typography.body,
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMuted,
  },
  sideLabelActive: {
    color: colors.accentGreen,
  },
});
