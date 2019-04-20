import {Router, Request, Response} from "express";
import * as mongoose from 'mongoose';
import UserSchema from '../Models/FlatSchema'
import RequestSchema from "../Models/RequestSchema";


const router: Router = Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.post('/test', (req, res)=>{
    let user = new UserSchema({
        ID: 1,
        login: 'Aksimka',
        mail: 'mks_comp97@mail.ru',
        password: 'qwe123'
    });
    user.save()
    res.send('Completed')
});

router.post('/test', (req, res)=>{
    let user = new UserSchema({
        ID: 1,
        login: 'Aksimka',
        mail: 'mks_comp97@mail.ru',
        password: 'qwe123'
    });
    user.save();
    res.send('Completed')
});

router.post('/makeRequest', (req, res)=>{
    console.log(req.body, 'asasdasdd');
    const {rooms, stage, size, userName, userEmail, userTel} = req.body;
    let request = new RequestSchema({
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

    return 'Заявка отправлена'
});




module.exports = router;