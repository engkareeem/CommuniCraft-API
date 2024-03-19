const express = require('express');
const router = express.Router();
const projectModel = require('../../models/project');
const taskModel = require('../../models/task');

// Get all tasks
router.get('/:id/tasks', async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await projectModel.findById(projectId).populate('tasks');
        res.status(200).json(project.tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
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

        res.status(201).json(savedTask);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Get project task   by TaskID
router.get('/:id/tasks/:taskId', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const task = await taskModel.findById(taskId);
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Update project by TaskID
router.patch('/:id/tasks/:taskId', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const updatedTask = await taskModel.findByIdAndUpdate(taskId, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
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

        res.status(200).send("User assigned to task successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Get comments for a task
router.get('/:id/tasks/:taskId/comments', async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const task = await taskModel.findById(taskId);
        res.status(200).json(task.comments);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
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

        res.status(200).send("Comment added to task successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
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

        res.status(200).send("Task deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;