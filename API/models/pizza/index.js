 const fs = require('fs')

 class Pizza{
     constructor(){
         
     }
 }

 fs.readdirSync(__dirname+"/Methods/").forEach(function(file){
    if(file != 'index.js'){
        let filename = file.replace('.js','')              
        Pizza.prototype[filename] = require(__dirname+"/Methods/"+filename)
    }
 })

 module.exports = Pizza