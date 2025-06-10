import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';
import 'screens/onboarding_screen.dart';
import 'screens/login_screen.dart';
import 'screens/trip_details_screen.dart';
import 'screens/trip_stops_screen.dart';
import 'screens/verification_screen.dart';

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
      initialRoute: '/',
        routes: {
          '/': (context) => BuscomfySplashScreen(),
          '/onboarding': (context) => OnboardingScreen(),
          '/login': (context) => LoginScreen(),
          '/trip-details': (context) => TripDetailsScreen(),
          '/trip-stops': (context) => TripStopsScreen(),
          '/verification': (context) => VerificationScreen(),
        },
      debugShowCheckedModeBanner: false,
    );
  }
}
