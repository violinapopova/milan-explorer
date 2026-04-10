import type { ConfigContext } from 'expo/config';

/**
 * Extends app.json. Set GOOGLE_MAPS_ANDROID_API_KEY so Android loads Google map tiles
 * (create a key with "Maps SDK for Android" enabled in Google Cloud Console).
 */
export default ({ config }: ConfigContext) => ({
  ...config,
  android: {
    ...config.android,
    config: {
      ...config.android?.config,
      googleMaps: {
        apiKey: process.env.GOOGLE_MAPS_ANDROID_API_KEY ?? '',
      },
    },
  },
});
