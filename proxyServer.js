const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;  // This will run the proxy server on http://localhost:5000

// Define the proxy route
app.get('/api/contactInfo', async (req, res) => {
    try {
        const response = await axios.get('https://punjabtravels.net/backend/api/contactInfo');
        res.setHeader('Access-Control-Allow-Origin', '*');  // Allow requests from any origin
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        const response = await axios.get('https://punjabtravels.net/backend/api/categories');
        res.setHeader('Access-Control-Allow-Origin', '*');  // Allow requests from any origin
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/sliders', async (req, res) => {
    try {
        const response = await axios.get('https://punjabtravels.net/backend/api/sliders');
        res.setHeader('Access-Control-Allow-Origin', '*');  // Allow requests from any origin
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// app.post('/api/userFeadback/store', async (req, res) => {
//     try {
//         const response = await axios.post('https://punjabtravels.net/backend/api/userFeadback/store', req.body, {
//             headers: {
//                 'Content-Type': 'application/json', 
//             },
//         });
//         res.status(response.status).json(response.data);

//     } catch (error) {
//         console.error('Error forwarding feedback:', error.message);
//         res.status(500).json({ error: error.message });
//     }
// });

// Start the proxy server
app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
