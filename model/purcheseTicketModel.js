const mongoose = require('mongoose');

const purcheseTicketSchema = new mongoose.Schema({
    cinemaName: {
        type: String,
        ref: 'Cinema'
    },
    seatnum: [String]
});


const PurcheseTicket = mongoose.model("PurcheseTicket", purcheseTicketSchema);
module.exports = PurcheseTicket;
