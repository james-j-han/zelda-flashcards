import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header';
import FlashCard from './components/FlashCard';
import flashcards from './data/flashcards';

const App = () => {


  return (
    <>
      <Header />
      {
        flashcards.map(card => (
          <FlashCard key={card.id} front={card.front} back={card.back} />
        ))
      }
    </>
  )
}

export default App
