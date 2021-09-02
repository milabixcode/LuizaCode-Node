'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('appointments', {
     id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
     },
     date: {
      type: Sequelize.DATE, 
      allowNull: false,
     },
     user_id:{
       type: Sequelize.INTEGER,
       references: { model: 'users', key: 'id'},
       onUpdate: 'CASCADE', //CASCADE: atualiza a tabela associada a ele
       onDelete: 'SET NULL',
       allowNull: true,
     },
     employee_id:{
       type: Sequelize.INTEGER,
       references: { model: 'users', key: 'id'},
       onUpdate: 'CASCADE', 
       onDelete: 'SET NULL',
       allowNull: true,
    },
     canceled_at:{
       type: Sequelize.DATE,
       allowNull: true,

     },
     created_at:{
      type: Sequelize.DATE,
      allowNull: true,
     },
     updated_at:{
       type: Sequelize.DATE,
       allowNull: true,
      },
   })
  },

  down: queryInterface => {
    return queryInterface.dropTable('')
  }
};
