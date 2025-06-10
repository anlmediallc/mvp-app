# Flutter Project Setup for Buscomfy+

## 1. Project Structure

```
buscomfy_app/
├── lib/
│   ├── main.dart
│   ├── screens/
│   │   ├── splash_screen.dart      # Your exported splash screen
│   │   ├── onboarding_screen.dart  # Next screen to export
│   │   └── trip_details_screen.dart
│   ├── widgets/
│   │   └── common_widgets.dart
│   └── utils/
│       └── constants.dart
├── assets/
│   ├── images/
│   └── fonts/
└── pubspec.yaml
```

## 2. Dependencies to Add

Add these to your pubspec.yaml:

```yaml
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2
  # Builder.io Flutter SDK
  flutter_builder: ^1.0.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^2.0.0
```

## 3. Assets Configuration

Add to pubspec.yaml:

```yaml
flutter:
  uses-material-design: true
  assets:
    - assets/images/
  fonts:
    - family: Inter
      fonts:
        - asset: assets/fonts/Inter-Regular.ttf
        - asset: assets/fonts/Inter-Bold.ttf
          weight: 700
```

## 4. Builder.io Integration Steps

### Step 1: Install Builder.io Flutter Package

```bash
flutter pub add flutter_builder
```

### Step 2: Configure Builder.io

```dart
// In main.dart
import 'package:flutter_builder/flutter_builder.dart';

void main() {
  Builder.configure(apiKey: 'YOUR_BUILDER_IO_API_KEY');
  runApp(MyApp());
}
```

### Step 3: Use Exported Components

```dart
// In your screen files
import 'package:flutter_builder/flutter_builder.dart';

class SplashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BuilderComponent(
      model: 'splash-screen', // Your Builder.io model name
      child: YourExportedWidget(),
    );
  }
}
```
