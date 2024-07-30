import { IContext } from 'src/shared';
import { Middleware } from 'telegraf';

export const commandMiddleware: Middleware<IContext> = async (ctx, next) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>');
  console.log(ctx.text);
  console.log(ctx.scene);
  console.log('>>>>>>>>>>>>>>>>>>>>>');
  next();
};
