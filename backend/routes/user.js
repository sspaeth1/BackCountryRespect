const router = require("express").Router();
let User = require("../models/user.model");

// router.get('/', async (req, res)=>{ try{ await} catch(err){ console.log(err)}}

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route('/add').post((req, res)=>{
  const username = req.body.username;
  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!')
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/skiAbilityTool').get((req, res)=>{
  
})

module.exports = router;