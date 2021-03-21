const express = require('express');

const User = require('../models/usersModel')

exports.getAllUsers = function()
{
    return new Promise((resolve,reject) =>
        {
            User.find({}, function(err, usersData)
            {
                if(err)
                {
                    reject(err)
                }   
                else
                {
                    resolve(usersData)
                }
            });
        })
}

exports.getUser = function(userID)
{
    return new Promise((resolve,reject) =>
        {
           User.findById(userID,function(err, userData)
            {
                if(err)
                {
                    reject(err)
                }   
                else
                {
                    resolve(userData)
                }
            });
        })
}

exports.addUser = function(newUser)
{
    return new Promise((resolve,reject) =>
    {
        let user = new User({

            name : newUser.name,
            email : newUser.email,
            street : newUser.street,
            city : newUser.city,
            zipcode : newUser.zipcode,
            pasks : newUser.tasks,
            posts : newUser.posts
                            });

            user.save(function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('User created')
                }
            })
    })
}

exports.updateUser = function(userID, updatedData)
{
    return new Promise((resolve,reject) =>
    {
           User.findByIdAndUpdate(userID,
            {

                name : updatedData.name,
                email : updatedData.email,
                street : updatedData.street,
                city : updatedData.city,
                zipcode : updatedData.zipcode,
                tasks : updatedData.tasks,
                posts : updatedData.posts

            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('User was updated !')
                }
            })
    })
}

exports.deleteUser = function(userID)
{
    return new Promise((resolve,reject) =>
        {
            User.findByIdAndDelete(userID,function(err)
            {
                if(err)
                {
                    reject(err)
                }   
                else
                {
                    resolve("User deleted !")
                }
            });
        })
}