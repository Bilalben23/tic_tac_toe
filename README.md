# Tic Tac Toe Game

## Overview

This is a simple Tic Tac Toe game built with **React** and styled using **Tailwind CSS**. The game allows two players to take turns placing their marks (X or O) on a 3x3 grid, with the goal of getting three marks in a row, column, or diagonal. The game also detects a draw when all cells are filled without a winner.

## Features

- **Two-player gameplay**: Players take turns to mark their respective cells.
- **Win Detection**: The game detects a win based on rows, columns, or diagonals.
- **Draw Detection**: The game identifies a draw when no cells are left and no winner is declared.
- **Restart Game**: Users can restart the game after a win or a draw.
- **Dynamic UI**: Winning buttons remain highlighted while other buttons fade after the game ends.

## Technologies Used

- **React**: For building the interactive user interface.
- **Tailwind CSS + daisyUI plugin**: For responsive and elegant styling.
- **Toastify**: For in-game notifications such as win announcements or game restarts.
- **React Hooks**: `useState`, `useEffect` for managing state and side effects.

## Game Logic

- The game board is a 3x3 grid where players alternate turns.
- The winner is declared when a player gets three of their marks (X or O) in a row, column, or diagonal.
- If all cells are filled and no player has won, the game ends in a draw.
- The game can be restarted at any point by clicking the "Restart" button.

## How to Play

1. Player X starts first and clicks any square on the 3x3 grid.
2. Player O follows by clicking an empty square.
3. Players continue alternating turns until one player wins or the game ends in a draw.
4. A toast notification will announce the winner, and the winning squares will remain highlighted.
   
## Preview
- you can start playing now!: (tic tac toe)[https://bilalben23.github.io/tic_tac_toe/]

<img width="371" alt="Screenshot 2024-09-26 220559" src="https://github.com/user-attachments/assets/c45851ab-67a3-4265-8b12-1b03b42a94c1">

