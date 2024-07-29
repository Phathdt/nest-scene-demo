import { Command, InjectBot, Update } from 'nestjs-telegraf';
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

  @Command('start')
  onStart(ctx: IContext) {
    ctx.scene.enter('start');
  }

  @Command('help')
  onHelp(ctx: IContext) {
    ctx.scene.enter('help');
  }
}
