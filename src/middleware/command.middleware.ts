import { IContext } from 'src/shared';
import { MiddlewareFn } from 'telegraf';

export const sceneMiddleware: MiddlewareFn<IContext> = async (ctx, next) => {
  if (ctx.message && 'text' in ctx.message) {
    const message = ctx.message.text;

    if (message.startsWith('/')) {
      const sceneName = message.substring(1);

      const validScenes = ['help', 'transfer', 'approve', 'start'];

      if (validScenes.includes(sceneName)) {
        return ctx.scene.enter(sceneName);
      }
    }
  }

  return next();
};
