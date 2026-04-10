import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingBottom: 32 },
  sectionLabel: {
    ...typography.label,
    marginLeft: 20,
    marginBottom: 12,
    marginTop: 4,
    color: colors.accentGreen,
  },
  featuredRow: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
});
