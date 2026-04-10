import { Dimensions, Platform, View } from 'react-native';
import {
  getNotchAreaStyle,
  getPhoneOuterStyle,
  getScreenStyle,
  getStageBoxStyle,
  styles,
} from './styles';
import { DeviceStageProps } from './props';

const DEMO_FRAME = process.env.EXPO_PUBLIC_DEMO_FRAME === '1';

export function DeviceStage({ children }: DeviceStageProps) {
  if (!DEMO_FRAME) {
    return <>{children}</>;
  }

  const { width: winW, height: winH } = Dimensions.get('window');
  const targetRatio = 16 / 9;
  let stageW = winW;
  let stageH = winW / targetRatio;
  if (stageH > winH) {
    stageH = winH;
    stageW = winH * targetRatio;
  }

  const phoneW = Math.min(stageW * 0.34, 280);
  const phoneH = phoneW * (Platform.OS === 'web' ? 2.05 : 2.1);
  const bezel = Math.max(10, phoneW * 0.04);

  return (
    <View style={styles.stage}>
      <View style={[styles.stageBox, getStageBoxStyle(stageW, stageH)]}>
        <View
          style={[
            styles.phoneOuter,
            getPhoneOuterStyle(phoneW, phoneH, bezel, phoneW * 0.12),
          ]}
        >
          <View style={[styles.notchArea, getNotchAreaStyle(phoneW * 0.35)]}>
            <View style={styles.notch} />
          </View>
          <View style={[styles.screen, getScreenStyle(phoneW, phoneH, phoneW * 0.08)]}>
            <View style={styles.screenFill}>{children}</View>
          </View>
        </View>
      </View>
    </View>
  );
}
