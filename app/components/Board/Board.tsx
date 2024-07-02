"use client";
import React, { useState, useEffect } from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.css";

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Board: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [circleTurn, setCircleTurn] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = circleTurn ? CIRCLE_CLASS : X_CLASS;
    setBoard(newBoard);
    setCircleTurn(!circleTurn);
  };

  useEffect(() => {
    const checkWin = (currentClass: string) => {
      return WINNING_COMBINATIONS.some((combination) => {
        return combination.every((index) => {
          return board[index] === currentClass;
        });
      });
    };

    const isDraw = () => {
      return board.every((cell) => cell !== "");
    };

    if (checkWin(X_CLASS)) {
      setWinner(X_CLASS);
    } else if (checkWin(CIRCLE_CLASS)) {
      setWinner(CIRCLE_CLASS);
    } else if (isDraw()) {
      setWinner("draw");
    }
  }, [board]);

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setCircleTurn(false);
    setWinner(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board} id="board">
        {board.map((value, index) => (
          <Cell key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      {winner && (
        <div
          className={`${styles.winningMessage} ${styles.show}`}
          id="winningMessage"
        >
          <div>
            {winner === "draw"
              ? "Draw!"
              : `${winner === X_CLASS ? "X's" : "O's"} Wins!`}
          </div>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Board;
