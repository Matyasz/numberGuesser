# Number Guesser!

This is a web app that allows you to draw a single digit number and it will guess what you drew!

#### How to use

The first thing you'll need to do it make sure you have [Node.js](https://nodejs.org/en/ "Node.js wesdite") installed. You can check that it was installed correctly by opening a terminal emulator and typing `node -v`. This should also come with NPM, the Node Package Manager. For reference, this app was written using version Node.js 10.16.3 and NPM version 6.9.0.

After having these installed, clone the repo to your computer. Then enter the `number Guesser` durectory using a terminal emulator and type `npm install`. This will direct NPM to install all of the nide modules that the app has claimed as dependencies (these are listed in the file `package.json`)

One the modules have been successfully downloaded, enter the command `npx webpack --config webpack.config.js`. This will take all of the code from this app and its dependencies and combine them into one simple file for the browser to read. The specifications for how this is done are listed in the file `webpack.config.js`. Notice the line that says `mode: 'production'`. If we open the file `main.js`, it will look like a big jumbled mess. If we change that mode value to "development" then the code in `main.js` will remain nice and clean (although the browser will take slightly longer to read the code, hence why it is only for development!).

Finally, type `node server.js` into your terminal emulator. Now, go to your browser and enter `localhost:3000` into the URL bar, and viola! The site should be there!

#### How to update the model


If you see something that could use improving, feel free to send a pull request!

Author:       Taylor Matyasz
Contact info: tjmatyasz@gmail.com
