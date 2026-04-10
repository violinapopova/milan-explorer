import type { Place } from '../../data/places';

export interface FeaturedCardProps {
  place: Place;
  onPress: () => void;
}
