import {makeCirclePattern, addHeaderText} from './page-formatting';
import {drawCanvas, drawGuess, drawStats, placeButtons, getImage} from './draw';

// Create the header
var header = document.createElement('header');
document.body.appendChild(header);
addHeaderText('Taylor Matyasz Webdev Portfolio');

// Create the main body element and its content
var main = document.createElement('main');
main.setAttribute('overflow-y', 'scroll');
document.body.appendChild(main);


// Create the footer
var foot = document.createElement('footer');
foot.textContent = 'Author: Taylor Matyasz || Contact: tjmatyasz@gmail.com';
document.body.appendChild(foot);

makeCirclePattern();

const PIXEL_SIZE = 12;
const PIXEL_COUNT = 28;
drawCanvas(PIXEL_COUNT, PIXEL_SIZE);
placeButtons(PIXEL_COUNT, PIXEL_SIZE);
drawGuess(PIXEL_COUNT, PIXEL_SIZE);

drawStats(PIXEL_COUNT, PIXEL_SIZE);

// var image = getImage(PIXEL_COUNT);
// console.log(image);