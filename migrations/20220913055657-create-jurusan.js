'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jurusan', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(50)
      },
      nama: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      konsentrasi: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      desc: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jurusan');
  }
};