const prismaClient = require('../prisma')

exports.execute = async function(title, content) {
  const message = await prismaClient.message.update({
    where: {
      title: title
    },
    data: {
      content: content
    }
  })

  console.log(message)

  return message
}