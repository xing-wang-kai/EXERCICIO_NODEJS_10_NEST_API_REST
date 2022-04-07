/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './controllers/Livros.controller'
import { LivrosServices } from './services/Livros.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Livros } from './models/Livros.models';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hoot',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Livros])
  ],

  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosServices],
})
export class AppModule {}
