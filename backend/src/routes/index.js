const express = require('express')
const router = express.Router()
const TodosRouter = require('./todos.routes')

// http://localhost:3001/api/todos
router.use('/todos', TodosRouter)


module.exports = router