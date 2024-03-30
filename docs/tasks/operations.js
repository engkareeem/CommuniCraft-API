/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Operations related to tasks
 */

/**
 * @swagger
 * /tasks/{id}/tasks:
 *   get:
 *     summary: Get all tasks for a project
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project
 *     responses:
 *       200:
 *         description: Returns an array of tasks for the project
 *       404:
 *         description: Project not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /tasks/{id}/tasks:
 *   post:
 *     summary: Create a new task for a project
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project
 *       - in: body
 *         name: task
 *         required: true
 *         description: The task object
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the task
 *             description:
 *               type: string
 *               description: Description of the task
 *     responses:
 *       201:
 *         description: Task created successfully
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /tasks/{id}/tasks/{taskId}:
 *   get:
 *     summary: Get a task by TaskID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: Returns the task
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /tasks/{id}/tasks/{taskId}:
 *   patch:
 *     summary: Update a task by TaskID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task
 *       - in: body
 *         name: task
 *         required: true
 *         description: The task object
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the task
 *             description:
 *               type: string
 *               description: Description of the task
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /tasks/{id}/tasks/{taskId}/assign:
 *   patch:
 *     summary: Assign a user to a task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task
 *       - in: body
 *         name: userId
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: string
 *               description: ID of the user to assign
 *     responses:
 *       200:
 *         description: User assigned to task successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /tasks/{id}/tasks/{taskId}/comments:
 *   get:
 *     summary: Get comments for a task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: Returns an array of comments for the task
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /tasks/{id}/tasks/{taskId}/comments:
 *   post:
 *     summary: Add a comment to a task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task
 *       - in: body
 *         name: comment
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             comment:
 *               type: string
 *               description: The comment to add
 *     responses:
 *       200:
 *         description: Comment added to task successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /tasks/{id}/tasks/{taskId}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal Server Error
 */
