const pizza = mysqlSequelize.import('../../../schemas/order.js')
const pizzaitem = mysqlSequelize.import('../../../schemas/items.js')

module.exports = async(id)=>{
    return(async()=>{
        try{
            let data = await pizza.findAll({
                where:{
                    "orderNo": id.id
                }
            }) 
            let itemsdata = await pizzaitem.findAll({
                where:{
                    "orderNo": id.id
                }
            }) 
            var totalData = {
                "data":data, 
                "items":itemsdata
            }

            return totalData;
        }catch(e){
            console.log(e);
            throw e
        }
    })()
}