const pizzaCreate = require(appPath + '/models/pizza')

module.exports = async (req,res)=>{
    //let response = Object.assign({}, BasicResponse);
    let response = {
        success:false,
        data:'',
        message:undefined
    }
    let PizzaCreate = new pizzaCreate()
 
    let result = await PizzaCreate.get(req.body)
    .catch((err)=>{
        response.message = err;
        res.status(403).json(response)
    })
    response.success = true
    response.data = result
    res.status(200).json(response)
}