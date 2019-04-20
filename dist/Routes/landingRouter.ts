import {Router, Request, Response} from "express";

//const CurrentUser = new User();
const router: Router = Router();

router.get('/', (req, res)=>{
    res.render('landing');
});


router.post('/register', (req: Request, res: Response) => {

});

// router.post('/auth', (req: Request, res: Response) => {Ё
//     currentUserManager.auth(req.body.login, req.body.password).then((response) => {
//         res.send(response)
//     });
// });

module.exports = router;