"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let RequestSchema = new Schema({
    ID: { type: Number },
    rooms: { type: Number },
    stage: { type: Number },
    size: { type: Number },
    userName: { type: String },
    userEmail: { type: String },
    userTel: { type: String },
    foundFlatsId: { type: Number },
});
const User = mongoose.model('Request', RequestSchema);
exports.default = User;
//# sourceMappingURL=RequestSchema.js.map