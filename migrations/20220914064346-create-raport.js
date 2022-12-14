'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('raport', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      nis_siswa: {
        type: Sequelize.STRING(10),
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Siswa',
          key: 'nis_siswa'
        }
      },
      semester: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      thn_ajaran: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sakit: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ijin: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      alpa: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      isNaik: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      naikKelas: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      tinggal_di_Kelas: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      alasan_tidak_naik: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tgl_kenaikan: {
        type: Sequelize.DATEONLY,
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
    await queryInterface.dropTable('raport');
  }
};