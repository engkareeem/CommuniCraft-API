/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Returns an array of users
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
 *     responses:
 *       405:
 *         description: Method Not Allowed
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to get
 *     responses:
 *       200:
 *         description: Returns the requested user
 *       404:
 *         description: User not found
 *   patch:
 *     tags:
 *       - Users
 *     summary: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid UserID provided
 *       404:
 *         description: User not found or could not be updated
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: Invalid UserID provided
 *       404:
 *         description: User not found or could not be deleted
 * /users/{id}/tools:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all tools owned by a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Returns an array of tools owned by the user
 *       404:
 *         description: User not found
 *   post:
 *     tags:
 *       - Users
 *     summary: Add a new tool to a user's collection
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *       - in: path
 *         name: toolId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tool to add
 *     responses:
 *       405:
 *         description: Method Not Allowed
 * /users/{id}/tools/{toolId}/use:
 *   post:
 *     tags:
 *       - Users
 *     summary: Use a tool owned by a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *       - in: path
 *         name: toolId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tool to use
 *     responses:
 *       405:
 *         description: Method Not Allowed
 * /users/{id}/tools/{toolId}/release:
 *   post:
 *     tags:
 *       - Users
 *     summary: Release a tool owned by a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *       - in: path
 *         name: toolId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tool to release
 *     responses:
 *       405:
 *         description: Method Not Allowed
 * /users/{id}/tools/{toolId}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Remove a tool from a user's collection
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *       - in: path
 *         name: toolId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tool to remove
 *     responses:
 *       405:
 *         description: Method Not Allowed
 */
