import { TelegrafModule, TelegrafModuleOptions } from 'nestjs-telegraf';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppHandler } from './app.handler';
import { SetupModule } from './modules/setup';
import { WelcomeModule } from './modules/wellcome';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [] }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService): TelegrafModuleOptions {
        return {
          token: configService.getOrThrow<string>('BOT_TOKEN'),
          launchOptions: {},
        };
      },
    }),
    SetupModule,
    WelcomeModule,
  ],
  controllers: [AppController],
  providers: [AppHandler],
})
export class AppModule {}
