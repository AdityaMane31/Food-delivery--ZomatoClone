import React from 'react';
import '../styles/App.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      <h2>{restaurant.name}</h2>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
};

export default RestaurantCard;