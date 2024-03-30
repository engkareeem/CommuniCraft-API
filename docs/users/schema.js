/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user.
 *           example: NasrAllah Al-Shaer
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *           example: user@example.com
 *         password:
 *           type: string
 *           description: The password of the user.
 *           example: password123
 *           minLength: 6
 *         age:
 *           type: integer
 *           description: The age of the user.
 *           example: 30
 *         gender:
 *           type: boolean
 *           description: The gender of the user. True for male, false for female.
 *           example: true
 *         address:
 *           type: string
 *           description: The address of the user.
 *           example: 123 Main St, City, Country
 *         contact:
 *           type: string
 *           description: The contact number of the user or the contact email.
 *           example: +1234567890
 *         skills:
 *           type: array
 *           description: An array of skills possessed by the user.
 *           items:
 *             type: string
 *           example: ["Painting", "Building", "Sewing"]
 *         interests:
 *           type: array
 *           description: An array of interests of the user.
 *           items:
 *             type: string
 *           example: ["Glass Art", "Woodworking", "Knitting"]
 *         borrowedTools:
 *           type: array
 *           description: An array of tools borrowed by the user.
 *           items:
 *             type: object
 *             properties:
 *               tool:
 *                 type: string
 *                 format: uuid
 *                 description: The ID of the tool borrowed by the user.
 *               from:
 *                 type: string
 *                 format: uuid
 *                 description: The ID of the user who lent the tool.
 *         ownedTools:
 *           type: array
 *           description: An array of tools owned by the user.
 *           items:
 *             type: object
 *             properties:
 *               tool:
 *                 type: string
 *                 format: uuid
 *                 description: The ID of the tool owned by the user.
 *               stockNumber:
 *                 type: integer
 *                 description: The total stock number of the tool.
 *               stockAvailable:
 *                 type: integer
 *                 description: The available stock number of the tool.
 *               availableToBorrow:
 *                 type: boolean
 *                 description: Indicates whether the tool is available for borrowing.
 */
