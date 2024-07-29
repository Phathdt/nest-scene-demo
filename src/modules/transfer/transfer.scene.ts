import { On, Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';
import { SceneChange } from 'src/shared/decorator/sceneChange.decorator';

@Scene('transfer')
export class TransferScene {
  @SceneEnter()
  async start(ctx: IContext) {
    ctx.reply('on transfer');
  }

  @On('text')
  @SceneChange()
  async onText(ctx: IContext) {
    console.log('🚀 ~ TransferScene ~ onText ~ ctx:', ctx.scene);

    ctx.reply(`on transfer reply message ${ctx.message.text}`);
  }
}
