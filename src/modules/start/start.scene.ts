import { On, Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';
import { SceneChange } from 'src/shared/decorator/sceneChange.decorator';

@Scene('start')
export class StartScene {
  @SceneEnter()
  async start(ctx: IContext) {
    ctx.reply('on start');
  }

  @On('text')
  @SceneChange()
  async onText(ctx: IContext) {
    console.log('🚀 ~ StartScene ~ onText ~ ctx:', ctx.scene);

    ctx.reply(`on start reply message ${ctx.message.text}`);
  }
}
