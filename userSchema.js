const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
       required: true,
    },
    contact: {
        type: Number,
    },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
