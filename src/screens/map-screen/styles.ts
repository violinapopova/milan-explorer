import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: 20, paddingBottom: 12 },
  headerTitle: { fontSize: 26 },
  headerSub: { ...typography.caption, marginTop: 4, color: colors.textSecondary },
  mapFrame: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    backgroundColor: colors.mapRoad,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  badge: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  badgeText: { fontWeight: '700', color: colors.textPrimary, letterSpacing: 0.3 },
  hint: {
    ...typography.caption,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingBottom: 16,
    color: colors.textMuted,
  },
});
