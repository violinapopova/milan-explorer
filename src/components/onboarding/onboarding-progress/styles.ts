import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 4,
  },
  segment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
  },
  segmentDone: {
    backgroundColor: 'rgba(13, 107, 74, 0.35)',
  },
  segmentActive: {
    backgroundColor: colors.accentGreen,
    height: 8,
  },
  segmentUpcoming: {
    opacity: 0.7,
  },
});
