import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header';
import FlashCard from './components/FlashCard';
import flashcards from './data/flashcards';

const App = () => {

  const [stack, setStack] = useState([]);
  const [history, setHistory] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  // Fisher-Yates algo
  const shuffle = (cards) => {

    // Create a copy instead of mutating original array directly
    const shuffled = [...cards];

    // Start with length - 1 so we iterate one less than array length
    // because position 0 can be ignored
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  };

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
