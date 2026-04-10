import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { ExplorerMeter } from '../../components/explorer-meter/ExplorerMeter';
import { FeaturedCard } from '../../components/featured-card/FeaturedCard';
import { ItalianHeader } from '../../components/italian-header/ItalianHeader';
import { PlaceCard } from '../../components/place-card/PlaceCard';
import { SearchBar } from '../../components/search-bar/SearchBar';
import { featuredPlaces, places } from '../../data/places';
import type { RootStackParamList } from '../../navigation/types';
import { styles } from './styles';

export function DiscoverScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return places;
    return places.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }, [query]);

  const goDetail = (id: string) => navigation.navigate('Detail', { id });

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <ItalianHeader />
      <SearchBar value={query} onChangeText={setQuery} />
      <ExplorerMeter query={query} />
      <Text style={styles.sectionLabel}>Featured</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredRow}
      >
        {featuredPlaces.map((p) => (
          <FeaturedCard key={p.id} place={p} onPress={() => goDetail(p.id)} />
        ))}
      </ScrollView>
      <Text style={styles.sectionLabel}>Curated for you</Text>
      {filtered.map((p) => (
        <PlaceCard key={p.id} place={p} onExplore={() => goDetail(p.id)} />
      ))}
    </ScrollView>
  );
}
