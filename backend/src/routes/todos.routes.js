const express = require('express')
const { createTodo, getAllTodo, deleteTodo, updateStatus } = require('../controllers/todos.controller')
const router = express.Router()

router.post('/', createTodo )

router.get('/', getAllTodo )

router.put('/:todoId', updateStatus)

router.delete('/:todoId', deleteTodo)



module.exports = router