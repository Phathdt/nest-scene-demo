import { On, Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';

@Scene('start')
export class StartScene {
  @SceneEnter()
  async start(ctx: IContext) {
    ctx.reply('on start');
  }

  @On('text')
  async onText(ctx: IContext) {
    ctx.reply(`on start reply message${ctx.message.text}`);
  }
}
