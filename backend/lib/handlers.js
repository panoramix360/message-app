const messages = require('./messages')

exports.messages = (req, res) => {
  res.status(200)
  res.json(messages.createMessageList())
}

exports.notFound = (req, res) => {
  res.status(404)
  res.send()
}

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => {
  res.status(500)
  res.send()
}
/* eslint-enable no-unused-vars */