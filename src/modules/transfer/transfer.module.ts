import { Module } from '@nestjs/common';

import { TransferScene } from './transfer.scene';

@Module({
  providers: [TransferScene],
  exports: [TransferScene],
})
export class TransferModule {}
