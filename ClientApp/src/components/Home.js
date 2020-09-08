import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Trips </h1>
        <p>Welcome to your Trips Application </p>        
        <ul>
        <li>
         <Link to="/trip">View All Trips(Create , Update & delete Trip )</Link>
        </li>
        <li>
         <Link to="/Create">Add New Trips</Link>
        </li>
         
        </ul>
      </div>
    );
  }
}
