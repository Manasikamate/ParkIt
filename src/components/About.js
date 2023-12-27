// Create a new React component for the About Us page
import React from 'react';

const About = () => {
  return (
    <div>
      <header>
        <h1>ParkingPal</h1>
        <p>Your Ultimate Parking Solution</p>
      </header>

      <section>
        <h2>About Us</h2>
        <p>Welcome to ParkingPal, your go-to platform for efficient parking management. Our mission is to connect parking spot owners with individuals in need of convenient and secure parking spaces.</p>

        <h2>How it Works</h2>
        <p>Are you a parking spot owner with an unutilized space? ParkingPal allows you to easily list your spot for rent. Earn extra income by sharing your available parking space with those who need it.</p>

        <p>On the other hand, if you're tired of searching for parking every time you visit a busy area, ParkingPal is here to help. Browse available parking spots, compare prices, and reserve the spot that suits your needs.</p>

        <h2>Our Vision</h2>
        <p>At ParkingPal, we envision a world where parking is no longer a hassle. We strive to create a community where individuals can effortlessly find parking spaces while helping others make the most of their unoccupied spots.</p>

        <h2>Contact Us</h2>
        <p>Have questions or suggestions? We'd love to hear from you. Contact our support team at <a href="mailto:support@parkingpal.com">support@parkingpal.com</a>.</p>
      </section>
    </div>
  );
};

export default About;
