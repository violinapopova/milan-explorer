import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, type RouteProp } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useCallback, useMemo, useRef } from 'react';
import { Animated, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FavoriteBurst, useFavoriteBurstAnimation } from '../../components/favorite-burst/FavoriteBurst';
import { useFavorites } from '../../context/FavoritesContext';
import { getPlaceById } from '../../data/places';
import type { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { getBackButtonTop, getHeartScaleStyle, styles } from './styles';

const MILAN_CATEGORY_TYPES = 4;

type DetailRoute = RouteProp<RootStackParamList, 'Detail'>;

export function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute<DetailRoute>();
  const insets = useSafeAreaInsets();
  const { id } = route.params;
  const place = getPlaceById(id);
  const { isFavorite, toggleFavorite, favoriteIds } = useFavorites();
  const { progress: burstProgress, play: playBurst } = useFavoriteBurstAnimation();
  const heartScale = useRef(new Animated.Value(1)).current;

  const fav = place ? isFavorite(place.id) : false;

  const uniqueCategoryCount = useMemo(() => {
    if (!place) return 0;
    const ids = fav ? favoriteIds : [...favoriteIds, place.id];
    const set = new Set(ids.map((pid) => getPlaceById(pid)?.category).filter(Boolean));
    return set.size;
  }, [fav, favoriteIds, place]);

  const onFavoritePress = useCallback(() => {
    if (!place) return;
    if (!fav) {
      playBurst();
      heartScale.setValue(1);
      Animated.sequence([
        Animated.spring(heartScale, {
          toValue: 1.22,
          friction: 5,
          tension: 200,
          useNativeDriver: true,
        }),
        Animated.spring(heartScale, {
          toValue: 1,
          friction: 6,
          useNativeDriver: true,
        }),
      ]).start();
    }
    toggleFavorite(place.id);
  }, [fav, heartScale, place, playBurst, toggleFavorite]);

  if (!place) {
    return (
      <View style={styles.missing}>
        <Text style={typography.body}>This place could not be found.</Text>
        <Pressable onPress={() => navigation.goBack()} style={styles.backChip}>
          <Text style={styles.backChipText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  const isIos = Platform.OS === 'ios';

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroWrap}>
          <Image source={{ uri: place.imageUrl }} style={styles.hero} contentFit="cover" transition={300} />
          <Pressable
            onPress={() => navigation.goBack()}
            style={[styles.backBtn, getBackButtonTop(insets.top)]}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Ionicons name="chevron-back" size={24} color={colors.textPrimary} />
          </Pressable>
        </View>

        <View style={styles.sheet}>
          <Text style={[typography.display, styles.title]}>{place.title}</Text>
          <Text style={[typography.body, styles.longDesc]}>{place.longDescription}</Text>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Practical info</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Opening hours</Text>
              <Text style={styles.infoValue}>{place.openingHours}</Text>
            </View>
            <View style={[styles.infoRow, styles.infoRowLast]}>
              <Text style={styles.infoLabel}>Tickets</Text>
              <Text style={styles.infoValue}>{place.ticketPrice}</Text>
            </View>
          </View>

          <View style={styles.favWrap}>
            <FavoriteBurst progress={burstProgress} />
            <Pressable
              onPress={onFavoritePress}
              style={({ pressed }) => [
                styles.favBtn,
                isIos ? styles.favIos : styles.favAndroid,
                fav && styles.favActive,
                pressed && styles.favPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel={fav ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Animated.View style={[styles.favInner, getHeartScaleStyle(heartScale)]}>
                <Ionicons
                  name={fav ? 'heart' : 'heart-outline'}
                  size={20}
                  color={fav ? colors.italyWhite : colors.accentGreen}
                />
                <Text
                  style={[
                    styles.favLabel,
                    isIos && styles.favLabelIos,
                    fav && styles.favLabelActive,
                  ]}
                >
                  {fav ? 'Saved to Favorites' : 'Add to Favorites'}
                </Text>
              </Animated.View>
            </Pressable>
          </View>

          {fav ? (
            <View style={styles.collectionRow}>
              <Ionicons
                name={uniqueCategoryCount >= MILAN_CATEGORY_TYPES ? 'trophy' : 'layers-outline'}
                size={18}
                color={colors.accentGreen}
              />
              <Text style={styles.collectionText}>
                {uniqueCategoryCount >= MILAN_CATEGORY_TYPES
                  ? 'You’ve collected every kind of Milan on your list — bravo!'
                  : `Your shortlist spans ${uniqueCategoryCount} of ${MILAN_CATEGORY_TYPES} Milan vibes (landmarks, food, events, shopping).`}
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}
