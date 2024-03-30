
/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - description
 *         - workers
 *         - dueDate
 *       properties:
 *         description:
 *           type: string
 *           description: The description of the task.
 *         workers:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of user IDs assigned to the task.
 *         dueDate:
 *           type: string
 *           format: date
 *           description: The due date of the task.
 *         comments:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of comments related to the task.
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Task]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Successfully created a new task
 *       400:
 *         description: Bad request, invalid input
 *   get:
 *     summary: Get all tasks
 *     tags: [Task]
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
 *         description: No tasks found
 *
 * /tasks/{taskId}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task to get
 *     responses:
 *       200:
 *         description: Successfully retrieved the task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found
 *   put:
 *     summary: Update a task by ID
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Successfully updated the task
 *       404:
 *         description: Task not found
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the task to delete
 *     responses:
 *       200:
 *         description: Successfully deleted the task
 *       404:
 *         description: Task not found
 */
