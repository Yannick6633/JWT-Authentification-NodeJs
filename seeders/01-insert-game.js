'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Games', [
     {
       name:'Super Mario',
           createdAt: new Date(),
        updatedAt: new Date()
  },
    {
       name:'Zelda',
           createdAt: new Date(),
        updatedAt: new Date()
    },
    {
       name:'Donkey Kong',
           createdAt: new Date(),
        updatedAt: new Date()
    },
    {
       name:'Bomberman',
           createdAt: new Date(),
        updatedAt: new Date()
    },
    {
       name:'Mario Kart',
           createdAt: new Date(),
        updatedAt: new Date()
    },
  ])
  },

down: async (queryInterface, Sequelize) => {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  return queryInterface.bulkDelete('Games', null, {})
}
};
