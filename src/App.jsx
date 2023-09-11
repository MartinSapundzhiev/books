import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Offers from './Components/Offers';
import Book from './Components/Book';
import ImageSlider from './Components/ImageSlider';
import Footer from './Components/Footer';
import './App.css';

export default function App() {

  

  return (
    <>
         <Navbar/>
        <Hero/>
        <Offers/>
        <Book/>
        <ImageSlider/>
        <Footer/>
    </>
  );
}