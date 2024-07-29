import { On, Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';

@Scene('help')
export class HelpScene {
  @SceneEnter()
  async help(ctx: IContext) {
    ctx.reply('on help');
  }

  @On('text')
  async onText(ctx: IContext) {
    ctx.reply(`on help reply message${ctx.message.text}`);
  }
}
