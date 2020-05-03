const pizza = mysqlSequelize.import('../../../schemas/order.js')
const pizzaitem = mysqlSequelize.import('../../../schemas/items.js')

module.exports = async (pizzaData) => {
  return (async () => {
    try {
     
      var pizzaJson = {
        "totalPrice": pizzaData.totalPrice,
        "address": pizzaData.address,
        "createDate": new Date()
      }
      var data = await pizza.create(pizzaJson)
      var orderNo = data.dataValues.orderNo
     
      pizzaData.items.map(async function(item){
        let orderitem = {
          "orderNo": orderNo,
          "itemName": item.itemName,
          "quantity": item.quantity,
          "cost": item.cost,
          "createDate": new Date()
        }

        await pizzaitem.create(orderitem)

      })

      return data;
    } catch (e) {
      console.log("e............................", e);
      throw e
    }
  })()
}



        //let tktData = await mysqlSequelize.query("SELECT * FROM sys.chatBot_Tktnumber order by id desc limit 1", { type: mysqlSequelize.QueryTypes.SELECT})
        //  let id = tktData[0].id +1 ;
        //  let tktformat = 'TKT000' + id;
        //  let numberData = {
        //      id: id,
        //      tkt_text : tktNumberData.tkt_text,
        //      tktnumber: tktformat,
        //      start_date: new Date()
        // }

        // let data = await tktnumber.create(numberData)