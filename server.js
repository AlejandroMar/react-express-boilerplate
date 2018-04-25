const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const ingredients = {
       "Carrots": 3,
       "Rice": "1 Kl",
       "Milk": "one bottle" 
    }
    res.json(ingredients);
})

const port = 5000;


app.listen(port, () => console.log(`listening to port ${port}`))