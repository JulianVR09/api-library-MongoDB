import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  async create(@Body() createBook: any) {
    return this.bookService.create(createBook);
  }
}
