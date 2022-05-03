const deleteMessage = require('../services/deleteMessage')

exports.handle = async function(req, res){
  const { title } = req.body;

  const result = await deleteMessage.execute(title)
  console.log(result)

  return res.json(result)
}