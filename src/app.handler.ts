import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

import { IContext } from './shared';

@Update()
export class AppHandler {
  constructor(@InjectBot() private bot: Telegraf<IContext>) {
    this.bot.use(async (ctx, next) => {
      console.log(`Bot Update`, JSON.stringify(ctx.update, null, 4));

      return next();
    });
  }

  @Start()
  async start(ctx: IContext) {
    await ctx.reply('start');

    console.log('ctx.scene', ctx.scene);

    await ctx.scene.enter('scenes.setup');
  }
}
