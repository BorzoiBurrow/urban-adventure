const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'src/pages', 'index.html'));
  });
  
app.get("/dist/bundle.js", (req,res) =>{
  res.sendFile(path.join(__dirname, '..', "/dist", "bundle.js"))
})

app.use('/image', express.static(path.join(__dirname, "..", 'src/images')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });