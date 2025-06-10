import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:buscomfy_fixed/main.dart';

void main() {
  testWidgets('Initial widget test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(MyApp());

    // Verify that our app displays a specific widget.
    expect(find.text('Welcome to Buscomfy Fixed!'), findsOneWidget);
  });
}