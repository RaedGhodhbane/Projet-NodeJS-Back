const router = require('express').Router();
const User = require('../Models/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/raeddb');
const userModel = mongoose.model('users', User);



router.get('/all', async (req, res) => {
    const result = await userModel.find();
    
    res.send(result);
    
    });


    router.post('/update/:id', async (req, res) => {
        var post = req.body;
        var id = req.params.id
        var objtoUpdate = {
            $set : post
        }
        const result = await userModel.findByIdAndUpdate(id,objtoUpdate);
        
        res.send({ user : result, message: 'is updated' });
        
        });

    router.get('/user/:id', async (req, res) => {
        const result = await userModel.findById(req.params.id);
        
        res.send(result);
        
        });


        router.get('/delete/:id', async (req, res) => {
            const result = await userModel.findByIdAndRemove({_id:req.params.id});
            console.log("isdeleted")
            res.send(result);
            
            });


router.post('/add', async (req, res) => {
var post = req.body;
const result = await userModel.create(post);

res.send({ user : result, message: 'is add' });

});

router.post('/login', async (req, res) => {
    var query = {email: req.body.email, password: req.body.password}
    const result = await userModel.findOne(query);
    if(result)
        res.send({ user : result, message: 'you are sign in' });
    else
        res.send({user: null, message: 'your email or password not correct'})
    
    });



module.exports = router;