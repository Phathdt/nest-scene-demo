import { IContext } from 'src/shared';
import { session, SessionStore } from 'telegraf';

import { ConfigService } from '@nestjs/config';
import { Redis } from '@telegraf/session/redis';

export function sessionMiddleware(configService: ConfigService) {
  const store = Redis({
    url: configService.get<string>('REDIS_URI'),
  }) as SessionStore<IContext>;

  return session({
    store: store,
  });
}
