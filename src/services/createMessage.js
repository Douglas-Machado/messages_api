const prismaClient = require('../prismaConfig')

exports.execute = async function (title, content){
  const message = await prismaClient.message.create({
    data: {
      title,
      content,
    }
  })
  return message;
}