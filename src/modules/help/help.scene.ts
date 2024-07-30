import { Scene, SceneEnter } from 'nestjs-telegraf';
import { IContext } from 'src/shared';

@Scene('help')
export class HelpScene {
  @SceneEnter()
  async help(ctx: IContext) {
    ctx.reply('helpppppppp');

    return ctx.scene.leave();
  }
}
