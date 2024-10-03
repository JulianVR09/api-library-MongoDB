import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://julianvillacis02:y435FLgRA6sQMBiO@cluster0.t08cs.mongodb.net/LibraryJulianVR?retryWrites=true&w=majority&appName=Cluster0',
    ),
    BookModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
