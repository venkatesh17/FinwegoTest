/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Order', {
      orderNo: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      totalPrice: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      address: {
        type: DataTypes.STRING(2000),
        allowNull: true
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: 'Order',
      timestamps: false
    });
  };
  