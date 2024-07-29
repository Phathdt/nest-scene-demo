import { Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';

@Scene('scenes.welcome')
export class WelcomeScene {
  @SceneEnter()
  async setup(ctx: IContext) {
    ctx.reply('welcome');
  }
}
