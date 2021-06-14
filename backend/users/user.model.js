const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});
/*
const schema1 = new Schema({
    Doctorname: { type: String, unique: true, required: true }
});
*/

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
/*
schema1.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
*/
module.exports = mongoose.model('User', schema);

//module.exports = mongoose.model('Doctors', schema1);