
var black_buildings = []
var green_buildings = []
var grey_buildings = []
var orange_buildings = []
var purple_buildings = []
var red_buildings = []
var yellow_buildings = []
var blue_buildings = []



//Populating blue buildings deck
blue_buildings[0] = new Image();
blue_buildings[0].src = 'assets/blue_building (1).png';

//Populating common buildings deck (this one could be optimized including a loop to check an array that contains the different types of common buildings)
for (i = 1 ; i < 5 ; i++) {
  black_buildings[i-1] = new Image();
  green_buildings[i-1] = new Image();
  grey_buildings[i-1] = new Image();
  orange_buildings[i-1] = new Image();
  red_buildings[i-1] = new Image();
  yellow_buildings[i-1] = new Image();

  black_buildings[i-1].src = 'assets/black_building (' + i + ').png';
  green_buildings[i-1].src = 'assets/green_building (' + i + ').png';
  grey_buildings[i-1].src = 'assets/grey_building (' + i + ').png';
  orange_buildings[i-1].src = 'assets/orange_building (' + i + ').png';
  red_buildings[i-1].src = 'assets/red_building (' + i + ').png';
  yellow_buildings[i-1].src = 'assets/yellow_building (' + i + ').png';
}

//Populating purple buildings deck
for (i = 1 ; i < 16 ; i++) {
  purple_buildings[i-1] = new Image();
  purple_buildings[i-1].src = 'assets/purple_building (' + i + ').png';
}
