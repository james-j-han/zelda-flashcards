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
  // const [currentId, setCurrentId] = useState(stack[stack.length - 1]);

  let currentId = stack[stack.length - 1];
  // .find runs on each rerender
  let currentCard = flashcards.find(card => card.id === currentId);

  // Fisher-Yates algo
  function shuffle(cards) {

    // Create a copy instead of mutating original array directly
    // const shuffled = [...cards];
    // cards is already a copy from .map so above line is not needed

    // Start with length - 1 so we iterate one less than array length
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
  };

  function nextCard() {
    if (stack.length > 1) {
      // Current stack [0, 1, 2, 3, 4]
      const newStack = stack.slice(0, -1);
      setStack(newStack);
      // New stack [0, 1, 2, 3]

      // Current ID should still be 4, add it to history stack
      const newHistory = [...history, currentId];
      setHistory(newHistory);

      // Then set current id (should be 3)
      currentId = newStack[newStack.length - 1];
      console.log(`New Stack ${newStack}`);
      console.log(`New History ${newHistory}`);
      console.log(`Current ID: ${currentId}`);
    }
  }

  function previousCard() {
    if (history.length > 0) {
      // Set cu
      currentId = history[history.length - 1];
      const newStack = [...stack, currentId];
      setStack(newStack);

      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      console.log(`New Stack ${newStack}`);
      console.log(`New History ${newHistory}`);
      console.log(`Current ID: ${currentId}`);
    }
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
