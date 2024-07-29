import { TelegrafModule, TelegrafModuleOptions } from 'nestjs-telegraf';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppHandler } from './app.handler';
import { botMiddleware } from './middleware/bot.middleware';
import { HelpModule } from './modules/help';
import { StartModule } from './modules/start';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [] }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService): TelegrafModuleOptions {
        return {
          middlewares: [botMiddleware(configService)],
          include: [AppModule],
          token: configService.getOrThrow<string>('BOT_TOKEN'),
          launchOptions: {},
        };
      },
    }),
    StartModule,
    HelpModule,
  ],
  controllers: [AppController],
  providers: [AppHandler],
})
export class AppModule {}
