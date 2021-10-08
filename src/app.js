//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
    const manager = [managerName, managerAge, currentTeam, trophiesWon]
  return manager
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it

var formation = [4, 4, 3];

//write your function here
function createFormation(formation)
{
  if(formation.length > 0)
  {
    var formation = {defender: formation[0], midfield: formation[1], forward:formation[2]}
    return formation  
  }
  else
    return null
  
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(debutYear)
{
  var playerArray = []
  for(let i=0; i<players.length; i++)
  {
    if(players[i].debut == debutYear)
    {
      playerArray.push(players[i])
    }
  } 
  return playerArray
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position)
{
  var playerPosition = []
  for(let i=0; i<players.length; i++)
  {
    if(players[i].position == position)
    {
      playerPosition.push(players[i])
    }
  }
  return playerPosition
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
  var awardWinningPlayer = []
  for (let i=0; i<players.length; i++)
  {
    for (let j=0; j<players[i].awards.length; j++)
    {
      if(players[i].awards[j].name == awardName)
      {
        awardWinningPlayer.push(players[i])
        break;
      }
    }
  }
  return awardWinningPlayer
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noofTimes)
{
  var player_awards = [];
  var awardtimes =[];
  var count=0;
  for(var i=0;i < players.length;i++)
  {
    for(var j=0;j<players[i].awards.length;j++)
    {
     if(players[i].awards[j].name==awardName)
     count++;
    }
  awardtimes[i]=count;
  count=0;
  }
  for(var i=0;i < players.length;i++)
  {
    if(awardtimes[i]==noofTimes)
    {
    player_awards.push(players[i]);
    }
  }
  return player_awards;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country)
{
  var playersFrom = []
  for (let i=0; i<players.length; i++)
  {
    if(players[i].country == country)
    {
      for(let j=0; j<players[i].awards.length; j++)
      {
        if(players[i].awards[j].name == awardName)
        {
          playersFrom.push(players[i])
        }
      }
    }
    
  }
  return playersFrom
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)
{
  var playersYounger = []
  
  for (let i=0; i<players.length; i++)
  {
    if(players[i].awards.length >= noOfAwards && players[i].team == team && players[i].age < age)
    {
      playersYounger.push(players[i])
    }
  }
  return playersYounger
}

//Progression 9 - Sort players in descending order of their age


//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
