// import 'package:flutter/cupertino.dart'; //IOS App
import 'package:flutter/material.dart'; //Google App

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          elevation: 10,
          shadowColor: Colors.black,
          title: Text('Hello Flutter!'),
        ),
        body: Center(
          child: Text('Hello World!'),
        ),
      ),
    );
    // return CupertinoApp()
  }
}
