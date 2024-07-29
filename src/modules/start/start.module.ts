import { Module } from '@nestjs/common';

import { StartScene } from './start.scene';

@Module({
  providers: [StartScene],
  exports: [StartScene],
})
export class StartModule {}
