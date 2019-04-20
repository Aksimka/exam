"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let UsersSchema = new Schema({
    ID: { type: Number },
    name: { type: String },
    email: { type: String },
    telephone: { type: String },
});
const User = mongoose.model('User', UsersSchema);
exports.default = User;
//# sourceMappingURL=UserSchema.js.map