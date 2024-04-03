import 'dart:async';

import 'package:flutter/material.dart';
// import 'LoginPage.dart';
import 'Carousel.dart';

class SplashSrc extends StatefulWidget {
  @override
  _SplashSrcState createState() => _SplashSrcState();
}

class _SplashSrcState extends State<SplashSrc> {
@override
  void initState() {
    
    super.initState();
    Timer(Duration(seconds: 5),(){
      Navigator.pushReplacement(
  context,
  MaterialPageRoute(
    builder: (context) => Carousel(),
  ),
);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Color.fromARGB(255, 13, 3, 100),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Assuming the background of the GIF is transparent after editing
              Image.asset(
                'assets/splash.gif',
                width: 200,
                height: 200,
                // You can adjust the BoxFit based on the dimensions of your GIF
                fit: BoxFit.cover,
              ),
              SizedBox(height: 50),
              Text(
                'ParkIT',
                style: TextStyle(
                  fontSize: 45,
                  color: Color.fromARGB(255, 255, 255, 255),
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 10),
              Center( // Center align the text
                child: Text(
                  'Enjoy the hustle free parking experience',
                  style: TextStyle(
                    fontSize: 20,
                    color: Color.fromARGB(255, 255, 41, 41),
                  ),
                  textAlign: TextAlign.center, // Set text alignment to center
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
