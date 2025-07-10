const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello World! Express.js is running!' });
});

app.get('/verify', async (req, res) => {
    const token = req.query.token; // Ganti dari email & otp menjadi token
    
    if (!token) {
        return res.status(400).send('<h1>Token parameter required</h1>');
    }
    
    // Display OTP (token adalah OTP yang digenerate Supabase)
    res.send(`
        <html>
            <head><title>Your OTP Code</title></head>
            <body style="font-family: Arial; text-align: center; padding: 50px;">
                <h1>Your OTP Code</h1>
                <h2 style="color: #007bff; font-size: 48px;">${token}</h2>
                <p>Please enter this code in your app</p>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
