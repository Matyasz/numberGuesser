const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const tf = require('@tensorflow/tfjs');
const tfn = require("@tensorflow/tfjs-node");

const app = express();

app.use('/', express.static(path.join(__dirname)));
app.use(bodyParser.json());


async function getModel () {
  var modelPath = path.join(__dirname, 'models', 'model.json');
  const handler = tfn.io.fileSystem(modelPath);
  const model = await tf.loadLayersModel(handler);

  return model;
}

  m = getModel();
  console.log(m);

  m.then(function (result) {
    model = result;
    console.log("Model loaded!");
  }, function (err) {
    console.log(err);
  });


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send', ((req, res) => {
  

  var image = req.body.image;
  // console.log(image);

  var prediction = model.predict(tf.tensor([image], [1, 28, 28, 1]), {batchSize: 1});
  // var prediction = model.predict(image);
  // console.log(prediction.dataSync());
  // console.log(prediction.flatten().dataSync());
  // console.log(prediction.print());
  console.log(tf.argMax(prediction.flatten()).dataSync()[0]);

  // res.send(prediction);
}));

app.listen(3000);