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
          // Add navigation to other screens here later
        },
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
