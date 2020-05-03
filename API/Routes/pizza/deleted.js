const pizzaCreate = require(appPath + '/models/pizza')

module.exports = async(req, res)=>{

    let response = {
        success:false,
        data:'',
        message: undefined
    }

    let PizzaCreate = new pizzaCreate()
    let result = await PizzaCreate.deleted(req.body)
    .catch((e)=>{
        response.message = e
        res.status(403).json(response)
    })
    response.success = true
    response.data = req.body
    res.status(200).json(response)

}