const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/Job.js');

let MONGO_URL = "mongodb+srv://MyServer:B9OT0rVauDjczMTi@cluster0.qoifz6m.mongodb.net/jobfinder";
// let MONGO_URL = "mongodb://127.0.0.1:27017/jobfinder";

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
        author:"670e6b3d1fb6caea09a41012"
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was saved");
}

initDB();