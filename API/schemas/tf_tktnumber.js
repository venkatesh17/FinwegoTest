module.exports  = function(sequelize, DataTypes){
     return sequelize.define('chatBot_Tktnumber',  {
          id: {
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true,
               autoIncrement: true
          },
          tktnumber: {
               type: DataTypes.STRING,
               allowNull: true
          },
          tkt_text: {
               type: DataTypes.STRING(10000),
               allowNull: true
          },
          start_date: {
               type: DataTypes.DATE,
               allowNull: true
          }
     },
     {
         tableName: 'chatBot_Tktnumber',
         timestamps: false
    })
}
