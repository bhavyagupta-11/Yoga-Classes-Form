const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");

dotenv.config({path:"./config.env"});
const DB=process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection to MongoDB successful');
}).catch((err) => {
    console.error(`Error connecting to MongoDB: ${err}`);
});


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    selectedBatch: String,
    registrationMonth: String,
    registrationDate: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit', async (req, res) => {
    try {
        const { name, age, selectedBatch } = req.body;
        const registrationMonth = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });

        const user = new User({
            name,
            age,
            selectedBatch,
            registrationMonth,
        });

        await user.save();
        res.send(`Thank you for enrolling, ${name}! Registration successful.`);
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.post('/processPayment', (req, res) => {
    const { paymentAmount } = req.body;

    // Mock payment processing (always return success for the demonstration)
    const paymentStatus = processPayment(paymentAmount);

    if (paymentStatus === 'success') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

function processPayment(amount) {
    // For demonstration purposes, assuming payment is always successful
    return 'success';
}

// Route to render the registrations page
app.get('/registrations', async (req, res) => {
    try {
        const registrations = await User.find().sort({ registrationDate: -1 });
        res.json(registrations);
    } catch (error) {
        console.error('Error fetching registrations:', error);
        res.status(500).send('Internal Server Error. Please try again later.');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
