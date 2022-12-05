import { Words } from '../Words.js'

export default class Model {
  constructor() {
    this.username = null
    this.lobby = null
    this.players = []
    this.isPlaying = false
    this.startTime = 0
    this.time = ""
    this.deck = []
    this.word = "SLAM"
    this.usedWords = []
    this.isReady = false
    this.front = true
    this.playerNum = 0
    this.selected = null
    this.stuck = 0
    this.winner = ""
    this.message = ""
  }

  setUsername(name) {
    this.username = name
  }

  setLobby(lobby) {
    this.lobby = lobby
  }

  addPlayer(username, ready) {
    this.players.push([username, ready])

    if (username === this.username) {
      this.players[this.players.length-1] = this.players[0]
      this.players[0] = [username, ready]
    }

    if (this.players.length > 1) {
      this.players = [this.players[0]].concat(this.players.slice(1, this.players.length).sort());
    }
  }

  setPlayers(players) {
    this.players = players
  }

  hasPlayer(username) {
    return this.players.map(player => player[0]).includes(username)
  }

  setIsPlaying(isPlaying) {
    this.isPlaying = isPlaying
    this.selected = null
  }

  setStartTime(startTime) {
    this.startTime = startTime
  }

  setEndTime(endTime) {
    let diff = endTime - this.startTime
    let newTime = ""

    newTime += Math.floor(diff / 60000).toString()
    newTime += ':'
    if (Math.floor((diff % 60000) / 1000) < 10) {
      newTime += '0'
    }
    newTime += Math.floor((diff % 60000) / 1000).toString()

    this.time = newTime
  }

  setTime(time) {
    this.time = time
  }

  setDeck(deck) {
    this.deck = deck
  }

  setWord(word) {
    this.word = word
  }

  addUsedWord(word) {
    this.usedWords.push(word)
  }

  setUsedWords(usedWords) {
    this.usedWords = usedWords
  }

  setReady(isReady) {
    this.isReady = isReady
  }

  setFront(front) {
    this.front = front
  }

  setPlayerNum(playerNum) {
    this.playerNum = playerNum
  }

  setSelected(selected) {
    this.selected = selected
  }

  setWinner(winner) {
    this.winner = winner
  }

  deal(randInt) {
    let hand = []
    for (let i = 0; i < this.deck.length; i++) {
      if (
        i % this.players.length === this.playerNum &&
        !(this.players.length === 1 && i > Math.floor(this.deck.length/2)-1)
      ) {
        hand.push(this.deck[i])
      }
    }
    this.deck = hand
    this.word = Words[randInt].toUpperCase()
    this.addUsedWord(this.word)
  }

  selectCard(index) {
    this.selected = index
  }

  playCard(index) {
    if (this.selected !== null) {
      let newWord = ""
      for (let i = 0; i < 4; i++) {
        if (i === index) {
          newWord += this.deck[this.selected][this.front?0:1]
        }
        else {
          newWord += this.word[i]
        }
      }

      if (!Words.includes(newWord.toLowerCase())) {
        this.setMessage(newWord + " is not a word")
      } 
      else if (this.usedWords.includes(newWord)) {
        this.setMessage(newWord + " already used")
      } 
      else {
        this.setMessage("")
        this.setWord(newWord)
        this.deck[this.selected] = "  "
        this.selected = null
        return newWord
      }

    }
    return false
  }

  isStuck() {
    let isStuck = this.isPlaying

    for (let wordLetter = 0; wordLetter < 4; wordLetter++) {
      for (let cardIndex = 0; cardIndex < this.deck.length; cardIndex++) {
        let tempWord1 =
          this.word.substring(0, wordLetter) +
          this.deck[cardIndex][0] +
          this.word.substring(wordLetter + 1, 4)

        let tempWord2 =
          this.word.substring(0, wordLetter) +
          this.deck[cardIndex][1] +
          this.word.substring(wordLetter + 1, 4)
          
        if (
          (
            Words.includes(tempWord1.toLowerCase()) &&
            !this.usedWords.includes(tempWord1)
          ) ||
          (
            Words.includes(tempWord2.toLowerCase()) &&
            !this.usedWords.includes(tempWord2)
          )
        ) {
          isStuck = false
        }
      }
    }

    return(isStuck)
  }

  setStuck(stuck) {
    this.stuck = stuck
  }

  hasWon() {
    return [...new Set(this.deck)].length === 1 && [...new Set(this.deck)][0] === '  '
  }

  setMessage(message) {
    this.message = message
  }

  copy() {
    let modelCopy = new Model()

    modelCopy.setUsername(this.username)
    modelCopy.setLobby(this.lobby)
    modelCopy.setPlayers(this.players)
    modelCopy.setIsPlaying(this.isPlaying)
    modelCopy.setStartTime(this.startTime)
    modelCopy.setTime(this.time)
    modelCopy.setDeck(this.deck)
    modelCopy.setWord(this.word)
    modelCopy.setUsedWords(this.usedWords)
    modelCopy.setReady(this.isReady)
    modelCopy.setFront(this.front)
    modelCopy.setPlayerNum(this.playerNum)
    modelCopy.setSelected(this.selected)
    modelCopy.setStuck(this.stuck)
    modelCopy.setWinner(this.winner)
    modelCopy.setMessage(this.message)
    
    return modelCopy
  }
}
