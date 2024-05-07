const mongoose = require("mongoose");
const TodosModelName = 'todos'

const Schema = mongoose.Schema;

let Todos = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    default: 'TODO'
  },
},
{ 
  timestamps: true,
  versionKey: false,
  collection: TodosModelName 
});

module.exports = mongoose.model(TodosModelName, Todos);
