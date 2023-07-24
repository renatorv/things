import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsModule } from './things/things.module';
import { CommonModule } from './common/common.module';
import { CategoriesModule } from './categories/categories.module';
import { FirebaseService } from './auth/firebase/firebase.service';
import { AutyModule } from './auty/auty.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ThingsModule, CategoriesModule, CommonModule, AutyModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
