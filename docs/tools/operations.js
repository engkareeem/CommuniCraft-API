/**
 * @swagger
 * tags:
 *   name: Tools
 *   description: Operations related to tools
 */

/**
 * @swagger
 * /tools:
 *   get:
 *     summary: Get all tools
 *     tags: [Tools]
 *     responses:
 *       200:
 *         description: Returns an array of tools
 */

/**
 * @swagger
 * /tools:
 *   post:
 *     summary: Add a new tool
 *     tags: [Tools]
 *     responses:
 *       405:
 *         description: Method Not Allowed
 */

/**
 * @swagger
 * /tools/{id}:
 *   delete:
 *     summary: Delete a tool by ID
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tool to delete
 *     responses:
 *       200:
 *         description: Tool deleted successfully
 *       404:
 *         description: Tool not found
 */

/**
 * @swagger
 * /tools/{toolId}:
 *   patch:
 *     summary: Update a tool by ID
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: toolId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tool to update
 *     responses:
 *       200:
 *         description: Tool updated successfully
 *       400:
 *         description: Invalid ToolID provided
 *       404:
 *         description: Tool not found or could not be updated
 */

/**
 * @swagger
 * /users/{id}/tools:
 *   get:
 *     summary: Get all tools owned by a user
 *     tags: [Tools]
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
 *     summary: Add a new tool to a user's collection
 *     tags: [Tools]
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
 */

/**
 * @swagger
 * /users/{id}/tools/{toolId}/use:
 *   post:
 *     summary: Use a tool owned by a user
 *     tags: [Tools]
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
 */

/**
 * @swagger
 * /users/{id}/tools/{toolId}/release:
 *   post:
 *     summary: Release a tool owned by a user
 *     tags: [Tools]
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
 */

/**
 * @swagger
 * /users/{id}/tools/{toolId}:
 *   delete:
 *     summary: Remove a tool from a user's collection
 *     tags: [Tools]
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
