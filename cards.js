//Object that holds all different buildings
let buildings = {
  blackBuildings: [],
  greenBuildings: [],
  greyBuildings: [],
  orangeBuildings: [],
  purpleBuildings: [],
  redBuildings: [],
  yellowBuildings: [],
  blueBuildings: [],
}
//Receives the number of players
let playerNumber = 2;

//Defines the number of each type of cards
let commonCardsNumber = 4;
let purpleCardsNumber = 15;
let blueCardsNumber = 1;
let resourceCardsNumber = 15;

//Array Containing one of each different type of card;
let selectedCards = [];

//Types of common buildings, all of which have 4 copies
let generalBuildingTypes = ['black', 'green', 'grey', 'orange', 'red', 'yellow'];

//Types of special buildings, each of which have a variable number of copies
let specialBuildingTypes = ['blue', 'purple'];

//Available types of resources
let resourcesTypes = ['brick', 'glass', 'stone', 'wheat', 'wood'];

//Number of each type of resource
let resourceAmount = 3;

//Array with all types of resources
let resourceAll = [];

//Final resources deck
let resourceDeck = [];

for (let i = 0; i < resourceAmount; i++) {
  for (let j = 0; j < resourcesTypes.length; j++) {
    resourceAll.push(resourcesTypes[j]);
  }
}

//Populating resources decks
for (let i = 0; i < resourceCardsNumber; i++) {
  resourceDeck[i] = new Image();
  resourceDeck[i].src = 'assets/resource_' + resourceAll[i] + '.png';
}

//Populating blue buildings deck
buildings.blueBuildings[0] = new Image();
buildings.blueBuildings[0].src = 'assets/blue_building (1).png';

//Populating common buildings deck (this one could be optimized including a loop to check an array that contains the different types of common buildings)
  for (let i = 0; i < generalBuildingTypes.length; i++) {
    for (let j = 1; j < commonCardsNumber + 1; j++) {
      let buildingType = buildings[generalBuildingTypes[i]+"Buildings"];
      buildingType[j-1] = new Image();
      buildingType[j-1].src = 'assets/' + generalBuildingTypes[i] + '_building (' + j + ').png';
  }
}

//Populating special buildings deck
for (let i = 1 ; i < purpleCardsNumber + 1 ; i++) {
  buildings.purpleBuildings[i-1] = new Image();
  buildings.purpleBuildings[i-1].src = 'assets/purple_building (' + i + ').png';
}

//Select a random card for each common building type
for (let i = 0; i < generalBuildingTypes.length; i++) {
  let name = buildings[generalBuildingTypes[i]+"Buildings"];
  selectedCards.push(name[Math.floor(Math.random() * name.length)]);
}

//Select random card(s) for special building Types
for (let i = 0; i < specialBuildingTypes.length; i++) {
  if (specialBuildingTypes[i] == "purple") {
    for (let j = 0; j < playerNumber; j++) {
      let randomIndex = Math.floor(Math.random() * buildings.purpleBuildings.length);
      selectedCards.push(buildings.purpleBuildings[randomIndex]);
      buildings.purpleBuildings.splice[randomIndex, 1];
    }
  }
  if (specialBuildingTypes[i] == "blue") {
      let randomIndex = Math.floor(Math.random() * buildings.blueBuildings.length);
      selectedCards.push(buildings.blueBuildings[randomIndex]);
      buildings.blueBuildings.splice[randomIndex, 1];
  }
}

//displays selected building cards on screen
const buildingCards = document.getElementById("buildingCards");

for (let i = 0; i < selectedCards.length; i++) {
  buildingCards.appendChild(selectedCards[i]);
}