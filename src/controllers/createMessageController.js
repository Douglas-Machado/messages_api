const { Prisma } = require("@prisma/client");
const createMessage = require("../services/createMessage")

exports.handle = async function (req, res){
  try{
    const { title, content } = req.body;
    if(!title || !content) {
        return res.json({error: "missing params"})
    }
  
    const result = await createMessage.execute(title, content)
    
    res.status(201)
    return res.json(result)
  }catch(e){
    if(e instanceof Prisma.PrismaClientKnownRequestError) {
      if(e.code === 'P2002') {
        res.status(400)
        return res.json({error: "This title already exists"})
      }
    }
  }
}
