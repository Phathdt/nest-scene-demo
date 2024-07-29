import { Module } from '@nestjs/common';

import { HelpScene } from './help.scene';

@Module({
  providers: [HelpScene],
  exports: [HelpScene],
})
export class HelpModule {}
