import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const imagesArray = [
  {
    imageUrl: '../img/cat23.png',
    alt: 'Raymond'
  },
  {
    imageUrl: '../img/chn02.png',
    alt: 'Eggbert'
  },
  {
    imageUrl: '../img/duk07.png',
    alt: 'Freckles'
  },
  {
    imageUrl: '../img/duk16.png',
    alt: 'Molly'
  },
  {
    imageUrl: '../img/ham04.png',
    alt: 'Soleil'
  },
  {
    imageUrl: '../img/hrs08.png',
    alt: 'Peaches'
  },
  {
    imageUrl: '../img/ocp00.png',
    alt: 'Octavian'
  },
  {
    imageUrl: '../img/pgn09.png',
    alt: 'Wade'
  },
  {
    imageUrl: '../img/rbt03.png',
    alt: 'Snake'
  },
  {
    imageUrl: '../img/shp12.png',
    alt: 'Muffy'
  },
  {
    imageUrl: '../img/wol03.png',
    alt: 'Whitney'
  }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Carousel imagesArray={imagesArray}/>
);
