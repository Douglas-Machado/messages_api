const updateMessage = require('../services/updateMessage')

exports.handle = async function(req, res){
  const { title, content } = req.body

  result = await updateMessage.execute(title, content)

  return res.json(result)
}