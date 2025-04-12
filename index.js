const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const app = express();
app.use(express.json());

const userschema=Schema
const dburl="mongodb://localhost:27017/"

mongoose.connect(dburl)
    .then(() => {
        console.log("DB connection established");
    })
    .catch(err => {
        console.log("Error in connection: " + err);
    });

    const Userschema = new Schema({
        name: { type: String, required: true, unique: true },
        email: { type: Number, required: true },
        password: { type: String, required: true, unique: true },
    });
    
    const User = mongoose.model('User', Userschema);
    
    

    app.post("/user", (req, res) => {
        const newUser = new User(req.body);
        newUser.save()
            .then(() => res.status(200).json({ "message": "User added successfully" }))
            .catch(err => res.status(400).json({ "message": "Error in adding user: " + err }));
    });
    /*app.delete("/delteduser/:name",(req,res)=>{
        const userName = req.params.name;
        User.deleteOne({name: userName})
            .then(users => res.status(200).json({"message":"User deleted Successfully"}))
            .catch(err => res.status(500).json({ "message": "Error fetching users: " + err })); 
    })
    
    app.get("/user/:name", (req, res) => {
        const userName = req.params.name;
    
        User.findOne({ name: userName })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ "message": "User not found" });
                }
                res.status(200).json(user); 
            })
            .catch(err => res.status(400).json({"message":"Error fetching users: " + err }))
    }); 
    
    app.put("/user/:name", (req, res) => {
        const userName = req.params.name;
        const updatedData = req.body;
    
        User.findOneAndUpdate({ name: userName }, updatedData, { new: true })
            .then(updatedUser => {
                if (!updatedUser) {
                    return res.status(404).json({ "message": "User not found" });
                }
                res.status(200).json({ "message": "User updated successfully", user: updatedUser });
            })
            .catch(err => {
                res.status(400).json({ "message": "Error updating user: " + err });
            });
    });*/
    
     
    app.listen(2000, () => {
        console.log("server started on port 3000")
    });
