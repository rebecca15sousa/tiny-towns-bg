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

//Defines the number of each type of cards
let commonCardsNumber = 4;
let purpleCardsNumber = 15;
let blueCardsNumber = 1;

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
for (let i = 0; i < 15; i++) {
  resourceDeck[i] = new Image();
  resourceDeck[i].src = 'assets/resource_' + resourceAll[i] + '.png';
}

//Populating blue buildings deck
buildings.blueBuildings[0] = new Image();
buildings.blueBuildings[0].src = 'assets/blue_building (1).png';

//Populating common buildings deck (this one could be optimized including a loop to check an array that contains the different types of common buildings)
  for (let i = 0; i < generalBuildingTypes.length-1; i++) {
    for (let j = 1; j < commonCardsNumber + 1; j++) {
      let buildingType = buildings[generalBuildingTypes[i]+"Buildings"];
      buildingType[j-1] = new Image();
      buildingType[j-1].src = 'assets/' + generalBuildingTypes[i] + '_building (' + j + ').png';
  }
}

//Populating special buildings deck

for (let i = 1 ; i < 16 ; i++) {
  buildings.purpleBuildings[i-1] = new Image();
  buildings.purpleBuildings[i-1].src = 'assets/purple_building (' + i + ').png';
}

//Select a random card for each common building type
for (let i = 0; i < generalBuildingTypes.length; i++) {
  let name = buildings[generalBuildingTypes[i]+"Buildings"];
  selectedCards.push(name[Math.floor(Math.random() * name.length)]);
}
