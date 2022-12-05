export function join(model, username, lobby) {
    model.setUsername(username)
    model.setLobby(lobby)
    return model.copy()
}

export function leave(model) {
  model.setUsername(null)
  model.setLobby(null)
  model.setReady(false)
  model.setPlayers([])
  model.setWinner(null)
  model.setIsPlaying(false)
  model.setMessage("")
  return model.copy()
}

export function ready(model) {
  if (model.isReady) { 
    model.setReady(false) 
    model.setPlayerNum(0)
  }
  else {
    model.setPlayerNum(model.players.map(player => player[0]).sort().indexOf(model.username))
    model.setReady(true) 
  }
  return model.copy()
}

export function addPlayer(model, username, ready) {
  model.setIsPlaying(false)
  model.setMessage("")
  if (!model.hasPlayer(username)) {
    model.addPlayer(username, ready)
  }
  return model.copy()
}

export function setGame(model, players, deck) {
  model.setPlayers(players)
  model.setDeck(deck)
  return model.copy()
}

export function start(model, randInt) {
  model.deal(randInt)
  model.setIsPlaying(true)
  model.setMessage("")
  return model.copy()
}

export function end(model) {
  model.setIsPlaying(false)
  model.setMessage("")
  return model.copy()
}

export function flip(model) {
  model.setFront(!model.front)
  return model.copy()
}

export function select(model, index) {
  model.selectCard(index)
  return model.copy()
}

export function play(model, index) {
  const word = model.playCard(index)
  if (word) { model.addUsedWord(word) }
  return model.copy()
}

export function setWord(model, word) {
  model.setStuck(0)
  model.setWord(word)
  model.addUsedWord(word)
  return model.copy()
}

export function won(model, user) {
  model.setWinner(user)
  model.setIsPlaying(false)
  model.setMessage("")
  model.setReady(false)
  model.setUsedWords([])
  return model.copy()
}

export function someoneStuck(model) {
  model.setStuck(model.stuck + 1)
  return model.copy()
}

export function sendMessage(model, message) {
  model.setMessage(message)
  return model.copy()
}