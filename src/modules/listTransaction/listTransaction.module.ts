import { Module } from '@nestjs/common';

import { ListTransactionScene } from './listTransaction.scene';

@Module({
  providers: [ListTransactionScene],
  exports: [ListTransactionScene],
})
export class ListTransactionModule {}
