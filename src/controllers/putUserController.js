const User = require('../model/User')

const putUser = async (ctx) => {
  const user = await User.findByIdAndUpdate(
    ctx.params.id,
    {
      first_name: ctx.request.body.first_name,
      last_name: ctx.request.body.last_name,
      middle_name: ctx.request.body.middle_name,
      age: ctx.request.body.age,
      role: ctx.request.body.role,
      industry: ctx.request.body.industry,
    },
    { new: true },
  )
  ctx.body = user
}

module.exports = putUser
