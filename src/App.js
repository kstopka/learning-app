import React, { useState, useEffect } from "react";
import "./App.css";
import { initArr } from "./array";

const App = () => {
  const [array, setArray] = useState(initArr);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [completedCount, setCompletedCount] = useState(0);
  const [next, setNext] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [shownAnswer, setShownAnswer] = useState(false);
  const [answer, setAnswer] = useState(null);

  const handleAnswer = (index) => {
    if (index === answerIndex) {
      return setAnswerIndex(null);
    }
    if (currentIndex !== null) {
      setAnswer(array[currentIndex].answers[index]);
    }
    setAnswerIndex(index);
  };

  const handleNext = (arr) => {
    setNext(next + 1);
    getRandomIndex(arr);
    setAnswerIndex(null);
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
    setAnswerIndex(null);
  };

  const markAsDone = () => {
    if (currentIndex !== null) {
      const updatedArr = array.slice();
      updatedArr.splice(currentIndex, 1);
      setArray(updatedArr);
      setCompletedCount(completedCount + 1);
      getRandomIndex(updatedArr);
      setShownAnswer(false);
      setAnswerIndex(null);
    }
  };

  useEffect(() => {
    getRandomIndex(array);
    // const learn = array.sort((a, b) => {
    //   const numA = parseInt(a.question.match(/\d+/)[0]);
    //   const numB = parseInt(b.question.match(/\d+/)[0]);
    //   return numA - numB;
    // });

    // console.log("learn", learn);
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
              {answerIndex !== null && array && array.length > 0 && answer && (
                <div>
                  {answer.answer && <p>{answer.answer}</p>}
                  {answer.answers && answer.answers.length > 0 && (
                    <ul>
                      {answer.answers.map((el) => (
                        <li className="el-list">{el}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            <div className="bottom">
              <div className="buttons">
                <button onClick={reset}>Reset</button>

                {array && array.length > 0 && (
                  <button onClick={markAsDone}>Umiem</button>
                )}

                {array && array.length > 0 && (
                  <button onClick={() => handleNext(array)}>Dalej</button>
                )}

                {array && array.length > 0 && (
                  <div className="buttons-answers">
                    {array[currentIndex].answers.map((answer, index) => (
                      <button
                        onClick={() => handleAnswer(index)}
                        className={index === answerIndex ? "button-active" : ""}
                      >
                        {answer.title}
                      </button>
                    ))}
                  </div>
                )}
                {/* {!shownAnswer && array && array.length > 0 && (
                  <button onClick={() => setShownAnswer(true)}>
                    Odpowiedź
                  </button>
                )} */}
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
