import 'package:flutter/material.dart';

class BuscomfySplashScreen extends StatefulWidget {
  final VoidCallback? onTap;
  final String appName;
  final bool autoAdvance;
  final int delay;

  const BuscomfySplashScreen({
    Key? key,
    this.onTap,
    this.appName = "Buscomfy+",
    this.autoAdvance = false,
    this.delay = 3000,
  }) : super(key: key);

  @override
  State<BuscomfySplashScreen> createState() => _BuscomfySplashScreenState();
}

class _BuscomfySplashScreenState extends State<BuscomfySplashScreen> {
  @override
  void initState() {
    super.initState();
    if (widget.autoAdvance && widget.onTap != null) {
      Future.delayed(Duration(milliseconds: widget.delay), () {
        if (mounted) {
          widget.onTap!();
        }
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth <= 640;

    return Scaffold(
      body: GestureDetector(
        onTap: widget.onTap,
        child: Container(
          width: double.infinity,
          height: double.infinity,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xFFF97316), // orange-500
                Color(0xFFEA580C), // orange-600
              ],
            ),
          ),
          child: SafeArea(
            child: Center(
              child: Container(
                width: screenWidth * 0.9,
                height: 550,
                constraints: const BoxConstraints(maxWidth: 448),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(24),
                  image: const DecorationImage(
                    image: NetworkImage(
                      "https://cdn.builder.io/api/v1/image/assets%2F47bedcd915494a2c9d8c3faf11622396%2Fa353560963de4121ab0b9d86f096f4db",
                    ),
                    fit: BoxFit.cover,
                  ),
                ),
                child: Stack(
                  children: [
                    // Tap to continue text
                    if (widget.onTap != null && !widget.autoAdvance)
                      Positioned(
                        bottom: 16,
                        left: 0,
                        right: 0,
                        child: Center(
                          child: Text(
                            "Tap to continue",
                            style: TextStyle(
                              color: Colors.white.withOpacity(0.8),
                              fontSize: 12,
                              fontWeight: FontWeight.w400,
                              fontFamily: 'Inter',
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
      ),
    );
  }
}
