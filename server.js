const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes')
// Connect to MongoDB
connectDB();

app.use(bodyParser.json());

const PORT = process.env.PORT || 1200;


// Routes
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
