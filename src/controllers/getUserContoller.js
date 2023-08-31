const User = require('../model/User')

const getAllUsers = async (ctx) => {
  const users = await User.find({})
  ctx.body = users
}

module.exports = getAllUsers
