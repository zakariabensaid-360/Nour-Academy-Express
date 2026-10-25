const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname)));

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, './pages/about.html'));
});

app.get('/process.html', (req, res) => {
  res.sendFile(path.join(__dirname, './pages/process.html'));

});

app.get('/valid', (req, res) => {
  res.sendFile(path.join(__dirname, './pages/valid.html'));
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});