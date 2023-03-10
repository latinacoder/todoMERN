const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express();
const PORT = process.env.port || 2000

app.use(express.json())
app.use(cors())


mongoose
    .connect('mongodb+srv://jsepulveda:jsepulveda@cluster0.aayijlt.mongodb.net/ToDoApp?retryWrites=true&w=majority')
    .then(() => console.log(`connected to MongoDB...`))
    .catch((err) => console.log(err))

    app.use(routes)

app.listen(PORT, () => console.log(`listening on: ${PORT}`))