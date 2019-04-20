import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as mongoose from 'mongoose';

import * as appRouter from './Routes/appRouter.js';
import * as landingRouter from './Routes/landingRouter.js';

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/exam', { useNewUrlParser: true}).then((response)=>{
    console.log('Connection is successful');
}).catch((e) => {
    throw new Error(e);
});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'Public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', landingRouter);
app.use('/app', appRouter);



app.listen(3000, ()=> {
    console.log('App listening on 3000 port!');
});
