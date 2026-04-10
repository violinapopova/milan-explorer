import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: 20, paddingBottom: 8 },
  title: { fontSize: 26 },
  sub: { ...typography.caption, marginTop: 6, color: colors.textSecondary },
  list: { paddingBottom: 32 },
  empty: { ...typography.body, textAlign: 'center', marginTop: 40, paddingHorizontal: 24 },
});
