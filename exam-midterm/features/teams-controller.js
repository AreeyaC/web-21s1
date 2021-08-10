const { db } = require('../_services/firebase-admin-initialized')

const teamCreateForm = async (req, res) => {
  res.render('team-create-form')
}

module.exports = {
  teamCreateForm,
}
