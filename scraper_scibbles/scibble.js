for (let event of gameSplit) {
  let splitString = event.split('s')
  let timeString = splitString[0]+'s'
  splitString.shift()
  let eventString = splitString.join('s')
  if (eventString.includes("Killed")) {
    let splitKill = eventString.split("Killed")
    let killObject = {
      killer: (splitKill[0]).split('\t')[1],
      victim: (splitKill[1]).split('\t')[1],
      time: timeString
    }
    killArray.push(killObject)
  }
  if (eventString.includes("Knocked")) {
    let splitKnock = eventString.split("Knocked")
    let killObject = {
      knocker: (splitKnock[0]).split('\t')[1],
      victim: (splitKnock[1]).split('\t')[1],
      time: timeString
    }
    knockArray.push(killObject)
  }
  if (eventString.includes("Disconnected")) {
    let splitDisconnect = eventString.split("Disconnected")
    let disconnectObject = {
      player: splitDisconnect,
      time: timeString
    }
    disconnectArray.push(disconnectObject)
  }
}
for (let kill of killArray) {
  if (!playersArray.includes(kill.killer)) {
    console.log("new")
    playersArray.push(kill.killer)
  }
  if(!playersArray.includes(kill.victim)) {
    playersArray.push(kill.victim)
  }
}