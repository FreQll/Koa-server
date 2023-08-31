const User = require('../model/User')

const postUser = async (ctx) => {
  const user = await User.create({
    first_name: ctx.request.body.first_name,
    last_name: ctx.request.body.last_name,
    middle_name: ctx.request.body.middle_name,
    age: ctx.request.body.age,
    role: ctx.request.body.role,
    industry: ctx.request.body.industry,
  })

  ctx.body = user
}

module.exports = postUser
