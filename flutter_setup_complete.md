# Complete Flutter Setup for Buscomfy+

## After Flutter Installation Completes:

### 1. Create Project Structure

```
lib/
├── main.dart (replace existing)
└── screens/
    └── splash_screen.dart (create new)
```

### 2. Create splash_screen.dart

- Copy your Builder.io Flutter code
- Paste into `lib/screens/splash_screen.dart`

### 3. Replace lib/main.dart with:

```dart
import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';

void main() {
  runApp(const BuscomfyApp());
}

class BuscomfyApp extends StatelessWidget {
  const BuscomfyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Buscomfy+',
      theme: ThemeData(
        primarySwatch: Colors.orange,
        fontFamily: 'Inter',
      ),
      home: const BuscomfySplashScreen(
        onTap: () {
          print('Splash screen tapped!');
        },
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
```

### 4. Run Your App

```bash
flutter run
```

### 5. Test on Different Devices

```bash
flutter run -d chrome     # Web browser
flutter run -d windows    # Windows desktop
```
