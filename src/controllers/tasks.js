//frist version with NO error management sistem(trycatch, exceptions, etc...)
const todoItems = require('../models/task');

const getTasks = (req, res) => {
    return res.json({data:todoItems, status: 'success'});
}

const createTask = (req, res) => {
    todoItems.push({
        index: todoItems[todoItems.lengh - 1].index,
        value: req.body.value,
        done: false,
    });
    return res.json({ data: todoItems, status: 'success'});
}

const removeTask = (req, res) => {
    const todoItems = todoItems.filter(d => d.index != +req.params.id);
    return res.json({ data: todoItems, status: 'success' });
}

const updateTask = (req, res) => {
    todoItems.filter(d => d.index == +req.params.id)[0].done = req.body.done
    return res.json({ data: todoItems, status: 'success' })
}

export default {
    getTasks,
    createTask,
    removeTask,
    updateTask
}