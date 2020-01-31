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

  var modelOutput = model.predict(tf.tensor([image], [1, 28, 28, 1]), {batchSize: 1});
  // var modelOutput = model.predict(image);
  // console.log(modelOutput.dataSync());
  // console.log(modelOutput.flatten().dataSync());
  // console.log(modelOutput.print());
  // console.log(tf.argMax(modelOutput.flatten()).dataSync()[0]);
  // console.log(modelOutput.flatten().dataSync());

  res.send({'prediction': tf.argMax(modelOutput.flatten()).dataSync()[0], 
            'predVec': modelOutput.flatten().dataSync()});
}));

app.listen(3000);