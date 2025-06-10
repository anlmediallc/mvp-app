import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:buscomfy_fixed/main.dart';

void main() {
  testWidgets('Widget test example', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MyApp());

    // Verify that our app displays a specific text.
    expect(find.text('Welcome to Buscomfy!'), findsOneWidget);
  });
}