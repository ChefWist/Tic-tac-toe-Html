const buttons = document.querySelectorAll(".button");
let playerX = true;

buttons.forEach(button => {
	button.addEventListener("click", event => {
		if(event.target.textContent === " " && document.getElementById("result").textContent === "Play the game by tapping on the squares."){
			const playerDisplay = document.getElementById("player");
			if(playerX){
				event.target.textContent = "X";
				event.target.classList.add("x");
				playerX = false;
				playerDisplay.classList.remove("x");
				playerDisplay.classList.add("o");
				playerDisplay.textContent = "O turn";
			} else {
				event.target.textContent = "O";
				event.target.classList.add("o");
				playerX = true;
				playerDisplay.classList.remove("o");
				playerDisplay.classList.add("x");
				playerDisplay.textContent = "X turn";
			}
			checkWin(document.getElementById("1").textContent,
					document.getElementById("2").textContent,
					document.getElementById("3").textContent,
					document.getElementById("4").textContent,
					document.getElementById("5").textContent,
					document.getElementById("6").textContent,
					document.getElementById("7").textContent,
					document.getElementById("8").textContent,
					document.getElementById("9").textContent);
		}
	})
});

function checkWin(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9) {
	const resultDisplay = document.getElementById("result");
	if(btn1 === "X" && btn5 === "X" && btn9 === "X"){
		resultDisplay.textContent = "X wins!";
	}
	else if(btn1 === "X" && btn2 === "X" && btn3 === "X"){
		resultDisplay.textContent = "X wins!";
	}
	else if(btn1 === "X" && btn4 === "X" && btn7 === "X"){
		resultDisplay.textContent = "X wins!";
	}
	else if(btn3 === "X" && btn5 === "X" && btn7 === "X"){
		resultDisplay.textContent = "X wins!";
	}
	else if(btn3 === "X" && btn6 === "X" && btn9 === "X"){
		resultDisplay.textContent = "X wins!";
	}
	else if(btn9 === "X" && btn8 === "X" && btn7 === "X"){
		resultDisplay.textContent = "X wins!";
	}
	else if(btn2 === "X" && btn5 === "X" && btn8 === "X"){
		resultDisplay.textContent = "X wins!";
	}
	else if(btn4 === "X" && btn5 === "X" && btn6 === "X"){
		resultDisplay.textContent = "X wins!";
	}
	else if(btn1 === "O" && btn5 === "O" && btn9 === "O"){
		resultDisplay.textContent = "O wins!";
	}
	else if(btn1 === "O" && btn2 === "O" && btn3 === "O"){
		resultDisplay.textContent = "O wins!";
	}
	else if(btn1 === "O" && btn4 === "O" && btn7 === "O"){
		resultDisplay.textContent = "O wins!";
	}
	else if(btn3 === "O" && btn5 === "O" && btn7 === "O"){
		resultDisplay.textContent = "O wins!";
	}
	else if(btn3 === "O" && btn6 === "O" && btn9 === "O"){
		resultDisplay.textContent = "O wins!";
	}
	else if(btn9 === "O" && btn8 === "O" && btn7 === "O"){
		resultDisplay.textContent = "O wins!";
	}
	else if(btn2 === "O" && btn5 === "O" && btn8 === "O"){
		resultDisplay.textContent = "O wins!";
	}
	else if(btn4 === "O" && btn5 === "O" && btn6 === "O"){
		resultDisplay.textContent = "O wins!";
	} else {
		const btns = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];
		if(btns.includes(" ")){
			resultDisplay.textContent = "Play the game by tapping on the squares.";
		} else {
			resultDisplay.textContent = "It's a tie.";
		}
	}
	if(resultDisplay.textContent !== "Play the game by tapping on the squares."){
		const playerDisplay = document.getElementById("player");
		playerDisplay.textContent = "";
	}
}
