const express = require('express');
const router = express.Router();
const projectModel = require('../../../models/project');
const taskModel = require('../../../models/task');

// Get all tasks
router.get('/:id/tasks', async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await projectModel.findById(projectId).populate('tasks');
        const response = {message: " Get all tasks Succesfully "}
        res.status(200).json(project.tasks);
    } catch (error) {
        console.error(error);
        const response = {message: " error "}

        res.status(500).json("Internal Server Error");
    }
});

// Create a new task
router.post('/:id/tasks', async (req, res) => {
    try {
        const projectId = req.params.id;
        const newTask = new taskModel({
            ...req.body,
            projectId: projectId
        });
        const savedTask = await newTask.save();


        const project = await projectModel.findById(projectId);
        project.tasks.push(savedTask._id);
        await project.save();
        const response = {message: " Create a new task Succesfully "}

        res.status(201).json(savedTask);
    } catch (error) {
        console.error(error);
        const response = {message: " error "}

        res.status(500).json("Internal Server Error");
    }
});

// Get project task   by TaskID
router.get('/:id/tasks/:taskId', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const task = await taskModel.findById(taskId);
        const response = {message: "  Get project task   by TaskID Succesfully "}
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        const response = {message: " error"}

        res.status(500).json("Internal Server Error");
    }
});

// Update project by TaskID
router.patch('/:id/tasks/:taskId', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const updatedTask = await taskModel.findByIdAndUpdate(taskId, req.body, { new: true });
        const response = {message: "  Update project by TaskID Succesfully "}

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);
        const response = {message: " error"}

        res.status(500).json("Internal Server Error");
    }
});

// Assign a user to a task
router.patch('/:id/tasks/:taskId/assign', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const userId = req.body.userId;
        const task = await taskModel.findById(taskId);

        task.assignedUsers.push(userId);
        await task.save();
        const response = {message: " Assign Succesfully "}

        res.status(200).json("User assigned to task successfully");
    } catch (error) {
        console.error(error);
        const response = {message: "error "}

        res.status(500).json("Internal Server Error");
    }
});

// Get comments for a task
router.get('/:id/tasks/:taskId/comments', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const task = await taskModel.findById(taskId);
        const response = {message: " Get comments  Succesfully "}

        res.status(200).json(task.comments);
    } catch (error) {
        console.error(error);
        const response = {message: " error "}

        res.status(500).json("Internal Server Error");
    }
});

// Add a comment to a task
router.post('/:id/tasks/:taskId/comments', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const { comment } = req.body;
        const task = await taskModel.findById(taskId);

        task.comments.push(comment);
        await task.save();
        const response = {message: " add comment Succesfully "}

        res.status(200).json("Comment added to task successfully");
    } catch (error) {
        console.error(error);
        const response = {message: " error "}

        res.status(500).json("Internal Server Error");
    }
});

// Delete a task (privileged)
router.delete('/:id/tasks/:taskId', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        await taskModel.findByIdAndDelete(taskId);
        const projectId = req.params.id;
        const project = await projectModel.findById(projectId);
        project.tasks.pull(taskId);
        await project.save();
        const response = {message: " Delete Succesfully "}

        res.status(200).json("Task deleted successfully");
    } catch (error) {
        console.error(error);
        const response = {message: " error "}

        res.status(500).json("Internal Server Error");
    }
});

module.exports = router;