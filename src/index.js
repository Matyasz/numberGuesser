import {formatPage} from './page-formatting';
import {drawCanvas, drawGuess, drawStats, placeButtons, getImage} from './display';

formatPage('Number Guesser!',
           'Draw a digit on the left and press the button to see if the model guesses it correctly!');

drawCanvas();
placeButtons();
drawGuess();
drawStats();