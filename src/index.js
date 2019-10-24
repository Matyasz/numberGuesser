import {makeCirclePattern, addHeaderText} from './page-formatting';

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