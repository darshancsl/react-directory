import React, { useEffect, useState } from "react";
import "./TickTacToe.css";
import { Col, Row } from "react-bootstrap";

const TickTacToe = () => {
  let arr = [
    { id: 0, value: false },
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
    { id: 4, value: false },
    { id: 5, value: false },
    { id: 6, value: false },
    { id: 7, value: false },
    { id: 8, value: false },
  ];
  const [gameList, setGameList] = useState(arr);
  const [turn, setTurn] = useState("X");
  const [isWinner, setIsWinner] = useState("");

  const handleClick = (e) => {
    let temp = gameList.map((el) => {
      return el.id.toString() === e.target.id && el.value === false
        ? { ...el, value: turn }
        : el;
    });
    setGameList(temp);
    setTurn((prev) => (prev === "X" ? "O" : "X"));
  };

  const checkWinner = (board) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        board[a].value &&
        board[a].value === board[b].value &&
        board[a].value === board[c].value
      ) {
        return board[a].value;
      }
    }

    return null;
  };

  const resetGame = () => {
    setGameList(arr);
    setIsWinner("");
  };

  useEffect(() => {
    const winner = checkWinner(gameList);
    if (winner) {
      setIsWinner(winner);
    }
  }, [gameList]);

  return (
    <section className='bg-default'>
      <h1 className='fs-2 fw-bold text-center py-4 text-light'>Tick Tac Toe</h1>
      {isWinner && (
        <div className='d-flex justify-content-center w-75 mx-auto'>
          <h1 className='text-success mb-4'>{`Player "${isWinner}" is Winner`}</h1>
          <div>
            <button className='reset-btn' onClick={resetGame}>
              Reset
            </button>
          </div>
        </div>
      )}
      <div className='board'>
        {gameList.reduce((rows, item, index) => {
          if (index % 3 === 0) {
            rows.push(
              <Row key={`row-${index / 3}`} onClick={handleClick}>
                {gameList.slice(index, index + 3).map(({ id, value }) => (
                  <Col
                    className='justify-content-center align-items-center d-flex'
                    key={id}
                    id={String(id)}
                  >
                    <span className='mb-2 text-success fs-1 fw-bold'>
                      {value === false ? "" : value}
                    </span>
                  </Col>
                ))}
              </Row>
            );
          }
          return rows;
        }, [])}
      </div>
    </section>
  );
};

export default TickTacToe;
