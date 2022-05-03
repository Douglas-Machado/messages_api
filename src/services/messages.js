const { PrismaClient } = require('@prisma/client')
const prismaClient = new PrismaClient

exports.execute = async () => {
  const messagesList = await prismaClient.message.findMany({
    orderBy: {
      createdAt: "desc",
    }
  })

  return messagesList;
}

exports.findOneMessage = async function(title){
  const result = await prismaClient.message.findUnique({
    where: {
      title: title
    }
  })

  return result
}