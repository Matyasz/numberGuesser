const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const tf = require('@tensorflow/tfjs');

const app = express();

app.use('/', express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  // const model = tf.loadLayersModel(path.join(__dirname, 'models', 'model.json'));
  // console.log(model);

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send', ((req, res) => {
  var image = req.body.image;
}));

app.listen(3000);