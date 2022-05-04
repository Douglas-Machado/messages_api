const prismaClient = require('../prisma')

const messages = require('./messages')

exports.execute = async function(title){
  try{
    await prismaClient.message.delete({
      where: {
        title: title
      }
    })
  
    const result = await messages.execute()
  
    return result
  }catch{(e) => {
    console.log(e)
  }}
} 