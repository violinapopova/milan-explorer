const CHARS_FOR_FULL = 10;

export type ExplorerMeterState = {
  len: number;
  progress: number;
  pct: number;
  caption: string;
};

export function getExplorerMeterState(query: string): ExplorerMeterState {
  const len = query.trim().length;
  const progress = Math.min(1, len / CHARS_FOR_FULL);
  const pct = Math.round(progress * 100);

  let caption: string;
  if (len === 0) {
    caption = 'Type to scout Milan — fill the bar to go full explorer mode.';
  } else if (progress < 0.4) {
    caption = 'Nice start — keep typing to narrow the map.';
  } else if (progress < 1) {
    caption = 'Digging deeper… your results are sharpening.';
  } else {
    caption = 'Explorer meter maxed — you’re on a roll!';
  }

  return { len, progress, pct, caption };
}
