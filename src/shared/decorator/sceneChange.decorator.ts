import { IContext } from '../context.abstract';

const validScenes = ['help', 'start', 'transfer'];

export function SceneChange() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const ctx = args[0] as IContext;

      if (ctx.message && 'text' in ctx.message) {
        const message = ctx.message.text;

        if (message.startsWith('/')) {
          const sceneName = message.substring(1);

          if (validScenes.includes(sceneName)) {
            return ctx.scene.enter(sceneName);
          }
        }
      }

      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}
