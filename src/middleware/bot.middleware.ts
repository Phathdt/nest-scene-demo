import { IContext } from 'src/shared';
import { session, SessionStore } from 'telegraf';

import { ConfigService } from '@nestjs/config';
import { Mongo } from '@telegraf/session/mongodb';

export function botMiddleware(configService: ConfigService) {
  const store = Mongo({
    url: configService.get<string>('MONGODB_URI'),
    database: 'bot',
    collection: 'Sessions',
  }) as SessionStore<IContext>;

  return session({
    store: store,
  });
}
