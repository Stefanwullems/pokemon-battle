import { 
    JsonController,Post, Param, BadRequestError, HttpCode, NotFoundError, Get } from 'routing-controllers'
  import { Game } from '../entity/Game'
  import { io } from '../index'
  
  
  @JsonController()
  export default class GameController {

    @Get('/games')
    async allGames() { 
    const games = await Game.find()
    return { games }
    }

    @Get('/games/:id')
    getAdd(
        @Param('id') id: number
      ) {
        return Game.findOne(id)
      }


      @Post('/games')
      @HttpCode(201)
      async createAdd(
         game: Game
      ) {
         await game.save()

        io.emit('action', {
            type: 'ADD_GAME',
            payload: game
          })
          return game
      }
      
}
    
  
