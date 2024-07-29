import { Module } from '@nestjs/common';

import { SetupScene } from './setup.scene';

@Module({
  providers: [SetupScene],
  exports: [SetupScene],
})
export class SetupModule {}
