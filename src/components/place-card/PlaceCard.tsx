import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import { typography } from '../../theme/typography';
import { StarRating } from '../star-rating';
import { PlaceCardProps } from './props';
import { styles } from './styles';

export function PlaceCard({ place, onExplore }: PlaceCardProps) {
  return (
    <View style={styles.shadowOuter} accessibilityLabel={place.title}>
      <View style={styles.card}>
        <Image source={{ uri: place.imageUrl }} style={styles.image} contentFit="cover" transition={200} />
        <View style={styles.body}>
          <Text style={[typography.title, styles.cardTitle]} numberOfLines={2}>
            {place.title}
          </Text>
          <Text style={[typography.body, styles.desc]} numberOfLines={2}>
            {place.description}
          </Text>
          <View style={styles.row}>
            <StarRating rating={place.rating} />
          </View>
          <Pressable
            onPress={onExplore}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            accessibilityRole="button"
            accessibilityLabel={`Explore ${place.title}`}
          >
            <Text style={styles.buttonLabel}>Explore</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
