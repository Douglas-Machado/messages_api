const messages = require('../services/messages')

exports.handle = async function(req, res){
 const result = await messages.execute()

 return res.json(result)
}  