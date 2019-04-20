"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//const CurrentUser = new User();
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('landing');
});
router.post('/register', (req, res) => {
});
// router.post('/auth', (req: Request, res: Response) => {Ё
//     currentUserManager.auth(req.body.login, req.body.password).then((response) => {
//         res.send(response)
//     });
// });
module.exports = router;
//# sourceMappingURL=landingRouter.js.map