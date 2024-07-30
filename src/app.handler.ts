import { Command, Update } from 'nestjs-telegraf';

import { IContext } from './shared';

@Update()
export class AppHandler {
  @Command('start')
  onStart(ctx: IContext) {
    ctx.scene.enter('start');
  }

  @Command('help')
  onHelp(ctx: IContext) {
    ctx.scene.enter('help');
  }

  @Command('transfer')
  onTransfer(ctx: IContext) {
    ctx.scene.enter('transfer');
  }

  @Command('list_transaction')
  onListTransaction(ctx: IContext) {
    ctx.scene.enter('list_transaction');
  }
}
