"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let FlatSchema = new Schema({
    ID: { type: Number },
    rooms: { type: Number },
    stage: { type: Number },
    size: { type: Number },
});
const User = mongoose.model('Flat', FlatSchema);
exports.default = User;
//# sourceMappingURL=FlatSchema.js.map