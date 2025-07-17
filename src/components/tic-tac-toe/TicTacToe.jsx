import React, { useEffect, useState } from 'react'


function Square({ value, onClick }) {

    return <button onClick={onClick} className='border border-red-500 float-left text-4xl h-[100px] w-[100px] p-0 text-center -mr-[1px] -mt-[1px] cursor-pointer bg-gray-100'>{value}</button>
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array().fill(''))
    const [isXTurn, setIsXTurn] = useState(true)
    const [status, setStatus] = useState('')

    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];
        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {

                return squares[x]
            }
        }

        return null
    }

    function handleRestart(){
        setStatus(true)
        setSquares(Array(9).fill(''))
    }

    function handleClick(getCurrentSquares) {
        let copySquares = [...squares];

        if (getWinner(copySquares) || copySquares[getCurrentSquares]) return;

        copySquares[getCurrentSquares] = isXTurn ? "X" : "0";
        setIsXTurn(!isXTurn);
        setSquares(copySquares)
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every((item) => item !== "")) {
            setStatus(`This is a draw ! please restart the game`);
        } 
        else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}. please restart the game`)
        } 
        else {
            setStatus(`Next Player is ${isXTurn ? 'X' : '0'}`)
        }
    }, [squares, isXTurn])
    return (
        <div className='tic-tac-toe-container flex flex-col items-center py-20'>
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <h1 className='text-4xl mb-4 mt-4'>{status}</h1>
            <button onClick={handleRestart} className='py-2 px-6 bg-green-500 text-white rounded-lg cursor-pointer'>Restart</button>
        </div>
    )
}

export default TicTacToe