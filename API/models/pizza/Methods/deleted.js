const pizza = mysqlSequelize.import('../../../schemas/order.js')
const pizzaitem = mysqlSequelize.import('../../../schemas/items.js')

module.exports = function(id){
    
    return( async()=>{
        try{
            let data = await pizza.destroy({
                where:{
                    "orderNo":id.id
                }
            })

            let itemsdata = await pizzaitem.destroy({
                where:{
                    "orderNo":id.id
                }
            })
          
            
            return data;
        }catch(e){
            throw e
            console.log("e.......................",e);
            
        }
    })()
}