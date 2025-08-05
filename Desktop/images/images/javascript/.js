const express = require('express');
const app = express();
const port = 3000;

// Use JSON body parsing middleware
app.use(express.json());

// In-memory data store
let todos = [
  { id: 1, task: 'Learn JavaScript', completed: false },
  { id: 2, task: 'Build a Node.js app', completed: false }
];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Get a single todo by ID
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('Todo not found');
  res.json(todo);
});

// Create a new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = {
    id: todos.length + 1,
    task,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('Todo not found');

  const { task, completed } = req.body;
  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Todo not found');

  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`Todo API running at http://localhost:${port}`);
});
