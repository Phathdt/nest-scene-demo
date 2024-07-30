import { Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';

@Scene('start')
export class StartScene {
  @SceneEnter()
  async start(ctx: IContext) {
    ctx.reply('startttttttttt');

    return ctx.scene.leave();
  }
}
