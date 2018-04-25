const express = require('express');
const app = express();

app.get('/api/ingredients', (req, res) => {
    const ingredients = [
       {"ingredient": "Carrots", "quantity": 3},
       {"ingredient": "Rice", "quantity": "1 Kl"},
       {"ingredient": "Milk", "quantity": "one bottle"} 
    ]
    res.json(ingredients);
})

const port = 5000;


app.listen(port, () => console.log(`listening to port ${port}`))