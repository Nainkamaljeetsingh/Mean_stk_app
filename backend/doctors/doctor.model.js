const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema1 = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema1.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Doctor', schema1);