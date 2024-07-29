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
    console.log('🚀 ~ StartScene ~ onText ~ ctx:', ctx.scene);

    if (ctx.message && 'text' in ctx.message) {
      const message = ctx.message.text;

      if (message.startsWith('/')) {
        const sceneName = message.substring(1);

        const validScenes = ['help', 'start'];

        if (validScenes.includes(sceneName)) {
          return await ctx.scene.enter(sceneName);
        }
      }
    }

    ctx.reply(`on start reply message${ctx.message.text}`);
  }
}
