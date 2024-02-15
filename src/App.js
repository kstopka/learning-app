import React, { useState, useEffect } from "react";
import "./App.css";
import { initArr } from "./array";

const App = () => {
  const [array, setArray] = useState(initArr);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [completedCount, setCompletedCount] = useState(0);
  const [next, setNext] = useState(0);
  const [shownAnswer, setShownAnswer] = useState(false);

  const handleNext = (arr) => {
    setNext(next + 1);
    getRandomIndex(arr);
  };
  const getRandomIndex = (arr) => {
    if (arr.length === 1 || arr.length === 0) {
      setCurrentIndex(0);
      setShownAnswer(false);
      return;
    }
    let randomIndex = Math.floor(Math.random() * arr.length);
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * arr.length);
    }
    setCurrentIndex(randomIndex);
    setShownAnswer(false);
  };

  const reset = () => {
    setArray(initArr);
    setCompletedCount(0);
    setNext(0);
    setShownAnswer(false);
    getRandomIndex(initArr);
  };

  const markAsDone = () => {
    if (currentIndex !== null) {
      const updatedArr = array.slice();
      updatedArr.splice(currentIndex, 1);
      setArray(updatedArr);
      setCompletedCount(completedCount + 1);
      getRandomIndex(updatedArr);
      setShownAnswer(false);
    }
  };

  useEffect(() => {
    getRandomIndex(array);
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        {currentIndex !== null && (
          <div className="content">
            <div className="top">
              {array && array.length > 0 && (
                <h2>{array[currentIndex].question}</h2>
              )}
              {shownAnswer && array && array.length > 0 && (
                <p>{array[currentIndex].answer}</p>
              )}
            </div>
            <div className="bottom">
              <div className="buttons">
                {!shownAnswer && array && array.length > 0 && (
                  <button onClick={() => setShownAnswer(true)}>
                    Odpowiedź
                  </button>
                )}
                {array && array.length > 0 && (
                  <button onClick={markAsDone}>Umiem</button>
                )}
                {array && array.length > 0 && (
                  <button onClick={() => handleNext(array)}>Dalej</button>
                )}
                <button onClick={reset}>Reset</button>
              </div>

              <p>
                {completedCount}/{initArr.length} --- {next}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
