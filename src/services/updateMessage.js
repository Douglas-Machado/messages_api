const prismaClient = require('../prismaConfig')

exports.execute = async function(title, content) {
  const message = await prismaClient.message.update({
    where: {
      title: title
    },
    data: {
      content: content
    }
  })

  return message
}