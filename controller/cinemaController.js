const Cinema = require('../model/cinemaModel');

exports.createCinema = async (req, res) => {
    try {
        const { cinemaName, seatnum } = req.body;
        const cinema = await Cinema.create({
            cinemaName,
            seatnum
        });
        res.status(201).json({ 
            status:'sucess',
            data:{
                cinema
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
