const Router = require("express")

const createMessageController = require("./controllers/createMessageController")

const messagesController = require('./controllers/messagesController')

const deleteMessageController = require('./controllers/deleteMessageController')

const updateMessageController = require('./controllers/updateMessageController')


const router = Router()

router.post("/messages", createMessageController.handle)

router.get("/messages", messagesController.handle)

router.delete("/message", deleteMessageController.handle)

router.put("/message", updateMessageController.handle)

module.exports = router