const prismaClient = require('../prisma')

const messages = require('./messages')

exports.execute = async function(title){
  await prismaClient.message.delete({
    where: {
      title: title
    }
  })

  const result = await messages.execute()

  return result
} 