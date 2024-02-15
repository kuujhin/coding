import 'dart:async';

import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  static const twentyFiveMinutes = 5; //1500
  static const fiveMinutes = 3; //300

  int totalSeconds = twentyFiveMinutes;
  int settingTime = twentyFiveMinutes;
  int totalRound = 0;
  int totalGoal = 0;
  bool isRunning = false;
  bool isResting = false;
  int totalPomodoros = 0;

  late Timer timer;

  List<bool> isSelected = [false, false, true, false, false];

  void setTimer(int min) {
    timer.cancel();
    setState(() {
      isRunning = false;
      totalSeconds = (min * 5 + 15) * 60;
      settingTime = (min * 5 + 15) * 60;
      for (int i = 0; i < isSelected.length; i++) {
        if (i == min) {
          isSelected[i] = true;
        } else {
          isSelected[i] = false;
        }
      }
    });
  }

  void onTick(Timer timer) {
    if (totalSeconds == 0) {
      if (!isResting) {
        setState(() {
          if (totalRound == 3) {
            totalRound = 0;
            totalGoal = totalGoal + 1;
          } else {
            totalRound = totalRound + 1;
          }
          isRunning = false;
          isResting = true;
          totalSeconds = fiveMinutes;
        });
        timer.cancel();
      } else {
        setState(() {
          isRunning = false;
          isResting = false;
          totalSeconds = twentyFiveMinutes;
        });
        timer.cancel();
      }
    } else {
      setState(() {
        totalSeconds = totalSeconds - 1;
      });
    }
  }

  void onStartPressed() {
    timer = Timer.periodic(
      const Duration(seconds: 1),
      onTick,
    );
    setState(() {
      isRunning = true;
    });
  }

  void onPausePressed() {
    timer.cancel();
    setState(() {
      isRunning = false;
    });
  }

  void onResetPressed() {
    timer.cancel();
    setState(() {
      isRunning = false;
      totalSeconds = settingTime;
    });
  }

  String format(int seconds) {
    var duration = Duration(seconds: seconds);
    // print(duration);  // => 0:25:00.000000
    // print(duration.toString().split('.')); // => [0:25:00, 000000]
    // print(duration.toString().split('.').first); // => 0:25:00
    // print(duration.toString().split('.').first.substring(2,7)); // => 25:00

    return duration.toString().substring(2, 7);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      body: Column(
        children: [
          const Logo(),
          Flexible(
            flex: 1,
            child: Container(
              alignment: Alignment.bottomCenter,
              child: Text(
                format(totalSeconds),
                style: TextStyle(
                  color: Theme.of(context).cardColor,
                  fontSize: 90,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ),
          ),
          Flexible(
            flex: 2,
            child: Center(
              child: Column(
                children: [
                  isResting
                      ? const Text('Resting...')
                      : ToggleButtons(
                          // selectedColor: Theme.of(context).cardColor,
                          borderRadius: BorderRadius.circular(5),
                          // selectedBorderColor: Colors.black,
                          selectedColor:
                              Theme.of(context).colorScheme.background,
                          fillColor: Colors.white,
                          color: Colors.white,
                          isSelected: isSelected,
                          onPressed: setTimer,
                          children: const [
                              Padding(
                                padding: EdgeInsets.symmetric(
                                  vertical: 5,
                                  horizontal: 15,
                                ),
                                child: Text(
                                  '15',
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                              Padding(
                                padding: EdgeInsets.symmetric(
                                  vertical: 5,
                                  horizontal: 15,
                                ),
                                child: Text(
                                  '20',
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                              Padding(
                                padding: EdgeInsets.symmetric(
                                  vertical: 5,
                                  horizontal: 15,
                                ),
                                child: Text(
                                  '25',
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                              Padding(
                                padding: EdgeInsets.symmetric(
                                  vertical: 5,
                                  horizontal: 15,
                                ),
                                child: Text(
                                  '30',
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                              Padding(
                                padding: EdgeInsets.symmetric(
                                  vertical: 5,
                                  horizontal: 15,
                                ),
                                child: Text(
                                  '35',
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                            ]),
                  isRunning
                      ? IconButton(
                          iconSize: 120,
                          color: Theme.of(context).cardColor,
                          onPressed: onPausePressed,
                          icon: const Icon(
                            Icons.pause_circle_outline,
                          ),
                        )
                      : isResting
                          ? IconButton(
                              iconSize: 120,
                              color: Theme.of(context).cardColor,
                              onPressed:
                                  isRunning ? onPausePressed : onStartPressed,
                              icon: Icon(
                                isRunning
                                    ? Icons.pause_circle_outline
                                    : Icons.play_circle_outline_outlined,
                              ),
                            )
                          : Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                IconButton(
                                  iconSize: 120,
                                  color: Theme.of(context).cardColor,
                                  onPressed: isRunning
                                      ? onPausePressed
                                      : onStartPressed,
                                  icon: Icon(
                                    isRunning
                                        ? Icons.pause_circle_outline
                                        : Icons.play_circle_outline_outlined,
                                  ),
                                ),
                                IconButton(
                                  iconSize: 120,
                                  color: Theme.of(context).cardColor,
                                  onPressed: onResetPressed,
                                  icon: const Icon(
                                    Icons.refresh_outlined,
                                  ),
                                ),
                              ],
                            ),
                ],
              ),
            ),
          ),
          Flexible(
            flex: 1,
            child: Row(
              children: [
                Expanded(
                  child: Container(
                    decoration: BoxDecoration(
                      color: Theme.of(context).cardColor,
                      borderRadius: const BorderRadius.vertical(
                        top: Radius.circular(50),
                      ),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 70,
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                '$totalRound/4',
                                style: TextStyle(
                                    fontSize: 30,
                                    fontWeight: FontWeight.w600,
                                    color: Theme.of(context)
                                        .textTheme
                                        .displayLarge!
                                        .color),
                              ),
                              Text(
                                'ROUND',
                                style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.w600,
                                    color: Theme.of(context)
                                        .textTheme
                                        .displayLarge!
                                        .color),
                              ),
                            ],
                          ),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                '$totalGoal/12',
                                style: TextStyle(
                                    fontSize: 30,
                                    fontWeight: FontWeight.w600,
                                    color: Theme.of(context)
                                        .textTheme
                                        .displayLarge!
                                        .color),
                              ),
                              Text(
                                'GOAL',
                                style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.w600,
                                    color: Theme.of(context)
                                        .textTheme
                                        .displayLarge!
                                        .color),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class Logo extends StatelessWidget {
  const Logo({super.key});

  @override
  Widget build(BuildContext context) {
    return Flexible(
      flex: 1,
      child: Container(
        alignment: Alignment.topLeft,
        child: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: 30,
            horizontal: 20,
          ),
          child: Text(
            'POMOTIMER',
            style: TextStyle(
              color: Theme.of(context).cardColor,
              fontSize: 30,
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
      ),
    );
  }
}
