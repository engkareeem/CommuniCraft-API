/** 
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         size:
 *           type: number
 *           description: Number of project workers
 *         difficulty:
 *           type: string
 *           description: Project difficulty
 *           enum: [Beginner, Novice, Intermediate, Advanced, Expert]
 *         materials:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: IDs of project materials
 *         workers:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: IDs of project workers
 *         status:
 *           type: string
 *           description: Project status
 *           enum: [Not Started, In Progress, Finished]
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: Project due date
 *         isShared:
 *           type: boolean
 *           description: Flag indicating if the project is shared
 *         comments:
 *           type: array
 *           items:
 *             type: string
 *           description: Comments related to the project
 *         tasks:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: IDs of tasks related to the project
 *         location:
 *           type: string
 *           description: location of the project
 */

