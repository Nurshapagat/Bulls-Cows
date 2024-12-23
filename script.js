let secretNumber = "";
let attempts = 0;

function generateSecretNumber() {
    const digits = [];
    while (digits.length < 4) {
        const randomDigit = Math.floor(Math.random() * 10); 
        if (!digits.includes(randomDigit)) {
            digits.push(randomDigit);
        }
    }
    return digits.join("");
}

function initializeGame() { //жаңарту
    secretNumber = generateSecretNumber();
    attempts = 0;
    document.getElementById("guess-history").innerHTML = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("user-guess").value = "";
    document.getElementById("submit-guess").disabled = false;
    document.getElementById("result-container").style.display = "none"; 
}

function evaluateGuess(guess) { //салыстырады
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretNumber[i]) {
            bulls++;
        } else if (secretNumber.includes(guess[i])) {
            cows++;
        }
    }
    return { bulls, cows };
}

document.getElementById("submit-guess").addEventListener("click", () => {
    const userGuess = document.getElementById("user-guess").value;
    const feedback = document.getElementById("feedback");

    if (userGuess.length !== 4 || new Set(userGuess).size !== 4 || isNaN(userGuess)) {
        feedback.textContent = "Please enter a valid 4-digit number with unique digits.";
        return;
    }

    feedback.textContent = "";
    attempts++;

    const { bulls, cows } = evaluateGuess(userGuess); //есептеу

    const historyRow = document.createElement("tr");
    historyRow.innerHTML = `
        <td>${attempts}</td>
        <td>${userGuess}</td>
        <td>${bulls}</td>
        <td>${cows}</td>
    `;
    document.getElementById("guess-history").appendChild(historyRow);

    if (bulls === 4) {
        document.getElementById("result").textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        document.getElementById("submit-guess").disabled = true;
        document.getElementById("result-container").style.display = "flex"; 
        document.getElementById("result-message").textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    }

    const backgroundSound = document.getElementById("background-sound");
    backgroundSound.currentTime = 0;
    backgroundSound.play();
});

document.getElementById("restart-game").addEventListener("click", () => {
    initializeGame();
});

document.getElementById("result-container").addEventListener("click", () => {
    document.getElementById("result-container").style.display = "none";
});

document.getElementById("start-game").addEventListener("click", () => {
    document.getElementById("instruction-popup").style.display = "none";
    initializeGame(); 
});

document.getElementById("instruction-popup").style.display = "flex";

initializeGame();