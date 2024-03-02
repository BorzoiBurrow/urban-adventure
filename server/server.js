const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'src/pages', 'index.html'));
  });
  
app.get("/dist/scripts/index.js", (req,res) =>{
  res.sendFile(path.join(__dirname, '..', "/dist/scripts", "index.js"))
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });