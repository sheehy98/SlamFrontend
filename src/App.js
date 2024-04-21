import React from "react";
import { layout } from "./Layout.js";
import Model from "./model/Model";
import { Words } from './Words.js'

import {
  join,
  leave,
  ready,
  addPlayer,
  setGame,
  start,
  end,
  flip,
  select,
  play,
  setWord,
  won,
  someoneStuck,
  sendMessage
} from "./controller/Controller.js";

import Tabs from "./components/Tabs";
import Tutorial from "./components/Tutorial";
import Slam from "./components/Slam";
import Leaderboard from "./components/Leaderboard";

import io from "socket.io-client";
const socket = io.connect('https://slam-backend.adaptable.app/', { transports : ['websocket'] })

function App() {
  const [model, setModel] = React.useState(new Model());

  React.useEffect(() => {
    socket.on('doRollcall', handleRollcall)
    socket.on('rollcallResponse', handleRollcallResponse)
    socket.on('newWord', handleNewWord)
    socket.on('left', handlePlayerLeft)
    socket.on('showWinner', handleShowWinner)
    socket.on('stuck', handleSomeoneStuck)
    socket.on('reroll', handleReroll)

    return () => {
      socket.off('doRollcall', handleRollcall)
      socket.off('rollcallResponse', handleRollcallResponse)
      socket.off('newWord', handleNewWord)
      socket.off('left', handlePlayerLeft)
      socket.off('showWinner', handleShowWinner)
      socket.off('stuck', handleSomeoneStuck)
      socket.off('reroll', handleReroll)
    }
  }, [model]);

  const handleRollcall = deck => {
    if (model.lobby){
      let newModel = setGame(model, [], deck)
      setModel(newModel)

      socket.emit('rollcall', {
        lobby: newModel.lobby,
        username: newModel.username,
        isReady: newModel.isReady,
        randInt: Math.floor(Math.random() * Words.length)
      })
    }
  }

  const handleRollcallResponse = (data) => {
    let newModel = addPlayer(model, data.username, data.isReady)
    if (newModel.players.filter(player => player[1]).length === data.count) {
      newModel = start(newModel, data.randInt)
    }
    setModel(newModel)
  }

  const handleJoin = (username, lobby) => {
    let newModel = join(model, username, lobby);
    setModel(newModel)

    socket.emit("join", lobby)
    socket.emit('refreshLobby', lobby)
  };

  const handleLeave = (lobby) => {
    let newModel = leave(model);
    setModel(newModel)

    socket.emit("leave", lobby)
  };

  const handleReady = () => {
    let newModel = ready(model);
    setModel(newModel)
    socket.emit('refreshLobby', model.lobby)
  };

  const handleFlip = () => {
    let newModel = flip(model)
    setModel(newModel)
  }

  const handlePlay = (index) => {
    let newModel = play(model, index);
    setModel(newModel)
    
    socket.emit('play', { lobby: newModel.lobby, word: newModel.word })
    if (newModel.hasWon()) {
      socket.emit('iWon', { lobby: newModel.lobby, user: newModel.username })
    }

  };

  const handleShowWinner = (user) => {
    let newModel = won(model, user)
    setModel(newModel)
    socket.emit('refreshLobby', model.lobby)
  };

  const handleSelect = (index) => {
    let newModel = select(model, index);
    setModel(newModel)
  };

  const handleNewWord = word => {
    let newModel = setWord(model, word)
    if (!newModel.hasWon() && newModel.isStuck()) {
      handleStuck()
    }
    setModel(newModel)
  }

  const handlePlayerLeft = () => {
    let newModel = end(model)
    setModel(newModel)
  }

  const handleStuck = () => {
    socket.emit('stuck', model.lobby)
  }

  const handleSomeoneStuck = () => {
    if (model.stuck + 1 === model.players.length) {
      let unusedWords = Words.filter(word => !model.usedWords.includes(word.toUpperCase()));
      sendMessage(model, "All players stuck, new word chosen")
      socket.emit('reroll', {
        lobby: model.lobby, 
        randInt: Words.indexOf(unusedWords[Math.floor(Math.random() * unusedWords.length)])
      })
    }
    else {
      let newModel = someoneStuck(model)
      setModel(newModel)
    }
  }

  const handleReroll = (index) => {
    handleNewWord(Words[index].toUpperCase())
  }

  return (
    <div style={layout.app}>
      <Tabs>
        <div label="Tutorial">
          <Tutorial/>
        </div>

        <div label="Slam!">
          <Slam
            current={model}
            joinHandler={handleJoin}
            leaveHandler={handleLeave}
            readyHandler={handleReady}
            selectHandler={handleSelect}
            playHandler={handlePlay}
            flipHandler={handleFlip}
          />
        </div>

        <div label="Leaderboard">
          <Leaderboard/>
        </div>
      </Tabs>
    </div>
  );
}

export default App
