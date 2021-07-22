const { db } = require('../_services/firebase-admin-initialized')
const { firestore } = require('firebase-admin')

const readCovidR = async (req, res) => {
  try {
    // 1. Inputs
    // none

    // 2. Query
    const query = db.collection('covid-latest').get()

    // 3. Response
    const payload = (await query)
      .docs
      .map(doc => doc.data())
      .map(data => ({
        stateId: data.stateId,
        date: data.date.toMillis(),
        stateName: data.stateName,
        cases: data.cases,
        casesNew: data.casesNew,
        vaccineOne: data.vaccineOne,
        vaccineOnePercent: data.vaccineOnePercent,
        vaccineComplete: data.vaccineComplete,
        vaccineCompletePercent: data.vaccineCompletePercent
      }))

    res.json({
      result: 'ok',
      payload: payload,
      count: payload.length
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      result: 'error',
      payload: [],
      count: 0
    })
  }
}

const readCovid = async (req, res) => {
  try {
    // 1. Inputs
    const stateId = req.params.stateId.toUpperCase()

    // 2. Query
    const query = db.collection('covid-history').doc(stateId).get()

    // 3. Response
    const snapshot = await query
    if (!snapshot.exists) { return res.status(404).json({ result: 'not found' }) }

    const { stateName, history } = snapshot.data()
    const payload = {
      stateId,
      stateName,
      history: history.map(item => ({
        date: item.date.toMillis(),
        cases: item.cases,
        casesNew: item.casesNew,
        vaccineOne: item.vaccineOne,
        vaccineOnePercent: item.vaccineOnePercent,
        vaccineComplete: item.vaccineComplete,
        vaccineCompletePercent: item.vaccineCompletePercent
      })
      )
    }

    res.json({ result: 'ok', payload })
  } catch (err) {
    console.error(err)
    res.status(500).json({ result: 'error' })
  }
}

const createCovid = async (req, res) => {
  try {
    // 1. Inputs
    const { stateId, date, cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent } = req.body
    const record = {
      stateId,
      date: firestore.Timestamp.fromMillis(date),
      cases,
      casesNew,
      vaccineOne,
      vaccineOnePercent,
      vaccineComplete,
      vaccineCompletePercent
    }

    // 2. Query
    const query = db.collection('covid-latest').doc(stateId).set(record, { merge: true })

    // 3. Response
    await query
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

const updateCovid = async (req, res) => {
  try {
    // 1. Inputs
    const stateId = req.params.stateId
    const { casesNew } = req.body
    const record = { casesNew }

    // 2. Query
    const query = db.collection('covid-latest').doc(stateId).set(record, { merge: true })

    // 3.Response
    await query
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

const deleteCovid = async (req, res) => {
  try {
    // 1. Inputs
    const stateId = req.params.stateId

    // 2. Query
    const query = db.collection('covid-latest').doc(stateId).delete()

    // 3. Response
    await query
    res.sendStatus(403)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

module.exports = {
  readCovidR,
  readCovid,
  createCovid,
  updateCovid,
  deleteCovid
}
