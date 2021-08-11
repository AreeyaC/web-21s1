const { db } = require('../_services/firebase-initialized')

const teamsList = async (req, res) => {
  const db = req.params.teams

  // 2. Queries
  db.collection('teams')
    .orderBy('name')
    .get()

  // 3. Response
  res.render('teams-list')
}

db.collection('teams')
  .doc('teams')
  .get()

module.exports = {
  teamsList
}
