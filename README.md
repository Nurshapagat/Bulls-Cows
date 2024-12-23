Tittle: Sample game: Bulls & Cows 
Project objectives:
The goal of this project is to create the "Bulls and Cows" game. The primary objective is to encourage users to develop their logical reasoning skills by guessing numbers. The game serves as both entertainment and a tool for enhancing analytical thinking.
Project Features:
1.	Game Rules: The user must correctly guess a 4-digit number. Each digit can only appear once.
2.	Interactive Interface: Users can input their guesses and immediately see the results (bulls and cows).
3.	Guess History: Each guess's results are displayed on the screen, allowing users to track their previous attempts.
4.	Win Notification: A congratulatory message is shown when the user guesses the number correctly.
5.	Restart Option: A dedicated button allows the user to restart the game.
6.	Animations and Sounds: Visual and audio elements are added to enhance user engagement.
JavaScript Usage:
1.	Game Logic Implementation: The core game logic is developed using JavaScript, including:
o	Randomly generating the hidden 4-digit number.
o	Validating user guesses and calculating the results for bulls (correct digit and position) and cows (correct digit, wrong position).
2.	Handling User Interactions:
o	Receiving and processing user inputs.
o	Displaying error messages for invalid inputs.
3.	Manipulating HTML Elements:
o	Adding guess results to the history table.
o	Displaying a win message and enabling the restart functionality.
4.	Animations and Sounds:
o	Managing the movement of visual elements and playing sounds to create engaging effects.
This document provides a concise overview of the project structure, its features, and how JavaScript is utilized to implement them effectively.
User Guide: Examples of Use Cases
Objective of the Game:
In the "Bulls and Cows" game, the user must correctly guess a 4-digit secret number. Each digit is unique and does not repeat.
User Guide:
1.	Starting the Game:
o	The user inputs a 4-digit number in the game interface.
o	The number must consist of unique digits and exactly four digits.
2.	Feedback:
o	After each input, the user receives feedback indicating the number of "bulls" and "cows":
	Bulls: Correct digit in the correct position.
	Cows: Correct digit but in the wrong position.
o	Example: If the secret number is "1234" and the entered number is "1325":
	Bulls: 1 (The "1" in the first position).
	Cows: 2 ("2" and "3", but their positions are incorrect).
3.	History:
o	Each guess is added to a history table that displays:
	The attempt number.
	The entered number.
	The number of bulls and cows.
4.	Winning:
o	If the user guesses all 4 digits correctly, a victory message is displayed on the screen.
o	Victory message: "Congratulations! You guessed the number [secret number] in [number of attempts] attempts!"
5.	Restarting the Game:
o	Using the "Restart" button, the game resets. All history and feedback are cleared.
Examples of Use Cases:
Case 1: Valid Input
•	The user enters a number: "5678".
•	Feedback: Bulls - 2, Cows - 1.
•	The guess is recorded in the history table.
Case 2: Invalid Input
•	The user enters an invalid number: "1123" (repeated digits).
•	Feedback: "Please enter a valid 4-digit number with unique digits."
Case 3: Winning the Game
•	The user correctly guesses the number: "1234".
•	Message: "Congratulations! You guessed the secret number in 7 attempts!"
•	The "Restart" option becomes available.
This guide provides users with all the necessary information to play the game effectively.
