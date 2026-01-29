

const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());



app.get('/test', (req, res) => {
  res.send('Backend running');
});  

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
