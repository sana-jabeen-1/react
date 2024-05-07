const TodosModel = require("../models/todos.model");
const TODOS_STATUS = {
  TODO: "TODO",
  DONE: "DONE",
};

const getAllTodos = async () => {
  return await TodosModel.find({}).sort({ createdAt: -1 });
};

const createTodos = async ({ title, description }) => {
  return await TodosModel.create({ title, description });
};

const findOneTodoById = async (id) => {
  return await TodosModel.findById(id);
};

const deleteTodoById = async (_id) => {
  return await TodosModel.findByIdAndDelete(_id);
};

const updateStatusById = async (id, status) => {
  return await TodosModel.findByIdAndUpdate(id, { status }, { new: true });
};

module.exports = {
  TODOS_STATUS,
  getAllTodos,
  createTodos,
  findOneTodoById,
  deleteTodoById,
  updateStatusById,
};
