const { default: mongoose } = require("mongoose")
const { createTodos, getAllTodos, findOneTodoById, deleteTodoById, updateStatusById, TODOS_STATUS } = require("../repo/todos.repo")

const createTodo = async (req, res) => {
    const body = req.body
    const {title, description} = body
    
    if(!title && !description){
        return res.status(400).json({success: false, message: 'Please provide title & description!'})
    }

  const todos =  await createTodos({title, description})
    res.status(201).json(todos)
}

const getAllTodo = async (req, res) => {
    const todos = await getAllTodos()
    res.status(200).json(todos)
}

const deleteTodo = async (req, res) => {
    const todoId = req.params.todoId
    if(!mongoose.isValidObjectId(todoId)){
        return res.status(400).json({status: false, message: 'Id is not proper object Id!'})
    }
    
    const isAvailable = await findOneTodoById(todoId)
    if(!isAvailable) {
        return res.status(404).json({status: false, message: 'Id not found!'})
    }

    const todo = await deleteTodoById(todoId)
    res.status(200).json(todo)
}

const updateStatus = async (req, res) => {
    const todoId = req.params.todoId
    const status = req.body.status
  
    if(!mongoose.isValidObjectId(todoId)){
        return res.status(400).json({status: false, message: 'Id is not proper object Id!'})
    }
    
    const isAvailable = await findOneTodoById(todoId)
    if(!isAvailable) {
        return res.status(404).json({status: false, message: 'Id not found!'})
    }

    if(!status){
        return res.status(400).json({status: false, message: 'Status not found!'})
    }

    if(!Object.values(TODOS_STATUS).includes(status)){
        return res.status(400).json({status: false, message: 'Incorrect Status'})
    }

    const todo = await updateStatusById(todoId, status)
    res.status(203).json(todo)
}



module.exports = {
    createTodo,
    getAllTodo,
    deleteTodo,
    updateStatus,
}