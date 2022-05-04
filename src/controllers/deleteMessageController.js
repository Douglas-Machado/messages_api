const deleteMessage = require('../services/deleteMessage')

exports.handle = async function(req, res){
  try{
    const { title } = req.body;
  
    const result = await deleteMessage.execute(title)
  
    return res.json(result)
  }catch{(e) => {
    console.log(e)
    }
  }
}