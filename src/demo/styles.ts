import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';

export function getStageBoxStyle(stageW: number, stageH: number): ViewStyle {
  return { width: stageW, height: stageH };
}

export function getPhoneOuterStyle(
  phoneW: number,
  phoneH: number,
  bezel: number,
  borderRadius: number,
): ViewStyle {
  return {
    width: phoneW + bezel * 2,
    height: phoneH + bezel * 2 + 18,
    padding: bezel,
    borderRadius,
  };
}

export function getNotchAreaStyle(notchWidth: number): ViewStyle {
  return { width: notchWidth };
}

export function getScreenStyle(phoneW: number, phoneH: number, borderRadius: number): ViewStyle {
  return { width: phoneW, height: phoneH, borderRadius };
}

export const styles = StyleSheet.create({
  stage: {
    flex: 1,
    backgroundColor: colors.stageBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stageBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneOuter: {
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#3D3D3D',
  },
  notchArea: {
    alignItems: 'center',
    marginBottom: 6,
  },
  notch: {
    height: 6,
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#111',
  },
  screen: {
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  screenFill: {
    flex: 1,
  },
});
