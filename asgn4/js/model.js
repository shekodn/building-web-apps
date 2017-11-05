var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var UserSchema = Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});


var ItemSchema = Schema({
  owner: { type: ObjectId, ref: 'User' },
  description: { type: String, default: '' },
  createdOn: { type: Date, default: Date.now },
  tags: [ { type: String } ]
});


var User = mongoose.model('User', UserSchema);
var Item = mongoose.model('Item', ItemSchema);

module.exports = {
  User: User,
  Item: Item
}

