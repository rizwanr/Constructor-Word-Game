function Letter(character) {
  //A string value to store the underlying character for the letter
  this.character = character;
  //A boolean value that stores whether that letter has been guessed yet
  this.guessed = false;
  //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
  this.display = function() {
    //if the guessed is true, return the character, else return "-"
    if (this.guessed == true) {
      return this.character;
    } else {
      return '-';
    }
  };
  //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.checkGuess = function(guess) {
    if (guess == this.character) {
      this.guessed = true;
    } else {
      return false;
    }
  };
}

module.exports = Letter;
