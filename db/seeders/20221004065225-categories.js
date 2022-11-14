/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Мясо',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Рыба',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Молоко',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Фрукты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
