import type { Place } from '../../data/places';

export interface PlaceCardProps {
  place: Place;
  onExplore: () => void;
}
