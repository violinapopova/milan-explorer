import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import { colors } from '../../theme/colors';
import { SearchBarProps } from './props';
import { styles } from './styles';

export function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <View style={styles.wrap}>
      <Ionicons name="search" size={20} color={colors.textMuted} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search landmarks, events, restaurants..."
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        returnKeyType="search"
        accessibilityLabel="Search places"
      />
    </View>
  );
}
