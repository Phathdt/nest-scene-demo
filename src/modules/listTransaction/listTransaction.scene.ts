import { Command, Context, Message, Wizard, WizardStep } from 'nestjs-telegraf';
import { SCENES } from 'src/shared/const';
import { WizardContext } from 'telegraf/typings/scenes';

type ListWalletContext = WizardContext & {
  wizard: { state: { network: string; wallet: string } };
};

@Wizard('list_transaction')
export class ListTransactionScene {
  @Command(SCENES.filter((t) => t !== 'list_transaction'))
  async onCommand(
    @Context() ctx: WizardContext,
    @Message() msg: { text: string },
  ) {
    const command = msg.text.split(' ')[0].split('/')[1];
    await ctx.scene.leave();
    await ctx.scene.enter(command);
  }

  @WizardStep(1)
  async step1(@Context() ctx: ListWalletContext) {
    ctx.wizard.next();

    await ctx.reply('Which network');
  }

  @WizardStep(2)
  async step2(@Context() ctx: ListWalletContext) {
    if ('text' in ctx.message) {
      ctx.wizard.state.network = ctx.message.text;
      ctx.wizard.next();

      await ctx.reply('Which wallet');
    } else {
      await ctx.reply('Which network!!!');
    }
  }

  @WizardStep(3)
  async step3(@Context() ctx: ListWalletContext) {
    if ('text' in ctx.message) {
      ctx.wizard.state.wallet = ctx.message.text;

      await ctx.reply(
        `network ${ctx.wizard.state.network} wallet ${ctx.wizard.state.wallet}`,
      );

      return ctx.scene.leave();
    }

    await ctx.reply('Which wallet!');
  }
}
