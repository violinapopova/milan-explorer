import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MilanToggle } from '../../components/onboarding/milan-toggle/MilanToggle';
import { OnboardingProgress } from '../../components/onboarding/onboarding-progress/OnboardingProgress';
import { ProgressSparkBurst, useProgressSparkBurst } from '../../components/onboarding/progress-spark-burst/ProgressSparkBurst';
import { PlayfulCheckbox } from '../../components/onboarding/playful-checkbox/PlayfulCheckbox';
import type { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import {
  getIntroProgressFillWidth,
  getIntroScrollPaddingBottom,
  getIntroTopBarPadding,
  getLottieOverlayPadding,
  getRewardAnimatedStyle,
  getRocketLottieSize,
  styles,
} from './styles';

const ROCKET_LOTTIE = require('../../../assets/images/italy-rocket-lottie.json');
const ITALY_BOOT = require('../../../assets/images/italy-boot.png');

const INTERESTS = [
  { id: 'landmark', label: 'Landmarks' },
  { id: 'food', label: 'Food & aperitivo' },
  { id: 'event', label: 'Events' },
  { id: 'shopping', label: 'Shopping' },
] as const;

export function IntroScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();
  const { width: windowW, height: windowH } = useWindowDimensions();
  const finishedRef = useRef(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [nickname, setNickname] = useState('');
  const [chips, setChips] = useState<string[]>([]);
  const [aperitivoReady, setAperitivoReady] = useState(false);
  const [nightVibe, setNightVibe] = useState(false);
  const [vibePlayed, setVibePlayed] = useState(false);
  const [showRocketLottie, setShowRocketLottie] = useState(false);

  const rewardScale = useRef(new Animated.Value(0)).current;
  const rewardOpacity = useRef(new Animated.Value(0)).current;
  const prevProgressRef = useRef(0);
  const prevSparkRef = useRef(-1);
  const { progress: sparkProgress, play: playSparks } = useProgressSparkBurst();
  const { progress: sparkProgress2, play: playSparks2 } = useProgressSparkBurst();
  const { progress: sparkProgress3, play: playSparks3 } = useProgressSparkBurst();
  const prevAperitivoRef = useRef(false);

  const formProgress = useMemo(() => {
    const namePart = nickname.trim().length > 0 ? 0.5 : 0;
    const chipPart = chips.length > 0 ? 0.5 : 0;
    return Math.min(1, namePart + chipPart);
  }, [nickname, chips]);

  useEffect(() => {
    if (formProgress >= 1 && prevProgressRef.current < 1) {
      rewardOpacity.setValue(0);
      rewardScale.setValue(0.6);
      Animated.parallel([
        Animated.spring(rewardScale, {
          toValue: 1,
          friction: 6,
          tension: 120,
          useNativeDriver: true,
        }),
        Animated.timing(rewardOpacity, {
          toValue: 1,
          duration: 280,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    }
    prevProgressRef.current = formProgress;
  }, [formProgress, rewardOpacity, rewardScale]);

  useEffect(() => {
    const prev = prevSparkRef.current;
    const fp = formProgress;
    if (fp >= 1 && prev < 1) {
      playSparks();
    } else if (fp >= 0.5 && prev < 0.5) {
      playSparks();
    }
    prevSparkRef.current = fp;
  }, [formProgress, playSparks]);

  useEffect(() => {
    if (aperitivoReady && !prevAperitivoRef.current) {
      playSparks2();
    }
    prevAperitivoRef.current = aperitivoReady;
  }, [aperitivoReady, playSparks2]);

  const goMain = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    navigation.replace('MainTabs');
  }, [navigation]);

  const onRocketFinish = useCallback(
    (isCancelled: boolean) => {
      if (isCancelled) return;
      goMain();
    },
    [goMain],
  );

  const toggleChip = (id: string) => {
    setChips((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const canContinueStep1 = chips.length >= 1;
  const canContinueStep2 = aperitivoReady;
  const canEnterMilano = vibePlayed;

  const onPrimary = () => {
    if (step === 1 && canContinueStep1) setStep(2);
    else if (step === 2 && canContinueStep2) setStep(3);
    else if (step === 3 && canEnterMilano) setShowRocketLottie(true);
  };

  const onBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const primaryLabel =
    step === 3 ? 'Enter Milano' : 'Continue';

  const primaryDisabled =
    step === 1 ? !canContinueStep1 : step === 2 ? !canContinueStep2 : !canEnterMilano;

  return (
    <View style={styles.root}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={insets.top}
      >
        <View style={[styles.topBar, getIntroTopBarPadding(insets.top)]}>
          <View style={styles.topLeft}>
            {step > 1 && !showRocketLottie ? (
              <Pressable
                onPress={onBack}
                style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
                accessibilityRole="button"
                accessibilityLabel="Back"
              >
                <Ionicons name="chevron-back" size={24} color={colors.accentGreen} />
              </Pressable>
            ) : (
              <View style={styles.iconBtnPlaceholder} />
            )}
          </View>
          {!showRocketLottie ? (
            <View style={styles.progressSlot}>
              <OnboardingProgress current={step} />
              <Text style={styles.stepIndicator} accessibilityLabel={`Step ${step} of 3`}>
                Step {step} of 3
              </Text>
            </View>
          ) : (
            <View style={styles.progressSlot} />
          )}
          {!showRocketLottie ? (
            <Pressable
              onPress={goMain}
              style={({ pressed }) => [styles.skip, pressed && styles.pressed]}
              accessibilityRole="button"
              accessibilityLabel="Skip onboarding"
            >
              <Text style={styles.skipText}>Skip</Text>
            </Pressable>
          ) : (
            <View style={styles.skipPlaceholder} />
          )}
        </View>

        <ScrollView
          style={styles.flex}
          contentContainerStyle={[styles.scrollContent, getIntroScrollPaddingBottom(insets.bottom)]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          pointerEvents={showRocketLottie ? 'none' : 'auto'}
        >
          {step === 1 ? (
            <View>
              <View style={styles.heroBlock}>
                <View style={styles.bootRow}>
                  <Image source={ITALY_BOOT} style={styles.bootSmall} contentFit="contain" />
                </View>
                <View style={styles.stepPill}>
                  <Text style={styles.stepPillText}>Step 1 · Get started</Text>
                </View>
                <Text style={styles.stepTitle}>Plan your Milan experience</Text>
                <Text style={styles.stepSubHero}>Tell us what you’re into — the bar below tracks your setup.</Text>
              </View>

              <Text style={styles.fieldLabel}>Nickname (optional)</Text>
              <TextInput
                value={nickname}
                onChangeText={setNickname}
                placeholder="How should we greet you?"
                placeholderTextColor={colors.textMuted}
                style={styles.input}
                accessibilityLabel="Nickname"
              />

              <Text style={[styles.fieldLabel, styles.fieldLabelSpaced]}>What excites you? Pick at least one.</Text>
              <View style={styles.chipWrap}>
                {INTERESTS.map((item) => {
                  const on = chips.includes(item.id);
                  return (
                    <Pressable
                      key={item.id}
                      onPress={() => toggleChip(item.id)}
                      style={({ pressed }) => [
                        styles.chip,
                        on && styles.chipOn,
                        pressed && styles.chipPressed,
                      ]}
                      accessibilityRole="checkbox"
                      accessibilityState={{ checked: on }}
                      accessibilityLabel={item.label}
                    >
                      <Text style={[styles.chipText, on && styles.chipTextOn]}>{item.label}</Text>
                    </Pressable>
                  );
                })}
              </View>

              <View style={styles.progressTrackWrap}>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, getIntroProgressFillWidth(formProgress)]} />
                </View>
                <View style={styles.sparkLayer} pointerEvents="none">
                  <ProgressSparkBurst progress={sparkProgress} />
                </View>
              </View>
              <Text style={styles.progressMeta}>
                Your setup · {Math.round(formProgress * 100)}% complete
              </Text>

              <Animated.View
                style={[styles.rewardBanner, getRewardAnimatedStyle(rewardOpacity, rewardScale)]}
                pointerEvents="none"
              >
                <View style={styles.rewardRow}>
                  <Ionicons name="checkmark-circle" size={22} color={colors.accentGreen} />
                  <Text style={styles.rewardText}>You’re on the trail — Milan awaits.</Text>
                </View>
              </Animated.View>
            </View>
          ) : null}

          {step === 2 ? (
            <View>
              <Text style={styles.stepTitle}>One Milan ritual</Text>
              <Text style={styles.stepSub}>Tap the box — make it feel like a stamp, not a chore.</Text>
              <View style={styles.sparkAnchorCheckbox}>
                <View style={styles.checkboxBlock}>
                  <PlayfulCheckbox
                    checked={aperitivoReady}
                    onToggle={() => setAperitivoReady((v) => !v)}
                    label="I’m ready for aperitivo along the Navigli."
                  />
                </View>
                <View style={styles.sparkLayerCheckbox} pointerEvents="none">
                  <ProgressSparkBurst progress={sparkProgress2} />
                </View>
              </View>
            </View>
          ) : null}

          {step === 3 ? (
            <View>
              <Text style={styles.stepTitle}>Your vibe</Text>
              <Text style={styles.stepSub}>Night or day — there’s no wrong answer.</Text>
              <View style={styles.sparkAnchorToggle}>
                <View style={styles.toggleBlock}>
                  <MilanToggle
                    night={nightVibe}
                    onNightChange={setNightVibe}
                    onInteract={() => {
                      setVibePlayed(true);
                      playSparks3();
                    }}
                  />
                </View>
                <View style={styles.sparkLayerToggle} pointerEvents="none">
                  <ProgressSparkBurst progress={sparkProgress3} />
                </View>
              </View>
              {vibePlayed ? (
                <Text style={styles.successHint}>Nice — that’s locked in.</Text>
              ) : (
                <Text style={styles.mutedHint}>Try the toggle to continue.</Text>
              )}
            </View>
          ) : null}

          {!showRocketLottie ? (
            <View style={styles.primaryBtnWrap}>
              <Pressable
                onPress={onPrimary}
                disabled={primaryDisabled}
                style={({ pressed }) => [
                  styles.primaryBtn,
                  primaryDisabled && styles.primaryBtnDisabled,
                  pressed && !primaryDisabled && styles.primaryBtnPressed,
                ]}
                accessibilityRole="button"
                accessibilityLabel={primaryLabel}
              >
                <Text style={styles.primaryBtnText}>{primaryLabel}</Text>
              </Pressable>
            </View>
          ) : null}
        </ScrollView>
      </KeyboardAvoidingView>

      {showRocketLottie ? (
        <View style={[styles.lottieOverlay, getLottieOverlayPadding(insets.bottom)]}>
          <LottieView
            source={ROCKET_LOTTIE}
            autoPlay
            loop={false}
            resizeMode="contain"
            style={getRocketLottieSize(windowW, windowH)}
            onAnimationFinish={onRocketFinish}
          />
        </View>
      ) : null}
    </View>
  );
}
