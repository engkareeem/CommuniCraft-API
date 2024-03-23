const express = require('express');
const router = express.Router();
const projectModel = require('../../models/project');

router.post("/", async (req, res) => {
    try {
        let body = req.body;

        let project = await projectModel.create(body);
        res.status(200).send("Project is created");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/:id", async (req, res) => {
    try {
        let projectId = req.params.id;

        let project = await projectModel.findById(projectId);
        res.status(200).json(project);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.patch("/:id", async (req, res) => {
    try {
        let body = req.body;
        let projectId = req.params.id;

        await projectModel.findByIdAndUpdate(projectId, body);
        res.status(200).send("Data updated");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/:id/comments", async (req, res) => {
    try {
        let projectId = req.params.id;

        let project = await projectModel.findById(projectId);
        let comments = project.comments;
        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/:id/comments", async (req, res) => {
    try {
        let body = req.body;
        let projectId = req.params.id;

        let project = await projectModel.findById(projectId);
        project.comments.push(body.comment);
        await project.save();
        res.status(200).send("Comment added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete("/:id/comments/:Cid", async (req, res) => {
    try {
        let projectId = req.params.id;
        let commentId = req.params.Cid;

        let project = await projectModel.findById(projectId);
        project.comments.pull(commentId);
        await project.save();
        res.status(200).send("Comment has been removed");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        let projectId = req.params.id;

        await projectModel.findByIdAndDelete(projectId);
        res.status(200).send("Project has been removed");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Project sharing support

router.post("/:id/share", async (req, res) => {
    try {
        let body = req.body;
        let projectId = req.params.id;

        let project = await projectModel.findById(projectId);
        project.isShared = body.isShared;
        await project.save();
        res.status(200).send("Sharing feature has been edited successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/:id/share", async (req, res) => {
    try {
        let projectId = req.params.id;
        let project = await projectModel.findById(projectId);
        let isShared = project.isShared;
        res.status(200).send({ isShared });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
