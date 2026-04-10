import { View } from 'react-native';
import { OnboardingProgressProps } from './props';
import { styles } from './styles';

export function OnboardingProgress({ current }: OnboardingProgressProps) {
  return (
    <View style={styles.row} accessibilityRole="progressbar" accessibilityLabel={`Onboarding step ${current} of 3`}>
      {([1, 2, 3] as const).map((i) => (
        <View
          key={i}
          style={[
            styles.segment,
            i < current && styles.segmentDone,
            i === current && styles.segmentActive,
            i > current && styles.segmentUpcoming,
          ]}
        />
      ))}
    </View>
  );
}
