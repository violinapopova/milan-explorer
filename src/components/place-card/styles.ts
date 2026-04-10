import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  shadowOuter: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: colors.surface,
    shadowColor: '#1A1A1A',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: colors.border,
  },
  body: { padding: 16 },
  cardTitle: { marginBottom: 8, fontSize: 20 },
  desc: { marginBottom: 12 },
  row: { marginBottom: 16 },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accentGreen,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonPressed: { opacity: 0.9 },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
