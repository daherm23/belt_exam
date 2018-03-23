// require express
var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/dist' ));

mongoose.connect('mongodb://localhost/beltexam');
let Schema = mongoose.Schema

let PetSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3},
    type: { type: String, required: true, minlength: 3},
    description: { type: String, required: true, minlength: 3},
    likes: { type: Number},
    skills: [String]}, 
    { timestamps: true });


mongoose.model('Pet', PetSchema);

let Pet = mongoose.model('Pet');

app.get('/allPets', function (req, res) {
    console.log('retrieving all pets from db')
    Pet.find({},function(err, pets) {
        if(err){
            console.log("error",)
        }
        else{
            res.json({message:'all pets', pets: pets})
        }
    })
})

app.post('/addPet', function(req, res) {
    Pet.find({name: req.body.name}, function(err, pet) {
        if(pet.length == 0) {            
            console.log("new pet being created")
            newPet = new Pet({name : req.body.name, type : req.body.type, description : req.body.description,
            skills : req.body.skills, likes : 0})
            newPet.save(function(err) {
                if(err){
                    console.log('error adding pet')
                    res.json({err})
                }
                else{
                    res.json({message:`with ${newPet.name} added`})
                    console.log('pet added');
                }
            })
        } 
        else {
            res.json({error: 'pet exists already!'});
        }
    })
})

app.post('/onePet', function (req, res) {
    console.log('retreiving a pet from db')
    Pet.findOne({_id:req.body._id},function(err, pet) {
        if(pet != null) {
            console.log('someone is checking this pet out!')
            res.json({message:'pet', pet: pet})
        } 
        else {
            res.json({errorMsg: 'pet does not exist'})
        }
    })
})

app.post('/updatePet', function (req, res) {
    console.log('editing pet')
    Pet.find({name: req.body.name}, function(err, pet) {
        console.log('req', req.body._id)
        if (pet.length > 0 && pet[0]._id != req.body._id) {
            res.json({err: "error"})
        } 
        else {
            Pet.update({_id: req.body._id}, {
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
                skills: req.body.skills,
            },
             function(err, pet) {
                if(err){
                    console.log("update error",)
                    res.json({err})
                }
                else{
                    res.json({message:`pet updated`, pet: req.body._id})
                }
            })
        }
    })
})

app.post('/petLiked', function (req, res) {
    console.log('someone liked a pet!')
    Pet.update({_id: req.body._id}, {
        likes: req.body.likes + 1,
    }, function(err, pet) {
        if(err){
            console.log("error", err)
        }
        else{
            res.json({message:`a pet was liked!`, pet: req.body._id})
        }
    })
})

app.post('/deletePet', function (req, res) {
    console.log('pet was adopted and deleted from db')
    Pet.remove({_id: req.body._id}, function(err, user) {
        if(err){
            console.log("deletion error",)
        }
        else{
            res.json({message:`Pet found a home!`})
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
});

app.listen(8000, function () {
    console.log("Belt exam: listening on port 8000");
});