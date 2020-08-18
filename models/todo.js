const mongoose = require('mongoose');

//create a contact shema 
const TodoSchema = new mongoose.Schema({
    description: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        required:true,
       
    }
  });

  const Todo=mongoose.model('Todo',TodoSchema);

  //export todo 
  module.exports = Todo;