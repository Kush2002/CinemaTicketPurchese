const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
    cinemaName: {
        type: String
    },
    seatnum: {
        type: Number
    }
});

const Cinema = mongoose.model("Cinema", cinemaSchema);
module.exports = Cinema;
