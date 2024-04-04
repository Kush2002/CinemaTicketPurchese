const PurcheseTicket = require('../model/purcheseTicketModel')
const cinemaModel = require('../model/cinemaModel')

exports.createPurchaseTicket = async (req, res, next) => {
    try {
        const { cinemaName, seatnum } = req.body;
        if (!cinemaName || !seatnum) {
            return res.status(400).json({ error: 'cinemaName and seatnum are required' });
        }
        const cinema = await cinemaModel.findOne({ cinemaName });
        if (!cinema) {
            return res.status(404).json({ error: `Sorry ${cinemaName} Cinema Not Found` });
        }
        const seatNumbersArray = Array.isArray(seatnum) ? seatnum : [seatnum];
        if (seatnum > cinema.seatnum) {
            return res.status(400).json({ error: `Sorry, This Cinema Provide a ${cinema.seatnum} Seats.` });
        }
        const existingTickets = await PurcheseTicket.find({ cinemaName, seatnum: { $in: seatNumbersArray } });
        if (existingTickets.length > 0) {
            const existingSeatNumbers = existingTickets.map(ticket => ticket.seatnum);
            return res.status(400).json({ error: `Seat ${existingSeatNumbers} already purchased. Please purchase other seat.` });
        }
        const purchaseTickets = await PurcheseTicket.create(seatNumbersArray.map(seat => ({ cinemaName, seatnum: seat })));
        return res.status(201).json({ 
            status: 'success',
            data: {
                purchaseTickets
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Sorry Something is Wrong' });
    }
};