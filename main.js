function fillResources() {
  //Available types of resources
  const resourcesTypes = ['brick', 'glass', 'stone', 'wheat', 'wood'];
  //Number of each type of resource
  const resourceAmount = 3;

  let deck = [];
  for (let i = 0; i < resourceAmount; i++) {
    for (let j = 0; j < resourcesTypes.length; j++) {
      deck.push(resourcesTypes[j]);
    }
  }
  shuffle(deck);
  return deck;
}

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    let currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

export const TinyTowns = {
  setup: () => {
    let deck = fillResources();
    let start = {
      players: [
        {
          id: 0,
          board: Array(16).fill(null),
          done: false,
        },
        {
          id: 1,
          board: Array(16).fill(null),
          done: false,
        }
      ],
      deck: deck,
      currentCard: deck[deck.length - 1],
    };

    return start;
  },

  moves: {
    checkDone: (G, ctx, id) => {
      if (G.players[id].done) {
        G.players[id].done = false;
      }
      G.players[id].done = true;
    }
  },

  turn: {
    // End turn if all players check "done"
    endIf: (G, ctx) => {
      if (G.players.every(player => player.done === true)) {
        return true;
      }
    },

    onEnd: (G, ctx) => {
      G.players.forEach(player => player.done = false);
      // When turn is over, shuffle resource deck and/or draw new card
      if (G.deck.length > 1) {
        G.deck.pop();
      } else {
        G.deck = fillResources();
      }
      G.currentCard = G.deck[G.deck.length - 1];
    }
  },
};
