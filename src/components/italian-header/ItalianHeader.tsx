import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { typography } from '../../theme/typography';
import { getItalianHeaderWrap, styles } from './styles';

export function ItalianHeader() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.wrap, getItalianHeaderWrap(insets.top)]}>
      <View style={styles.stripes} accessibilityLabel="Italian flag accent">
        <View style={styles.stripeGreen} />
        <View style={styles.stripeWhite} />
        <View style={styles.stripeRed} />
      </View>
      <View style={styles.titleBlock}>
        <Text style={[typography.display, styles.title]}>Milano Explorer</Text>
        <Text style={styles.subtitle}>Your refined guide to the city</Text>
      </View>
    </View>
  );
}
