import 'package:flutter/material.dart';

class BuscomfySplashScreen extends StatelessWidget {
  const BuscomfySplashScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GestureDetector(
        onTap: () {
          Navigator.pushReplacementNamed(context, '/onboarding');
        },
        child: Container(
          decoration: BoxDecoration(
            // Use local asset instead of network image
            image: DecorationImage(
              image: AssetImage('assets/backgrounds/orange_bg.svg'),
              fit: BoxFit.cover,
            ),
          ),
          child: Center(
            child: Container(
              constraints: BoxConstraints(maxWidth: 448),
              height: 550,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [
                    Color(0xFFF97316), // rgb(249, 115, 22)
                    Color(0xFFEA580C), // rgb(234, 88, 12)
                  ],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(24),
              ),
              child: Stack(
                children: [
                  // Background image overlay - use local asset
                  Positioned.fill(
                    child: Container(
                      decoration: BoxDecoration(
                        image: DecorationImage(
                          image: AssetImage('assets/images/splash_background.jpg'),
                          fit: BoxFit.cover,
                        ),
                        borderRadius: BorderRadius.circular(24),
                      ),
                    ),
                  ),
                  
                  // "Tap to continue" text
                  Positioned(
                    bottom: 16,
                    left: 0,
                    right: 0,
                    child: Center(
                      child: Text(
                        'Tap to continue',
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.8),
                          fontSize: 12,
                          fontWeight: FontWeight.w400,
                          height: 1.33,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
