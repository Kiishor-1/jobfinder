const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/Job.js');

let MONGO_URL = "mongodb://127.0.0.1:27017/jobfinder";

main().then(res=>{
    console.log("Connected to DB");
}).catch(err =>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

async function initDB(){
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,
        author:"670c838406b80d77306f948d"
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was saved");
}

initDB();