import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useRef } from 'react';
import { Animated, Easing, FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlaceCard } from '../../components/place-card/PlaceCard';
import { getPlaceById } from '../../data/places';
import { useFavorites } from '../../context/FavoritesContext';
import type { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import {
  getCompassRotateStyle,
  getTierBadgeStyle,
  getTierLabelColor,
  styles,
} from './styles';

type TierKey = 'bronze' | 'silver' | 'gold';

const TIER_PALETTE: Record<TierKey, { bg: string; border: string; accent: string }> = {
  bronze: {
    bg: colors.tierBronzeBg,
    border: colors.tierBronzeBorder,
    accent: colors.tierBronze,
  },
  silver: {
    bg: colors.tierSilverBg,
    border: colors.tierSilverBorder,
    accent: colors.tierSilver,
  },
  gold: {
    bg: colors.tierGoldBg,
    border: colors.tierGoldBorder,
    accent: colors.tierGold,
  },
};

function tierForCount(count: number): { key: TierKey; label: string; subtitle: string } | null {
  if (count <= 0) return null;
  if (count >= 5) {
    return {
      key: 'gold',
      label: 'Gold explorer',
      subtitle: 'Your Milan shortlist is seriously stacked.',
    };
  }
  if (count >= 3) {
    return {
      key: 'silver',
      label: 'Silver explorer',
      subtitle: 'You’re building a proper trip.',
    };
  }
  return {
    key: 'bronze',
    label: 'Bronze explorer',
    subtitle: 'First stamps on the map — keep going.',
  };
}

export function FavoritesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { favoriteIds } = useFavorites();
  const saved = favoriteIds.map(getPlaceById).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const count = saved.length;
  const tier = tierForCount(count);
  const tierColors = tier ? TIER_PALETTE[tier.key] : null;

  const spin = useRef(new Animated.Value(0)).current;

  const spinCompass = useCallback(() => {
    spin.setValue(0);
    Animated.timing(spin, {
      toValue: 1,
      duration: 700,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [spin]);

  const spinInterpolate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={[typography.display, styles.title]}>Favorites</Text>
        <Text style={styles.sub}>Your shortlist for Milan — stored on this device.</Text>
        {tier && tierColors ? (
          <View
            style={[styles.tierBadge, getTierBadgeStyle(tierColors)]}
            accessibilityLabel={`${tier.label}. ${tier.subtitle}`}
          >
            <Ionicons name="ribbon-outline" size={18} color={tierColors.accent} />
            <View style={styles.tierTextCol}>
              <Text style={[styles.tierLabel, getTierLabelColor(tierColors.accent)]}>{tier.label}</Text>
              <Text style={styles.tierSub}>{tier.subtitle}</Text>
            </View>
          </View>
        ) : null}
      </View>
      <FlatList
        data={saved}
        keyExtractor={(item) => item.id}
        contentContainerStyle={saved.length === 0 ? styles.emptyContainer : styles.list}
        renderItem={({ item }) => (
          <PlaceCard place={item} onExplore={() => navigation.navigate('Detail', { id: item.id })} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyInner}>
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptyBody}>
              Spin the compass, then head to Discover and save a landmark you love. Your picks land here
              for the demo.
            </Text>
            <Pressable
              onPress={spinCompass}
              style={({ pressed }) => [styles.compassBtn, pressed && styles.compassBtnPressed]}
              accessibilityRole="button"
              accessibilityLabel="Spin the compass"
            >
              <Animated.View style={getCompassRotateStyle(spinInterpolate)}>
                <Ionicons name="compass" size={56} color={colors.accentGreen} />
              </Animated.View>
              <Text style={styles.compassHint}>Tap to spin</Text>
            </Pressable>
          </View>
        }
      />
    </SafeAreaView>
  );
}
