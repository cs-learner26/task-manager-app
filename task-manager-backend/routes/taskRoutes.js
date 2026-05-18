const express = require('express');
const router = express.Router();
const Task = require('../models/task');


// ======================
// GET ALL TASKS
// ======================
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);   // ✅ return array directly
  } catch (error) {
    res.status(500).json({
      message: "Error fetching tasks",
      error: error.message
    });
  }
});


// ======================
// CREATE TASK
// ======================
router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();

    res.status(201).json(savedTask); // ✅ return task directly
  } catch (error) {
    res.status(500).json({
      message: "Error creating task",
      error: error.message
    });
  }
});


// ======================
// UPDATE TASK
// ======================
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: "Error updating task",
      error: error.message
    });
  }
});


// ======================
// DELETE TASK
// ======================
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting task",
      error: error.message
    });
  }
});

module.exports = router;