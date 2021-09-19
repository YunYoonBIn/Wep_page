import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer";

let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}

function OneToFifty() {
  const [numbers, setNumbers] = useState(array);
  const [gameFlag, setGameFlag] = useState(false);
  const [current, setCurrent] = useState(1);
  const handleClick = num => {
    if (num === current && gameFlag) {
      if (num === 50) {
        console.log("Success");
        endGame();
      }
      const index = numbers.indexOf(num);
      setNumbers(numbers => [
        ...numbers.slice(0, index),
        num < 26 ? num + 25 : 0,
        ...numbers.slice(index + 1)
      ]);
      setCurrent(current => current + 1);
    }
  };
  const startGame = () => {
    setNumbers(shuffleArray(array));
    setCurrent(1);
    setGameFlag(true);
  };
  const endGame = () => {
    setGameFlag(false);
  };

  return (
    <Container>
      <Board numbers={numbers} handleClick={handleClick}></Board>
      {gameFlag ? (
        <Timer />
      ) : (
        <StartButton onClick={startGame}>start</StartButton>
      )}
    </Container>
  );
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Container = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 50px;
`;

export default OneToFifty;
