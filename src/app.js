const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const postUser = require('./controllers/postUserController')
const deleteUser = require('./controllers/deleteUserController')
const putUser = require('./controllers/putUserController')
const getAllUsers = require('./controllers/getUserContoller')

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(router.routes())
app.use(Logger())

router.get('/users', getAllUsers)
router.post('/users', postUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', putUser)

app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log(`Server running on port ${process.env.PORT}`)
})
