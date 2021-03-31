const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://fortnitetracker.com/events/epicgames_S15_FNCS_GrandFinals_NAE?window=S15_FNCS_GrandFinals_NAE_Round1&sm=floating';



rp(url)
  .then(function(html){
    //success!
    let htmlSplit1 = (html.split('var imp_leaderboard = '))[1]
    let players = (htmlSplit1.split('"entries"')[0]).split(`"internal_Accounts":`)[1]
    let playersArray = players.split('}')
    let theRest = ((htmlSplit1.split('"entries"')[1]).split('];</script>')[0])
    let teams = (theRest.split(';</script>\n<script type="text/javascript">var imp_matches =')[0])
    let games = (theRest.split(';</script>\n<script type="text/javascript">var imp_matches =')[1])
    let teamsArray = teams.split('}')
    let gamesArray = games.split('}')
    const gameInfo = [] 
    let cunt = 1
    for (let game of gamesArray) {
      if (cunt!=13){
        let splitGame = game.split(':')
        // console.log(splitGame, splitGame[5], splitGame[6], splitGame[7])
        let gameTime = (splitGame[5].split(`"`)[1] + splitGame[6] + splitGame[7].split(`"`)[0])
        let gameID = (splitGame[1].split(`"`)[1])
        let gameObject = { "id": gameID, "time": gameTime }
        // console.log(gameObject, "object")
        // console.log(gameInfo, "before push")
        gameInfo.push(gameObject)
        // console.log(gameInfo, "after push")
      }
      cunt ++
    }
    console.log(gameInfo)
  })
  .catch(function(err){
    console.log("error", err)
    //handle error
  });


