import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import '../styles/App.css';

const Restaurants = () => {
  const restaurants = [
    { id: 1, name: 'Menu1', cuisine: 'Indian', rating: 4.5 },
    { id: 2, name: 'Menu 2', cuisine: 'Chinese', rating: 4.2 },
    { id: 3, name: 'Menu 3', cuisine: 'Italian', rating: 4.7 },
  ];

  return (
    <div className="restaurants">
      <h1>Restaurants</h1>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants; 