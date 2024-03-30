/**
 * @swagger
 * tags:
 *   name: Task
 *   description: Operations related to tasks
 */

/**
 * @swagger
 * /projects/{id}/tasks:
 *   get:
 *     summary: Get all tasks for a project
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the project
 *     responses:
 *       200:
 *         description: Successfully retrieved tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       404:
 *         description: Project not found
 */

/**
 * @swagger
 * /projects/{id}/tasks:
 *   post:
 *     summary: Create a new task for a project
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Successfully created a new task
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /projects/{id}/tasks/{taskId}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: Successfully retrieved the task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found
 */

/**
 * @swagger
 * /projects/{id}/tasks/{taskId}:
 *   patch:
 *     summary: Update a task by ID
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Successfully updated the task
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /projects/{id}/tasks/{taskId}/assign:
 *   patch:
 *     summary: Assign a user to a task
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *             required:
 *               - userId
 *     responses:
 *       200:
 *         description: User assigned to task successfully
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /projects/{id}/tasks/{taskId}/comments:
 *   get:
 *     summary: Get comments for a task
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: Successfully retrieved comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /projects/{id}/tasks/{taskId}/comments:
 *   post:
 *     summary: Add a comment to a task
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *             required:
 *               - comment
 *     responses:
 *       200:
 *         description: Comment added to task successfully
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /projects/{id}/tasks/{taskId}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       500:
 *         description: Internal Server Error
 */
