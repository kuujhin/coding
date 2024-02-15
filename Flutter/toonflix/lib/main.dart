// import 'package:flutter/cupertino.dart'; //IOS App
import 'package:flutter/material.dart';

void main() {
  runApp(const App());
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  List<int> numbers = [];

  void addCount() {
    setState(() {
      numbers.add(numbers.length);
    });
  }

  void reset() {
    setState(() {
      numbers = [];
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xFFF4EDDB),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Click Count',
                style: TextStyle(
                  fontSize: 30,
                ),
              ),
              for (var n in numbers) Text('$n'),
              IconButton(
                iconSize: 40,
                onPressed: addCount,
                icon: const Icon(
                  Icons.add_box_rounded,
                ),
              ),
              IconButton(
                iconSize: 40,
                onPressed: reset,
                icon: const Icon(
                  Icons.refresh_sharp,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
