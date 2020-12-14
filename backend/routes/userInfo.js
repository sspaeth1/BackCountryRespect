const routers = express().Router();
const UserInfo = require('../models/userInfo.model');
const router = require('./user');

router.route('/').get((req, res)=>{
    UserInfo.find()
    .then( UserInfo = res.json(UserInfo))
    .catch(err=> res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res)=>{
    res.save()
});

export.default = router;