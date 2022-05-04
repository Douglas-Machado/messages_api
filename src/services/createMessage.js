const prismaClient = require('../prisma')

exports.execute = async function (title, content){
  try{
    const message = await prismaClient.message.create({
      data: {
        title,
        content,
      }
    })
    return message;
  }catch{
    (e) => {
      console.log(e)
    }
  }

}