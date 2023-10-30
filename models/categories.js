const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let categoriesSchema = new Schema({
    name:{
        type:String,
        enum:["Men", "Women", "Teens"],
        required:true
    }
});

module.exports = mongoose.model('Categories', categoriesSchema);
