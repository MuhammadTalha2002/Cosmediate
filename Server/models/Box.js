const mongoose = require('mongoose');

const boxSchema = new mongoose.Schema({
    boxType: { type: String, required: true },
    fields: [String]
});

module.exports = mongoose.model('Box', boxSchema);
