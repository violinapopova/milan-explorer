import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Platform, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { places } from '../../data/places';
import type { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { styles } from './styles';

const MILAN_INITIAL_REGION = {
  latitude: 45.465,
  longitude: 9.185,
  latitudeDelta: 0.09,
  longitudeDelta: 0.09,
};

export function MapScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={[typography.display, styles.headerTitle]}>Map</Text>
        <Text style={styles.headerSub}>Milano — streets and pins in real coordinates</Text>
      </View>
      <View style={styles.mapFrame}>
        <MapView
          style={styles.map}
          initialRegion={MILAN_INITIAL_REGION}
          mapType="standard"
          showsPointsOfInterest
          showsMyLocationButton={false}
          toolbarEnabled={false}
        >
          {places.map((p) => (
            <Marker
              key={p.id}
              coordinate={p.coordinates}
              title={p.title}
              description={p.description}
              tracksViewChanges={false}
              pinColor={Platform.OS === 'ios' ? colors.accentGreen : undefined}
              onPress={() => navigation.navigate('Detail', { id: p.id })}
            />
          ))}
        </MapView>
        <View style={styles.badge} pointerEvents="none">
          <Text style={styles.badgeText}>Milano</Text>
        </View>
      </View>
      <Text style={styles.hint}>Tap a pin to open the guide entry.</Text>
    </SafeAreaView>
  );
}
