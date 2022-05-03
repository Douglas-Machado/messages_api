const Router = require("express")

const createMessageController = require("./controllers/createMessageController")

const messagesController = require('./controllers/messagesController')

const deleteMessageController = require('./controllers/deleteMessageController')


const router = Router()

router.post("/messages", createMessageController.handle)

router.get("/messages", messagesController.handle)

router.delete("/message", deleteMessageController.handle)

module.exports = router