const pizzaCreate = require(appPath + '/models/pizza')

module.exports = async(req, res)=>{
    let response = {
        success:false,
        message:undefined,
        data:''
    }

    let PizzaCreate = new pizzaCreate()
    let result = await PizzaCreate.create(req.body)
    .catch((e)=>{
        response.message = e
        res.status(403).json(response)
    })
  
    req.body["orderNo"]= result.orderNo
    response.success = true
    response.data = req.body
    res.status(200).json(response)

}