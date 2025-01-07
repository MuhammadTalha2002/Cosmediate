const Box = require('../models/Box');

// Fetch specific data for Box 2 fields
const getBoxData = async (req, res) => {
    const { boxType } = req.params;
    try {
        const box = await Box.findOne({ boxType });
        res.json(box ? box.fields : []);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add data to a specific Box 2 field
const addBoxData = async (req, res) => {
    const { boxType } = req.params;
    const { field } = req.body;
    try {
        let box = await Box.findOne({ boxType });
        if (!box) box = new Box({ boxType, fields: [field] });
        else box.fields.push(field);
        await box.save();
        res.status(200).send('Field added successfully');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remove data from a specific Box 2 field
const deleteBoxData = async (req, res) => {
    const { boxType } = req.params;
    const { field } = req.body;
    try {
        const box = await Box.findOne({ boxType });
        if (box) {
            box.fields = box.fields.filter(item => item !== field);
            await box.save();
            res.status(200).send('Field deleted successfully');
        } else {
            res.status(404).send('Box not found');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getBoxData, addBoxData, deleteBoxData };
