import { Context as BaseContext, Scenes as TelegrafScenes } from 'telegraf';
import { CallbackQuery, Message, Update } from 'telegraf/typings/core/types/typegram';
import { SceneContextScene } from 'telegraf/typings/scenes';

import PhotoMessage = Message.PhotoMessage;

export interface IContext extends BaseContext {
  update: Update.CallbackQueryUpdate & { message: Message.PhotoMessage };
  scene: SceneContextScene<IContext, SceneSession>;
  session: SessionData;
  message: Update.New &
    Update.NonChannel &
    Message &
    PhotoMessage & { text?: string };
  callbackQuery: CallbackQuery & { data: string };
}

interface SessionData extends TelegrafScenes.SceneSession<SceneSession> {
  messageId?: number;
  dmMessageId?: number;
}

interface SceneSession extends TelegrafScenes.SceneSessionData {
  state: {
    token?: string;
  };
}
