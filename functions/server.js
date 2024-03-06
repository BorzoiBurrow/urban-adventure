const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/dist', 'index.html'));
});

app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/dist', 'bundle.js'));
});


app.use('/image', express.static(path.join(__dirname, '..', 'src/images')));

app.use('/assets', express.static(path.join(__dirname, '..', 'src/assets')));

app.get('/resume', (req, res) => {
  try {
    const resumeFileName = 'resume.pdf';
    const resumePath = path.join(__dirname, '..', 'src/assets', resumeFileName);

    res.download(resumePath, resumeFileName);
  } catch (error) {
    console.log(error);
  }
});

module.exports.handler = serverless(app);