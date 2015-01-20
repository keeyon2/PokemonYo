var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    count: {type: Number, default: 0}, 
    last_yo_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('User', UserSchema);
