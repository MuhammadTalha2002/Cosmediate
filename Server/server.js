// server.js (Node.js Express Backend)
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock data for different options
const data = {
    'Injectable': ['Botox', 'Fillers', 'Mesotherapy'],
    'Skin Improvement': ['Chemical Peel', 'Microdermabrasion', 'Laser Therapy'],
    'Hair Removal': ['Laser Hair Removal', 'Waxing', 'Threading'],
    'Soft Surgery': ['Plasma Pen', 'Scar Removal', 'Non-Surgical Facelift'],
    'Plastic Surgery': ['Rhinoplasty', 'Liposuction', 'Facelift']
};

// API endpoint for fetching box 3 data
app.get('/:option', (req, res) => {
    const { option } = req.params;
    if (data[option]) {
        res.json(data[option]);
    } else {
        res.status(404).json({ message: "Option not found" });
    }
});

// Starting the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});