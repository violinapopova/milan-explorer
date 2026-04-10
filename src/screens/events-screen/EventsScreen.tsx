import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlaceCard } from '../../components/place-card/PlaceCard';
import { places } from '../../data/places';
import type { RootStackParamList } from '../../navigation/types';
import { typography } from '../../theme/typography';
import { styles } from './styles';

export function EventsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const events = places.filter((p) => p.category === 'event');

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={[typography.display, styles.title]}>Events</Text>
        <Text style={styles.sub}>Runways, openings, and Milanese cultural moments.</Text>
      </View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <PlaceCard place={item} onExplore={() => navigation.navigate('Detail', { id: item.id })} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No events in this demo dataset.</Text>
        }
      />
    </SafeAreaView>
  );
}
