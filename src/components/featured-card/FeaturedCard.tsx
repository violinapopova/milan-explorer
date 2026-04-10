import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import { typography } from '../../theme/typography';
import { FeaturedCardProps } from './props';
import { styles } from './styles';

export function FeaturedCard({ place, onPress }: FeaturedCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`Featured: ${place.title}`}
    >
      <Image source={{ uri: place.imageUrl }} style={styles.image} contentFit="cover" transition={200} />
      <View style={styles.overlay} />
      <Text style={[typography.headline, styles.title]} numberOfLines={2}>
        {place.title}
      </Text>
    </Pressable>
  );
}
