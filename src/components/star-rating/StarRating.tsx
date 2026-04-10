import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { StarRatingProps } from './props';
import { styles } from './styles';

export function StarRating({ rating }: StarRatingProps) {
  const rounded = Math.min(5, Math.max(0, Math.round(rating)));
  return (
    <View style={styles.row} accessibilityLabel={`Rating ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Ionicons
          key={i}
          name={i <= rounded ? 'star' : 'star-outline'}
          size={15}
          color={colors.star}
          style={styles.star}
        />
      ))}
      <Text style={styles.num}>{rating.toFixed(1)}</Text>
    </View>
  );
}
