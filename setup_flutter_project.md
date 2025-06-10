# Flutter Project Setup Steps

## 1. Create Folder Structure

```
lib/
├── main.dart
└── screens/
    └── splash_screen.dart
```

## 2. Create splash_screen.dart

- Copy your Builder.io Flutter code
- Paste into `lib/screens/splash_screen.dart`

## 3. Update main.dart

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
      ),
      home: const BuscomfySplashScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
```

## 4. Run the app

```bash
flutter run
```
