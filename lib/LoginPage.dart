import 'package:flutter/material.dart';
import 'UserLogin.dart';
import 'OwnerLogin.dart';
class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login Options'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: () {
                // Navigate to login as user page
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => UserLogin()),
                );
              },
              child: Column(
                children: [
                  Image.asset(
                    'assets/user_icon.png', // Replace with actual image asset
                    width: 100,
                    height: 100,
                  ),
                  SizedBox(height: 10),
                  Text('Login as User'),
                ],
              ),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Navigate to login as owner page
                 Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => OwnerLogin()),
                );
              },
              child: Column(
                children: [
                  Image.asset(
                    'assets/owner_icon.png', // Replace with actual image asset
                    width: 100,
                    height: 100,
                  ),
                  SizedBox(height: 10),
                  Text('Login as Owner'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
