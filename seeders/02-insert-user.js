'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                "name": "demo",
                "login": "demo",
                "password": "$2b$10$V8Qcit9MO3FrkpbOIKRYA.OK6A99zhshI3/kmVFoxtObNvPce30h6",
                "age": "20",
                "updatedAt": new Date(),
                "createdAt": new Date()
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('Users', null, {})
    }
};
