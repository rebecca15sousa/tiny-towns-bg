import { Client } from 'boardgame.io/client';
import { TinyTowns } from './main';

class TinyTownsClient {
  constructor() {
    this.client = Client(
      {
        game: TinyTowns,
        numPlayers: 2,
      }
    );
    this.client.start();
  }
}

const app = new TinyTownsClient();
