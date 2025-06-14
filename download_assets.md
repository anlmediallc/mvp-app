# Complete Assets Download Guide for Codemagic

## 🎨 Background Images (Required)

### 1. Splash Background Image

- **URL:** `https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2Fa353560963de4121ab0b9d86f096f4db`
- **Save as:** `assets/images/splash_background.jpg`
- **Used in:** Splash screen background

### 2. Orange Background SVG

- **URL:** `https://2ac212472ec64c4582e1703c57c9c27f-b99b23cf3e5141f3b8ba63a73.projects.builder.codes/orange-bg.svg`
- **Save as:** `assets/backgrounds/orange_bg.svg`
- **Used in:** Various screen backgrounds

### 3. Login Background SVG

- **URL:** `https://2ac212472ec64c4582e1703c57c9c27f-b99b23cf3e5141f3b8ba63a73.fly.dev/login-bg.svg`
- **Save as:** `assets/backgrounds/login_bg.svg`
- **Used in:** Login screen backgrounds

### 4. Trip Header Background

- **URL:** `https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2F6ee3345d560641f1bc37df16062b7293`
- **Save as:** `assets/images/trip_header_bg.jpg`
- **Used in:** Trip details and other headers

### 5. Form Background

- **URL:** `https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2F3e3b118899d545fe8107825676bfdf48`
- **Save as:** `assets/images/form_background.jpg`
- **Used in:** Login, register, and form screens

## 🔤 Fonts (Required)

### Inter Font Family

1. **Go to:** https://fonts.google.com/specimen/Inter
2. **Click:** "Download family"
3. **Extract** the ZIP file
4. **Copy these files** to `assets/fonts/`:
   - `Inter-Regular.ttf` → `assets/fonts/Inter-Regular.ttf`
   - `Inter-Medium.ttf` → `assets/fonts/Inter-Medium.ttf`
   - `Inter-SemiBold.ttf` → `assets/fonts/Inter-SemiBold.ttf`
   - `Inter-Bold.ttf` → `assets/fonts/Inter-Bold.ttf`

## 🚀 App Icons (Create These)

### Main App Icon

- **Create:** 1024x1024 PNG
- **Design:** Buscomfy+ logo (bus + location pin on orange background)
- **Save as:** `assets/icons/icon-1024.png`

### Android Adaptive Icons

1. **Background:** 1080x1080 PNG (orange gradient)
   - **Save as:** `assets/icons/adaptive-icon-background.png`
2. **Foreground:** 1080x1080 PNG (logo on transparent background)
   - **Save as:** `assets/icons/adaptive-icon-foreground.png`

### iOS Splash Screens

1. **iPad Pro:** 2048x2732 PNG
   - **Save as:** `assets/images/ios-splash-2048x2732.png`
2. **iPhone:** 1179x2556 PNG
   - **Save as:** `assets/images/ios-splash-1179x2556.png`

## 📱 Dependencies to Add

Add these to your `pubspec.yaml`:

```yaml
dev_dependencies:
  flutter_launcher_icons: ^0.13.1
  flutter_native_splash: ^2.3.10
```

## 🛠️ Setup Commands

After downloading all assets, run:

```bash
# Install dependencies
flutter pub get

# Generate app icons
flutter pub run flutter_launcher_icons

# Generate splash screens
flutter pub run flutter_native_splash:create
```

## ✅ Final Folder Structure

```
assets/
├── backgrounds/
│   ├── orange_bg.svg ✅
│   └── login_bg.svg ✅
├── fonts/
│   ├── Inter-Regular.ttf ✅
│   ├── Inter-Medium.ttf ✅
│   ├── Inter-SemiBold.ttf ✅
│   └── Inter-Bold.ttf ✅
├── images/
│   ├── splash_background.jpg ✅
│   ├── trip_header_bg.jpg ✅
│   ├── form_background.jpg ✅
│   ├── ios-splash-2048x2732.png ✅
│   └── ios-splash-1179x2556.png ✅
└── icons/
    ├── icon-1024.png ✅
    ├── adaptive-icon-background.png ✅
    └── adaptive-icon-foreground.png ✅
```

## 🎯 Priority Order

1. **Download images** (backgrounds and form images)
2. **Download Inter fonts**
3. **Create app icon** (1024x1024)
4. **Create adaptive icons** (Android)
5. **Create splash screens** (iOS)
6. **Run setup commands**
