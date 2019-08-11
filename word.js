var Letter = require('./letter.js');

function Word(word) {
  this.Word = function(word) {
    var temp = [];
    for (var i = 0; i < word.length; i++) {
      var currentChar = word[i];
      //console.log(currentChar);
      /*
      c
      a
      t
      */
      var currentLetter = new Letter(currentChar);
      //console.log(currentLetter);
      /*
      Letter {
      character: 'c',
      guessed: false,
      checkGuess: [Function],
      display: [Function]
    }
    Letter {
      character: 'a',
      guessed: false,
      checkGuess: [Function],
      display: [Function]
    }
    Letter {
      character: 't',
      guessed: false,
      checkGuess: [Function],
      display: [Function]
} */
      temp.push(currentLetter);
    }
    console.log(temp);
    /*
    Array of Letter Object
        [
      Letter {
        character: 'c',
        guessed: false,
        checkGuess: [Function],
        display: [Function]
      },
      Letter {
        character: 'a',
        guessed: false,
        checkGuess: [Function],
        display: [Function]
      },
      Letter {
        character: 't',
        guessed: false,
        checkGuess: [Function],
        display: [Function]
      }
    ] */

    return temp;
  };

  this.word = this.Word(word);

  this.display = function() {
    var displayWord = '';
    for (var i = 0; i < this.word.length; i++) {
      var currentLetter = this.word[i];
      displayWord += currentLetter.display() + ' ';
    }
    console.log(displayWord);
  };
  this.checkLetter = function(letter) {
    for (var i = 0; i < this.word.length; i++) {
      var currentLetter = this.word[i];
      console.log(currentLetter);
      currentLetter.checkGuess(letter);
    }
    return this.display;
  };
}

var word = new Word('cat');

module.exports = Word;
