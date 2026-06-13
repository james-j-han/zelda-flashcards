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

  let currentId = stack[stack.length - 1];
  let currentCard = flashcards.find(card => card.id === currentId);

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

  function nextCard() {
    if (stack.length > 1) {
      currentId = stack[stack.length - 1];
      setHistory([...history, currentId]);
      setStack(stack.slice(0, -1));
    }
  }

  function previousCard() {
    
  }

  return (
    <>
      <Header />
      {currentCard && (<FlashCard key={currentCard.id} front={currentCard.front} back={currentCard.back} />)}
      <button onClick={nextCard}>Next</button>
      <button onClick={previousCard}>Previous</button>
    </>
  )
}

export default App
