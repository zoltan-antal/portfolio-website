import './AnimatedWordDisplay.css';
import { useState, useEffect, useMemo } from 'react';

const AnimatedWordDisplay = ({ words }) => {
  const delays = useMemo(
    () => ({
      type: 100,
      delete: 50,
      typePause: 400,
      deletePause: 2250,
      caretBlink: 1000,
    }),
    []
  );

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        let newDisplayedWord = displayedWord;
        let newIndex = charIndex;

        if (isDeleting) {
          newDisplayedWord = displayedWord.substring(0, charIndex - 1);
          newIndex -= 1;
        } else {
          newDisplayedWord = words[currentWordIndex].substring(
            0,
            charIndex + 1
          );
          newIndex += 1;
        }

        setDisplayedWord(newDisplayedWord);
        setCharIndex(newIndex);

        // Check if word is fully typed or deleted
        if (!isDeleting && newDisplayedWord === words[currentWordIndex]) {
          setIsDeleting(true);
        } else if (isDeleting && newDisplayedWord === '') {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsDeleting(false);
        }
      },
      // Delays
      (() => {
        if (displayedWord === words[currentWordIndex]) {
          // Before deleting
          return delays.deletePause;
        } else if (displayedWord === '') {
          // Before displaying new word
          return delays.typePause;
        } else if (isDeleting) {
          // When deleting
          return delays.delete;
        } else {
          // When writing
          return delays.type;
        }
      })()
    );

    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [displayedWord, charIndex, isDeleting, currentWordIndex, words, delays]);

  return (
    <div className="animated-word-display">
      <span className="word">{displayedWord}</span>
      <span
        className={`caret${
          displayedWord === words[currentWordIndex] ? ' blinking' : ''
        }`}
        style={{ '--blink-duration': `${delays.caretBlink}ms` }}
      >
        |
      </span>
    </div>
  );
};

export default AnimatedWordDisplay;
