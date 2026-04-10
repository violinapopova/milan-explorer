import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, LayoutChangeEvent, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { MilanToggleProps } from './props';

const PAD = 4;

export function MilanToggle({ night, onNightChange, onInteract }: MilanToggleProps) {
  const [trackW, setTrackW] = useState(0);
  const slide = useRef(new Animated.Value(night ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(slide, {
      toValue: night ? 1 : 0,
      duration: 280,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [night, slide]);

  const onLayout = (e: LayoutChangeEvent) => {
    setTrackW(e.nativeEvent.layout.width);
  };

  const inner = Math.max(0, trackW - PAD * 2);
  const thumbW = inner > 0 ? inner / 2 : 0;
  const translateX =
    trackW > 0
      ? slide.interpolate({
          inputRange: [0, 1],
          outputRange: [PAD, PAD + thumbW],
        })
      : slide;

  const pick = (nextNight: boolean) => {
    onInteract?.();
    onNightChange(nextNight);
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.hint}>Slide or tap to pick your vibe</Text>
      <View style={styles.track} onLayout={onLayout}>
        {thumbW > 0 ? (
          <Animated.View
            style={[
              styles.thumb,
              {
                width: thumbW,
                transform: [{ translateX }],
              },
            ]}
          />
        ) : null}
        <View style={styles.labels} pointerEvents="box-none">
          <Pressable
            onPress={() => pick(false)}
            style={({ pressed }) => [styles.half, pressed && styles.halfPressed]}
            accessibilityRole="button"
            accessibilityLabel="Duomo by day"
            accessibilityState={{ selected: !night }}
          >
            <Text style={[styles.sideLabel, !night && styles.sideLabelActive]}>Duomo by day</Text>
          </Pressable>
          <Pressable
            onPress={() => pick(true)}
            style={({ pressed }) => [styles.half, pressed && styles.halfPressed]}
            accessibilityRole="button"
            accessibilityLabel="Navigli by night"
            accessibilityState={{ selected: night }}
          >
            <Text style={[styles.sideLabel, night && styles.sideLabelActive]}>Navigli by night</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
