const { Surprise } = require('../models/surprise');
const { User } = require('../models/User');

module.exports.getAllSurprise = async (req, res) => {
    try {
        const { email } = req.query;
        console.log('received email', email)
        const user = await User.findOne({ email: email }).exec();
        console.log('user', user)
        const surprises = await Surprise.find({ user: user._id }).exec();
        console.log("surprises", surprises)
        res.json(surprises);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
