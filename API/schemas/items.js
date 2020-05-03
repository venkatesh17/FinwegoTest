/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('items', {
      orderNo: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        primaryKey: true,
      },
      itemName: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      quantity: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      cost: {
        type: DataTypes.INTEGER(2000),
        allowNull: true
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: 'items',
      timestamps: false
    });
  };
  