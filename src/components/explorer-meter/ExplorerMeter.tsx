import { Text, View } from 'react-native';
import { getExplorerMeterState } from '../../utils/explorerMeter';
import { ExplorerMeterProps } from './props';
import { getExplorerFillWidth, styles } from './styles';

/** Search “progress” — turns typing into a light explorer mini-game. */
export function ExplorerMeter({ query }: ExplorerMeterProps) {
  const { pct, caption } = getExplorerMeterState(query);

  return (
    <View style={styles.wrap} accessibilityLabel={`Explorer progress ${pct} percent`}>
      <View style={styles.track}>
        <View style={[styles.fill, getExplorerFillWidth(pct)]} />
      </View>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
}
