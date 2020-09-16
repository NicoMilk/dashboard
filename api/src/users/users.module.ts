import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './user.model';
//import { WidgetModule } from 'src/widget/widget.module';

@Module({
  imports: [ /*WidgetModule,*/ MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, MongooseModule] // utile ?
})
export class UsersModule { }