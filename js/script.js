function guessNumberGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess = null;
  let attempts = 0;
  let promptText = "Enter a number from 1 to 10";
  
  while (guess !== randomNumber) { // While-loop to continue looping until the user's guess matches the random number
      const input = prompt(promptText);
  
      if (input === null) { // If user cancel
          const message = document.getElementById("message");
          message.textContent = "Game cancelled, better luck next time.";
          break;
      }
  
      guess = parseInt(input, 10);

      if (isNaN(guess) || guess < 1 || guess > 10) { // Validate user input (ensure it's a number between 1 and 10)
          promptText = "Invalid input. Try again with a number from 1 to 10";
          continue;
      }

      attempts++; // Increase the number of attempts
  
      if (guess < randomNumber) { 
          promptText = "Go a little higher"; // Update the prompt message to inform the user that their guess is too low/high
      }
      else if (guess > randomNumber) {
          promptText = "Try a lower number";
      }
  
  
      if (guess === randomNumber) {
          const message = document.getElementById("message");
          message.textContent = `Brilliant, number ${randomNumber} is correct! You guessed it in just ${attempts} attempts!`;
      }
  }
  }