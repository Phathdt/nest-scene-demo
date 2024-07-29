import { Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';

@Scene('scenes.setup')
export class SetupScene {
  @SceneEnter()
  async setup(ctx: IContext) {
    ctx.reply('setup');
  }
}
