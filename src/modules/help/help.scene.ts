import { On, Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';
import { SceneChange } from 'src/shared/decorator/sceneChange.decorator';

@Scene('help')
export class HelpScene {
  @SceneEnter()
  async help(ctx: IContext) {
    ctx.reply('on help');
  }

  @On('text')
  @SceneChange()
  async onText(ctx: IContext) {
    console.log('🚀 ~ StartScene ~ onText ~ ctx:', ctx.scene);

    ctx.reply(`on help reply message ${ctx.message.text}`);
  }
}
