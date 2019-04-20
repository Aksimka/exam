import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

let RequestSchema = new Schema({
    ID: {type: Number},
    rooms: {type: Number},
    stage: {type: Number},
    size: {type: Number},
    userName: {type: String},
    userEmail: {type: String},
    userTel: {type: String},
    foundFlatsId: {type: Number},
});

const User = mongoose.model('Request', RequestSchema);

export default User;