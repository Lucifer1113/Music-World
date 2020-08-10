import React from "react";
import Card from './Card';
import './Container.css'

const Container = () => {
  return (
    <div className='body'>
      <h1>Why Music World ??</h1>
      <div className='card-box'>
        <Card icon='musical-notes' title='Play your favorites.' text='Listen to the songs you love, and discover new music and podcasts.'/>
        <Card icon='albums' title='Playlists made easy.' text="We'll help you make playlists. Or enjoy playlists made by music experts." />
        <Card icon='heart' title='Make it yours.' text="Tell us what you like, and we'll recommend music for you."/>
        <Card icon='flash' title='Save mobile data.' text="To use less data when you play music, turn on Data Saver in Settings."/>
      </div>
    </div>
  );
};

export default Container;
