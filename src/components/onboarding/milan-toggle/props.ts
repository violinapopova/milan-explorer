export interface MilanToggleProps {
  night: boolean;
  onNightChange: (night: boolean) => void;
  onInteract?: () => void;
}
