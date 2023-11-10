const express = require("express");
// const router = express.Router();
const { useNavigate } = require('react-router-dom');
const Userinfo = require("./models/Userinfo");

// const authCompany = (permissions) => {
//     return (req, res, next) => {
//         const userCompany = req.query.company;
//         if (permissions.includes(userCompany)) {
//             next();
//         } else {
//             return res.status(401).json("You dont have permission!");
//         }
//     };
// };
// const history=useNavigate();
const authCompany = async (req, res, next) => {
    try{
    const filter = { user_id: req.params.user_id };
    const existingDocument = await Userinfo.findOne(filter);
        if (existingDocument) {
            next();
        }
        else {
            // return res.json("You Don't have access to this page");
            // history('/');
            res.redirect('/');
            console.log("You are not permitted to this page")
        }
    }catch(e){
        res.redirect('/');
    }
}

    module.exports = { authCompany };