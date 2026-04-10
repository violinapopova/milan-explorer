import { useMemo, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { colors } from '../../theme/colors';
import { FavoriteBurstProps } from './props';
import { styles } from './styles';

const PARTICLE_COUNT = 10;
const DISTANCE = 52;

const PARTICLE_COLORS = [
  colors.accentGreen,
  colors.star,
  colors.italyRed,
  '#2E7D6A',
  '#B8952E',
];

export function FavoriteBurst({ progress }: FavoriteBurstProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const angle = (i / PARTICLE_COUNT) * Math.PI * 2 - Math.PI / 2;
        return {
          tx: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, Math.cos(angle) * DISTANCE],
          }),
          ty: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, Math.sin(angle) * DISTANCE],
          }),
          opacity: progress.interpolate({
            inputRange: [0, 0.15, 0.85, 1],
            outputRange: [0, 1, 0.9, 0],
          }),
          scale: progress.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.3, 1, 0.6],
          }),
          color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
        };
      }),
    [progress],
  );

  return (
    <View style={styles.burst} pointerEvents="none">
      {particles.map((p, i) => (
        <Animated.View
          key={i}
          style={[
            styles.dot,
            {
              backgroundColor: p.color,
              opacity: p.opacity,
              transform: [{ translateX: p.tx }, { translateY: p.ty }, { scale: p.scale }],
            },
          ]}
        />
      ))}
    </View>
  );
}

export function useFavoriteBurstAnimation() {
  const progress = useRef(new Animated.Value(0)).current;

  const play = () => {
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: 580,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  return { progress, play };
}
