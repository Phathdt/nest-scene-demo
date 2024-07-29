import { On, Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';

@Scene('setup')
export class SetupScene {
  @SceneEnter()
  async setup(ctx: IContext) {
    ctx.reply('on setup');
  }

  @On('text')
  async onText(ctx: IContext) {
    ctx.reply(`on Setup reply message${ctx.message.text}`);
  }
}
