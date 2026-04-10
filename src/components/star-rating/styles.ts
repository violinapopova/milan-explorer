import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  star: { marginRight: 2 },
  num: { marginLeft: 8, fontSize: 14, fontWeight: '600', color: colors.textSecondary },
});
