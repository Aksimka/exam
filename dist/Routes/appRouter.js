"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FlatSchema_1 = require("../Models/FlatSchema");
const RequestSchema_1 = require("../Models/RequestSchema");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('index');
});
router.post('/test', (req, res) => {
    let user = new FlatSchema_1.default({
        ID: 1,
        login: 'Aksimka',
        mail: 'mks_comp97@mail.ru',
        password: 'qwe123'
    });
    user.save();
    res.send('Completed');
});
router.post('/test', (req, res) => {
    let user = new FlatSchema_1.default({
        ID: 1,
        login: 'Aksimka',
        mail: 'mks_comp97@mail.ru',
        password: 'qwe123'
    });
    user.save();
    res.send('Completed');
});
router.post('/makeRequest', (req, res) => {
    console.log(req.body, 'asasdasdd');
    const { rooms, stage, size, userName, userEmail, userTel } = req.body;
    let request = new RequestSchema_1.default({
        ID: 123,
        rooms: 5,
        stage: 50,
        size: 100,
        userName: 'Maksim',
        userEmail: 'mks@asfca.ru',
        userTel: '159125125',
        foundFlatsId: null
    });
    res.send(req.body);
    console.log(request, 'request');
    //request.save();
    return 'Заявка отправлена';
});
module.exports = router;
//# sourceMappingURL=appRouter.js.map