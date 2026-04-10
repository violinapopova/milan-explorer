import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export function getExplorerFillWidth(pct: number): ViewStyle {
  return { width: `${pct}%` };
}

export const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 20,
    marginTop: -12,
    marginBottom: 16,
  },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: colors.accentGreen,
  },
  caption: {
    ...typography.caption,
    marginTop: 8,
    color: colors.textSecondary,
  },
});
