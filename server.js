const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' });

connectDB();

const notes = require('./routes/notes')

const app = express();

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/notes', notes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));