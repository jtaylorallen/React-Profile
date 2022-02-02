import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-WnW-logo.jpg'
              text='A pet adoption webpage'
              label='Wags n Whiskers'
              path='/projects'
            />
            <CardItem
              src='images/img-VividStroke7.png'
              text='Digital art shopping app'
              label='VividStroke'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-coding.jpg'
              text='Project'
              label='Budget Tracker'
              path='/projects'
            />
            <CardItem
              src='images/img-coding.jpg'
              text='Project'
              label='New Prject'
              path='/projects'
            />
            <CardItem
              src='images/img-coding.jpg'
              text='Project'
              label='New Project'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;