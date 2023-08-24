const express = require('express');

const app = express();

const port = process.env.PORT || 4000

const mongoose = require('mongoose');
const router = require('./routes/productsRoutes');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mini-commerce');
  console.log('DATABASE CONNECTED!')
}

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Welcome to the express api')
})

app.use('/api/products', router)

app.listen(port, ()=> console.log(`[SERVER] is running on: ${port}`))