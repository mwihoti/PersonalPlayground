const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const TaskModel = require('./models/TaskModel');
const FormModel = require('./models/FormModel')
const morgan = require('morgan');

// Create the Express app
const app = express();

// Connect to MongoDB
const server = app.listen(process.env.PORT, () => {
  console.log("Server listening");
  mongoose.connect(process.env.db_connection).then(() => {
    console.log("Database Connected");
  });
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    const mes = await FormModel.find({});
    res.render('index.ejs', { todos: tasks, mess: mes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/tasks/', (req, res) => {
  const newTodo = new TaskModel({
    task: req.body.task
  });
 
  newTodo.save();
  res.redirect('/');
});
app.post('/mes/', (req, res) => {
  const newMes = new FormModel({
    mess_t: req.body.mess_t
  });
  newMes.save();
  res.redirect('/');
  
})
app.post('/tasks/:id/complete', (req, res) => {
  TaskModel.findById(req.params.id).then((todo) => {
    todo.is_completed = !todo.is_completed;
    todo.save();
    res.redirect('/');
  });
  FormModel.findById(req.params.id).then((mes) => {
    mes.is_sent = !mes.is_unsent;
    mes.save();
    res.redirect('/');
  })
});

app.post('/tasks/:id/update', async (req, res) => {
  try {
    const taskId = req.params.id;
    const todo = await TaskModel.findById(taskId);

    if (!todo) {
      // Task with the given ID was not found
      return res.status(404).send('Task not found');
    }

    // Update the task
    todo.task = req.body.task;
    await todo.save();

    // Redirect to the home page
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

  FormModel.findById(req.params.id).then((mes) => {
    mes.form = req.body.mess_t;
    mes.save();
    res.redirect('/');
  });
})

app.post('/tasks/:id/delete', (req, res) => {
  TaskModel.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/');

  });
  FormModel.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/');
  })
});

module.exports = {
  mongoose,
};