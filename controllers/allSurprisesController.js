const { Surprise } = require('../models/surprise');
const { User } = require('../models/User');

module.exports.getAllSurprise = async (req, res) => {
    try {
        const { email } = req.query;
        const user = await User.findOne({ email: email }).exec();
        const surprises = await Surprise.find({ user: user._id }).exec();
        res.json(surprises);
        console.log("surprises", surprises)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
