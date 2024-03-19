// this file is temporarily here, We should move it to another directory

module.exports = {
    DIFFICULTY: {
        BEGINNER: 'Beginner',
        NOVICE: 'Novice',
        INTERMEDIATE: 'Intermediate',
        ADVANCED: 'Advanced',
        EXPERT: 'Expert',
        Validate: function(val) {
            return Object.values(this).some(level => level.toLowerCase() === val.toLowerCase());
        }
    },
    STATUS: {
        NOT_STARTED: 'Not Started',
        IN_PROGRESS: 'In Progress',
        FINISHED: 'Finished',
        Validate: function(val) {
            return Object.values(this).some(level => level.toLowerCase() === val.toLowerCase());
        }
    }
}