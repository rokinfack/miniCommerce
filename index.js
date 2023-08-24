const express = require('express');

const app = express();

const port = process.env.PORT || 4000

app.get('/', (req,res) => {
    res.send('Welcome to the express api')
})

app.listen(port, ()=> console.log(`[SERVER] is running on: ${port}`))