// import 'dart:async';
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'LoginPage.dart';
class Carousel extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double screenHeight = MediaQuery.of(context).size.height;

    return Scaffold(
      backgroundColor: Color.fromARGB(255, 13, 3, 100),
      body: Stack(
        children: [
          // Blue background
          Container(
            color: Color.fromARGB(255, 13, 3, 100),
          ),
          // White content with carousel and buttons
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            bottom: screenHeight * 0.20,
            child: Container(
              padding: EdgeInsets.all(6),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.vertical(top: Radius.circular(20),bottom:Radius.circular(20) ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                mainAxisSize: MainAxisSize.min,
                children: [
                  // Carousel between two Column components
                  CarouselSlider(
                    options: CarouselOptions(
                      height: 500.0,
                      autoPlay: true,
                      enlargeCenterPage: true,
                    ),
                    items: [
                      // Item 1
                     Column(
  children: [
    Padding(
      padding: EdgeInsets.only(top: 130), // Add padding to the top
      child: Image.asset(
        'assets/p3.jpeg',
        fit: BoxFit.cover,
        width: 200.0,
        height: 200.0,
      ),
    ),
    SizedBox(height: 20),
    Container(
      width: 250, // Adjust the width as needed
      child: Expanded(
        child: Text(
          'Transform your unutilized parking spot into a source of passive income with ease. Your empty spot is someone else\'s convenience ',
          style: TextStyle(
            fontSize: 15,
            color: Colors.grey,
          ),
          textAlign: TextAlign.justify,
        ),
      ),
    ),
  ],
),
                      // Item 2
                      Column(
                        children: [
                          Padding(
                            padding: EdgeInsets.only(top: 130), // Add padding to the top
                            child: Image.asset(
                              'assets/p2.png',
                              fit: BoxFit.cover,
                              width: 260.0,
                              height: 200.0,
                            ),
                          ),
                          SizedBox(height: 20),
                          
                         Container(
                          width: 250,
                          child:  Expanded(
                            child: Text(
                              'Discover hassle-free parking solutions within your vicinity. Navigating your way to convenience has never been easier',
                              style: TextStyle(
                                fontSize: 15,
                                color: Colors.grey,
                              ),
                              textAlign: TextAlign.justify,
                            ),
                          ),
                         )
                        ],
                      ),
                      // Add more items as needed
                      Column(
                        children: [
                          Padding(
                            padding: EdgeInsets.only(top: 130), // Add padding to the top
                            child: Image.asset(
                              'assets/p1.jpeg',
                              fit: BoxFit.cover,
                              width: 200.0,
                              height: 200.0,
                            ),
                          ),
                          SizedBox(height: 20),
                          Container(
                            width: 250,
                            child: Expanded(
                            child: Text(
                              'Unlock secure, cost-effective parking in your vicinity. Enjoy peace of mind without breaking the bank',
                              style: TextStyle(
                                fontSize: 15,
                                color: Colors.grey,
                              ),
                              textAlign: TextAlign.justify,
                            ),
                          ),
                          )
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          // Login and Signup buttons in a row at the bottom
          Positioned(
            bottom: 50,
            left: 0,
            right: 0,
            child: Container(
              padding: EdgeInsets.all(5),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      // Add functionality for login button
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => LoginPage()),
                      );
                    },
                    child: Text('Dive in'),
                    style: ElevatedButton.styleFrom(
                      fixedSize: Size(150, 50),
                       // Adjust the width and height as needed
                    ),
                  ),
                  // ElevatedButton(
                  //   onPressed: () {
                  //     // Add functionality for signup button
                  //     Navigator.push(
                  //       context,
                  //       MaterialPageRoute(builder: (context) => LoginPage()),
                  //     );
                  //   },
                  //   child: Text('Sign up'),
                  //   style: ElevatedButton.styleFrom(
                  //     fixedSize: Size(150, 50), // Adjust the width and height as needed
                  //   ),
                  // ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
