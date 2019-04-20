import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    ID: {type: Number},
    name: {type: String},
    email: {type: String},
    telephone: {type: String},
});

const User = mongoose.model('User', UsersSchema);

export default User;