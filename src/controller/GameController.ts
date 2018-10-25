import { Controller, Query, Mutation } from 'vesper';
import { EntityManager } from 'typeorm';
import { Game } from '../entity/Game';
import { io } from '../index';

@Controller()
export class GameController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  allGames() {
    return this.entityManager.find(Game);
  }

  @Query()
  game({ id }) {
    return this.entityManager.findOne(Game, id);
  }

  @Mutation()
  gameSave() {
    const game = this.entityManager.create(Game);

    io.emit('action', {
      type: 'ADD_GAME',
      payload: game
    });
    return this.entityManager.save(Game, game);
  }

  @Mutation()
   async changeStatus(id){
      const currentGame = await this.entityManager.findOne(Game , id)
      currentGame.status = "Pending"
      return await this.entityManager.save(Game , currentGame)
    }

  @Mutation()
    async changeStatus2(id){
      const currentGame = await this.entityManager.findOne(Game , id)
      currentGame.status= "Started"
      return await this.entityManager.save(Game, currentGame)
    }
}
