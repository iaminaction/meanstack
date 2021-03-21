const mongoose = require('mongoose');

// let tasksSchema = new mongoose.Schema({ Title: String, Completed : Boolean });
// let postsSchema = new mongoose.Schema({ Title: String, Body : String });

let appSchema = mongoose.Schema;

let UserSchema = new appSchema({
    name : String, 
    email : String, 
    street : String,
    city : String,
    zipcode : Number,
    tasks :
    [{
        id : Number,
        title: String,
        completed: Boolean
    }],
    posts :
    [{
        id : Number,
        title: String,
        body: String
    }]

});

module.exports = mongoose.model('users',UserSchema)
