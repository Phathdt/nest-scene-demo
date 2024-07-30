import { Command, Context, Message, Wizard, WizardStep } from 'nestjs-telegraf';
import { SCENES } from 'src/shared/const';
import { WizardContext } from 'telegraf/typings/scenes';

type TransferContext = WizardContext & {
  wizard: { state: { recipient: string; amount: number } };
};

@Wizard('transfer')
export class TransferScene {
  @Command(SCENES.filter((t) => t !== 'transfer'))
  async onCommand(
    @Context() ctx: WizardContext,
    @Message() msg: { text: string },
  ) {
    const command = msg.text.split(' ')[0].split('/')[1];
    await ctx.scene.leave();
    await ctx.scene.enter(command);
  }

  @WizardStep(1)
  async step1(@Context() ctx: TransferContext) {
    ctx.wizard.next();

    await ctx.reply('Bạn muốn chuyển tiền cho ai?');
  }

  @WizardStep(2)
  async step2(@Context() ctx: TransferContext) {
    if ('text' in ctx.message) {
      ctx.wizard.state.recipient = ctx.message.text;
      ctx.wizard.next();

      await ctx.reply('Bạn muốn chuyển bao nhiêu tiền? (Đơn vị: $)');
    } else {
      await ctx.reply('Vui lòng nhập tên người nhận.');
    }
  }

  @WizardStep(3)
  async step3(@Context() ctx: TransferContext) {
    if ('text' in ctx.message) {
      const amount = parseFloat(ctx.message.text);
      if (isNaN(amount)) {
        await ctx.reply('Vui lòng nhập một số hợp lệ.');
        return;
      }
      ctx.wizard.state.amount = amount;
      await ctx.reply(
        `Bạn vừa chuyển cho ${ctx.wizard.state.recipient} số tiền là ${ctx.wizard.state.amount} $.`,
      );
      return ctx.scene.leave();
    }

    await ctx.reply('Vui lòng nhập số tiền.');
  }
}
