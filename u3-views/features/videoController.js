const { getVideo, getSuggestions } = require('../_services/fakeapi')

const videosPlayer = (req, res) => {
  const videoID = req.params.id
  const video = getVideo(videoID)
  const teases = getSuggestions(6)

  res.render('video-player', { video: video, teases: teases })
}

const videosHome = (req, res) => {
  const cards = getSuggestions(30)

  res.render('video-home', { cards: cards })
}

module.exports = {
  videosPlayer,
  videosHome
}
