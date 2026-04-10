import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { PlayfulCheckboxProps } from './props';
import { getCheckmarkAnimatedStyle, getRowScaleStyle, styles } from './styles';

export function PlayfulCheckbox({ checked, onToggle, label }: PlayfulCheckboxProps) {
  const scale = useRef(new Animated.Value(1)).current;
  const checkProgress = useRef(new Animated.Value(checked ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(checkProgress, {
      toValue: checked ? 1 : 0,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [checked, checkProgress]);

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.92,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      tension: 200,
      useNativeDriver: true,
    }).start();
  };

  const checkOpacity = checkProgress;
  const checkScale = checkProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 1],
  });

  return (
    <Pressable
      onPress={onToggle}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={label}
    >
      <Animated.View style={[styles.row, getRowScaleStyle(scale)]}>
        <View style={[styles.box, checked && styles.boxChecked]}>
          <Animated.View style={getCheckmarkAnimatedStyle(checkOpacity, checkScale)}>
            <Ionicons name="checkmark" size={22} color={colors.italyWhite} />
          </Animated.View>
        </View>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}
