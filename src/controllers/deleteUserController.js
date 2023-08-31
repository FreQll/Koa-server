const User = require('../model/User')

const deleteUser = async (ctx) => {
  const user = await User.findByIdAndDelete(ctx.params.id)

  ctx.body = user
}

module.exports = deleteUser
