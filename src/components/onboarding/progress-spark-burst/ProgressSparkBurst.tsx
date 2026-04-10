import { useMemo, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { ProgressSparkBurstProps } from './props';
import { styles } from './styles';

/** Duolingo-style small sparks — tighter burst than FavoriteBurst */
const PARTICLE_COUNT = 14;
const DISTANCE = 44;

const SPARK_COLORS = [colors.star, '#E8C547', colors.accentGreen, '#F5E6A8', '#2E7D6A'];

export function ProgressSparkBurst({ progress }: ProgressSparkBurstProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const angle = (i / PARTICLE_COUNT) * Math.PI * 2 - Math.PI / 2;
        const jitter = i % 2 === 0 ? 1 : 0.85;
        return {
          tx: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, Math.cos(angle) * DISTANCE * jitter],
          }),
          ty: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, Math.sin(angle) * DISTANCE * jitter],
          }),
          opacity: progress.interpolate({
            inputRange: [0, 0.12, 0.75, 1],
            outputRange: [0, 1, 0.85, 0],
          }),
          scale: progress.interpolate({
            inputRange: [0, 0.4, 1],
            outputRange: [0.2, 1, 0.45],
          }),
          color: SPARK_COLORS[i % SPARK_COLORS.length],
          size: 4 + (i % 3),
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
              width: p.size,
              height: p.size,
              borderRadius: p.size / 2,
              marginLeft: -p.size / 2,
              marginTop: -p.size / 2,
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

export function useProgressSparkBurst() {
  const progress = useRef(new Animated.Value(0)).current;

  const play = () => {
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: 520,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  return { progress, play };
}
