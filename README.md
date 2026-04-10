# Milano Explorer

Conference demo: a **managed Expo (SDK 54)** React Native mockup of a Milan city guide — Discover feed, detail screens, five-tab navigation, mock map, and favorites persisted with AsyncStorage.

## The experience

**Milano Explorer** — your pocket-sized guide to Milan: discover landmarks, follow the map, save favorites, and feel a little more *Milano* with every tap.

Step into a refined Milan city guide built for exploration. Start with a playful onboarding, then roam **Discover** with search and a light “explorer” meter, swipe featured picks, and open rich **detail** pages with hours, tickets, and one-tap favorites. Flip to the **map** to see real pins across the city, browse **Events** and **Food & Drink**, and collect places in **Favorites**—complete with tier flair—so your shortlist stays with you on the device. It’s a demo, but the flow feels like planning a real weekend in Milan.

- **First launch** — Guided setup: interests, a Milan ritual, and a vibe toggle—then a celebratory finish when you’re ready to enter the app.
- **Discover** — Italian-inspired header, search, featured carousel, and curated cards with ratings.
- **Detail** — Full-bleed hero, story copy, practical info, and favorites with a bit of delight when you save.
- **Map & tabs** — Pins on a Milan map, plus Events and Food & Drink filtered from the same guide.
- **Favorites** — Your shortlist, persisted locally, with explorer tiers as you save more.

## Requirements

- Node.js 20+ (matches Expo SDK 54)
- iOS: Xcode + Simulator (e.g. **iPhone 16**, light mode) for the most polished capture
- Android: Android Studio + emulator for an optional second device frame

## Run

```bash
npm install
npx expo start
```

Then press `i` for iOS Simulator or `a` for Android.

## Conference capture (16:9)

1. **Native frame (recommended)**  
   Open the app in **Simulator → iPhone 16** (or the closest available device). Use light appearance. Record the Simulator window or export screenshots, then place the asset on a **1920×1080** (16:9) slide with margins as needed.

2. **In-app stage (optional)**  
   Start with a demo bezel + letterboxed **16:9** stage:

   ```bash
   EXPO_PUBLIC_DEMO_FRAME=1 npx expo start
   ```

   Useful for web or quick mockups; day-to-day development should omit the variable so the UI fills the full device.

## Stack

- Expo SDK **54** (pinned; not the latest SDK line at time of scaffolding)
- React Navigation (native stack + bottom tabs)
- `expo-image`, `expo-font` + Playfair Display, `@react-native-async-storage/async-storage`

## Screens

- **Discover**: Italian tricolor header, search (local filter), featured carousel, curated cards  
- **Detail**: Hero image, story copy, opening hours / tickets, **Add to Favorites** with iOS/Android styling  
- **Map**: Stylized map with tappable pins (no map API)  
- **Events / Food & Drink**: Filtered lists from shared static data  
- **Favorites**: Saved entries from AsyncStorage  

Place photos load from **Wikimedia Commons** (no image files shipped in the repo); network is required on first load. To use your own photos, put files under `assets/` and switch `imageUrl` in `src/data/places.ts` to `require(...)`.

### Map (Android)

The **Map** tab uses `react-native-maps` with real coordinates. **iOS** uses Apple Maps by default. **Android** needs a [Google Maps API key](https://docs.expo.dev/guides/google-maps/) with *Maps SDK for Android* enabled. Set it when starting Metro:

```bash
GOOGLE_MAPS_ANDROID_API_KEY="your-key-here" npx expo start
```

(`app.config.ts` injects this into `android.config.googleMaps.apiKey`.) Without a key, Android may show a blank map grid.
