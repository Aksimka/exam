import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

let FlatSchema = new Schema({
    ID: {type: Number},
    rooms: {type: Number},
    stage: {type: Number},
    size: {type: Number},
});

const User = mongoose.model('Flat', FlatSchema);

export default User;