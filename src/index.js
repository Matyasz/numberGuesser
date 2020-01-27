import {formatPage} from './page-formatting';
import {drawCanvas, drawGuess, drawStats, placeButtons, getImage} from './draw';

formatPage('Taylor Matyasz Webdev Portfolio',
           'Author: Taylor Matyasz || Contact: tjmatyasz@gmail.com');

drawCanvas();
placeButtons();
drawGuess();

drawStats();

// var image = getImage();
// console.log(image);