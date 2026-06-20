import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header';
import FlashCard from './components/FlashCard';
import AnswerForm from './components/AnswerForm';
import Stats from './components/Stats';
import flashcards from './data/flashcards';

const App = () => {

  const [shuffle, setShuffle] = useState(false);
  
  // lift up state so children components can access (set and/or get)
  const [correct, setCorrect] = useState(null);

  // Lazy init
  // set stack default to in order
  const [stack, setStack] = useState(() => flashcards.map(card => card.id));
  const [history, setHistory] = useState([]);
  // const [currentId, setCurrentId] = useState(stack[stack.length - 1]);

  let currentId = stack[stack.length - 1];
  // .find runs on each rerender
  let currentCard = flashcards.find(card => card.id === currentId);

  // keep track if we are at the beginning or end for button styling (enabled/disabled)
  const isAtStart = history.length === 0; // history is empty so prevButton should be grayed/disabled
  const isAtEnd = stack.length <= 1; // stack is empty so nextButton should be grayed/disabled

  // keep track of current and longest streak
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  // Fisher-Yates algo
  function shuffleCards(cards) {

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
    }

    // reset correct to null
    setCorrect(null);
  }

  function previousCard() {
    if (history.length > 0) {
      currentId = history[history.length - 1];
      const newStack = [...stack, currentId];
      setStack(newStack);

      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
    }

    // reset correct to null
    setCorrect(null);
  }

  function reset() {
    // set stack based on current shuffle value
    setStack(shuffle ? shuffleCards(flashcards.map(card => card.id)) : flashcards.map(card => card.id));
    // setStack(shuffle(flashcards.map(card => card.id)));
    setHistory([]);

    // reset correct to null
    setCorrect(null);
  }

  function toggleShuffle() {
    // need new variable to hold changed state of shuffle otherwise would use old/current value which has not updated yet
    const newShuffle = !shuffle;
    setShuffle(newShuffle);

    const ids = flashcards.map(card => card.id);
    // based on newShuffle value, set stack to in order or shuffled
    setStack(newShuffle ? shuffleCards(ids) : ids);
    // setStack(shuffle ? shuffleCards(flashcards.map(card => card.id)) : flashcards.map(card => card.id));
    setHistory([]);
    console.log("toggled");
  }

  return (
    <>
      <Header cardCount={flashcards.length} />
      <Stats currentStreak={currentStreak} longestStreak={longestStreak} />
      <div className='flashcard-container'>
        {currentCard && (<FlashCard key={currentCard.id} front={currentCard.front} back={currentCard.back} />)}
      </div>
      <AnswerForm
        back={currentCard.back}
        currentStreak= {currentStreak}
        setCurrentStreak={setCurrentStreak}
        longestStreak={longestStreak}
        setLongestStreak={setLongestStreak}
        correct={correct}
        setCorrect={setCorrect}
      />
      <div className='button-container'>
        <button className={isAtStart ? 'disabled' : 'enabled'} onClick={previousCard}>Previous</button>
        <button onClick={reset}>Reset</button>
        <button className={isAtEnd ? 'disabled' : 'enabled'} onClick={nextCard}>Next</button>
        <button onClick={toggleShuffle}>Shuffle</button>
      </div>
    </>
  )
}

export default App
