import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header';
import FlashCard from './components/FlashCard';
import flashcards from './data/flashcards';

const App = () => {

  // Lazy init
  const [stack, setStack] = useState(() => shuffle(flashcards.map(cards => cards.id)));
  const [history, setHistory] = useState([]);

  const currentId = stack[stack.length - 1];

  // Fisher-Yates algo
  function shuffle(cards) {

    // Create a copy instead of mutating original array directly
    // const shuffled = [...cards];
    // cards is a copy from .map so new/copy of array not needed

    // Start with length - 1 so we iterate one less than array length
    // because position 0 can be ignored
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
  };

  return (
    <>
      <Header />
      <FlashCard key={flashcards[currentId].id} front={flashcards[currentId].front} back={flashcards[currentId].back} />
    </>
  )
}

export default App
