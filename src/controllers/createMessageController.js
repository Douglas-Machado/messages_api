const createMessage = require("../services/createMessage")

exports.handle = async function (req, res){
  const { title, content } = req.body;

  const result = await createMessage.execute(title, content)

  return res.json(result)
}
