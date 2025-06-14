import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';
import 'screens/onboarding_screen.dart';
import 'screens/login_screen.dart';
import 'screens/login_error_screen.dart';
import 'screens/forgot_password_screen.dart';
import 'screens/create_new_password_screen.dart';
import 'screens/register_screen.dart';
import 'screens/my_account_screen.dart';
import 'screens/luggage_check_in_screen.dart';
import 'screens/notification_center_screen.dart';
import 'screens/personal_info_screen.dart';
import 'screens/feedback_screen.dart';
import 'screens/help_center_screen.dart';
import 'screens/report_problem_screen.dart';
import 'screens/trip_details_screen.dart';
import 'screens/trip_stops_screen.dart';
import 'screens/verification_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Buscomfy+',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.orange,
        // Use Inter font family consistently
        fontFamily: 'Inter',
        textTheme: TextTheme(
          // Display styles
          displayLarge: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w700),
          displayMedium: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w600),
          displaySmall: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w600),
          
          // Headline styles
          headlineLarge: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w600),
          headlineMedium: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w600),
          headlineSmall: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w600),
          
          // Title styles
          titleLarge: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w600),
          titleMedium: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w500),
          titleSmall: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w500),
          
          // Body styles
          bodyLarge: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w400),
          bodyMedium: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w400),
          bodySmall: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w400),
          
          // Label styles
          labelLarge: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w500),
          labelMedium: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w500),
          labelSmall: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w500),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            textStyle: TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w500),
          ),
        ),
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => BuscomfySplashScreen(),
        '/onboarding': (context) => OnboardingScreen(),
        '/login': (context) => LoginScreen(),
        '/login-error': (context) => LoginErrorScreen(),
        '/forgot-password': (context) => ForgotPasswordScreen(),
        '/create-new-password': (context) => CreateNewPasswordScreen(),
        '/register': (context) => RegisterScreen(),
        '/my-account': (context) => MyAccountScreen(),
        '/luggage-check-in': (context) => LuggageCheckInScreen(),
        '/notifications': (context) => NotificationCenterScreen(),
        '/personal-info': (context) => PersonalInfoScreen(),
        '/feedback': (context) => FeedbackScreen(),
        '/help-center': (context) => HelpCenterScreen(),
        '/report-problem': (context) => ReportProblemScreen(),
        '/trip-details': (context) => TripDetailsScreen(),
        '/trip-stops': (context) => TripStopsScreen(),
        '/verification': (context) => VerificationScreen(),
      },
    );
  }
}
