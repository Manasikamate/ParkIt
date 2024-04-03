import 'package:flutter/material.dart';
import 'package:mapbox_gl/mapbox_gl.dart';
import 'package:geolocator/geolocator.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ParkingSpot {
  final double latitude;
  final double longitude;

  ParkingSpot({required this.latitude, required this.longitude});
}

class UserPage extends StatefulWidget {
  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  late MapboxMapController _mapController;
  Position? _userLocation;
  List<ParkingSpot> _parkingSpots = [];

  @override
  void initState() {
    super.initState();
    _getUserLocation();
    _fetchParkingSpots();
  }

  Future<void> _getUserLocation() async {
    try {
      _userLocation = await Geolocator.getCurrentPosition();
    } catch (e) {
      print('Error getting user location: $e');
    }
  }

  Future<void> _fetchParkingSpots() async {
    // Make HTTP request to fetch parking spots from the database
    // Replace this URL with your backend endpoint
    final response = await http.get(Uri.parse('YOUR_BACKEND_ENDPOINT'));

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      // Parse the data and extract parking spots
      // Assuming the data is in the format {'parkingSpots': [{'latitude': 1.23, 'longitude': 4.56}, ...]}
      if (data['parkingSpots'] != null && data['parkingSpots'] is List) {
        setState(() {
          _parkingSpots = (data['parkingSpots'] as List)
              .map((spot) => ParkingSpot(
                    latitude: spot['latitude'],
                    longitude: spot['longitude'],
                  ))
              .toList();
        });
      }
    } else {
      print('Failed to fetch parking spots');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Parking Map'),
      ),
      body: _userLocation == null
          ? Center(child: CircularProgressIndicator())
          : MapboxMap(
              accessToken: 'pk.eyJ1Ijoic2hhbnRhbnUtMTIwNiIsImEiOiJjbHIxdjM4MmUwdTdsMmtvMXo5amVwOTc4In0.jhoYf0q63qLmHJg5pFQmNQ',
              initialCameraPosition: CameraPosition(
                target: LatLng(_userLocation!.latitude, _userLocation!.longitude),
                zoom: 14.0,
              ),
              onMapCreated: _onMapCreated,
              // No markers parameter here
            ),
    );
  }

  void _onMapCreated(MapboxMapController controller) {
    _mapController = controller;

    // Add markers after map is created
    _addMarkers();
  }

  void _addMarkers() {
    // Add user location marker
    _mapController.addSymbol(SymbolOptions(
      geometry: LatLng(_userLocation!.latitude, _userLocation!.longitude),
      iconImage: 'user-icon',
    ));

    // Add parking spot markers
    for (int i = 0; i < _parkingSpots.length; i++) {
      _mapController.addSymbol(SymbolOptions(
        geometry: LatLng(_parkingSpots[i].latitude, _parkingSpots[i].longitude),
        iconImage: 'parking-icon',
      ));
    }
  }
}

// void main() {
//   runApp(MaterialApp(
//     home: UserPage(),
//   ));
// }
