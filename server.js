const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const tf = require('@tensorflow/tfjs');
const tfn = require("@tensorflow/tfjs-node");

const app = express();

app.use('/', express.static(path.join(__dirname)));

async function getModel () {
  var modelPath = path.join(__dirname, 'models', 'model.json');
  console.log(modelPath);

  const handler = tfn.io.fileSystem("/Users/taylor/Documents/web/matyasz.github.io/models/model.json");
  // const model = await tf.loadModel(handler);

  const model = await tf.loadLayersModel(handler);
  console.log("Model Loaded.");

  return model;
}

m = getModel();
console.log(m);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send', ((req, res) => {
  var image = req.body.image;
}));

app.listen(3000);