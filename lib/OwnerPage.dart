import 'package:flutter/material.dart';

class OwnerPage extends StatelessWidget {
  static const IconData history = IconData(0xe314, fontFamily: 'MaterialIcons');
  static const IconData info = IconData(0xe33c, fontFamily: 'MaterialIcons');
  static const IconData contacts = IconData(0xe18f, fontFamily: 'MaterialIcons');
  static const IconData notifications = IconData(0xe44f, fontFamily: 'MaterialIcons');
  static const IconData policy = IconData(0xe4d9, fontFamily: 'MaterialIcons');
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: Text('User Profile', style: TextStyle(color: Color(0xFFFFFFFF))),
      ),
      drawer: Drawer(
        child: Container(
          color: Colors.black, // Set the background color of the drawer window to black
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              UserAccountsDrawerHeader(
                decoration: BoxDecoration(
                  color: Colors.black, // Set the background color of the header to black
                ),
                accountName: Text('Hello Mrun'),
                accountEmail: Text('mrun@example.com'),
                currentAccountPicture: CircleAvatar(
                  
                  radius: 30,
                  backgroundImage: AssetImage('assets/profile_photo.jpeg'),
                ),
              ),
              ListTile(
                title: Text('Medical History', style: TextStyle(color: Colors.white)),
                leading: Icon(Icons.history, color: Colors.white),
                onTap: () {
                  Navigator.pop(context);
                },
              ),
              ListTile(
                title: Text('Caretaker Info', style: TextStyle(color: Colors.white)),
                leading: Icon(Icons.info, color: Colors.white),
                onTap: () {
                  Navigator.pop(context);
                },
              ),
              ListTile(
                title: Text('Emergency Contact', style: TextStyle(color: Colors.white)),
                leading: Icon(Icons.contacts, color: Colors.white),
                onTap: () {
                  Navigator.pop(context);
                },
              ),
              ListTile(
                title: Text('Notifications Settings', style: TextStyle(color: Colors.white)),
                leading: Icon(Icons.notifications, color: Colors.white),
                onTap: () {
                  Navigator.pop(context);
                },
              ),
               ListTile(
                
                title: Text('Terms and Policies', style: TextStyle(color: Colors.white)),
                leading: Icon(Icons.policy, color: Colors.white),
                onTap: () {
                  Navigator.pop(context);
                },
              ),
            ],
          ),
        ),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.asset(
              'assets/medzcue.png',
              width: 300,
              height: 300,
              fit: BoxFit.cover,
            ),
          ],
        ),
      ),
    );
  }
}
