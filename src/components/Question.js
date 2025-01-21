import React, { useState, useEffect } from 'react';

const Question = ({ question, onAnswered }) => {
    const [timeRemaining, setTimeRemaining] = useState(10);

    useEffect(() => {
        let timerId;

      if (timeRemaining > 0){
          timerId = setTimeout(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
          }, 1000);
      }

      if (timeRemaining === 0) {
            setTimeRemaining(10)
            onAnswered(false);
      }

        return () => {
             clearTimeout(timerId);
        };
    }, [timeRemaining, onAnswered]);

    return (
        <div>
            <h3>{question.text}</h3>
            <p>{timeRemaining} seconds remaining</p>
            <ul>
                {question.answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                ))}
            </ul>
        </div>
    );
};

export default Question;