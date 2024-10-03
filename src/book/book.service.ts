import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

    async create(book: CreateBookDto) {
        const newBook = new this.bookModel(book)
        return await newBook.save();
    }

    async findAll() {
        return await this.bookModel.find().exec();
    }

    async update(id: string, book: UpdateBookDto){
        return await this.bookModel.findByIdAndUpdate(id, book, {
            new: true
        }).exec();
    }

    async findOne(id: string){
        return await this.bookModel.findById(id).exec();
    }

    async remove(id: string){
        return await this.bookModel.findByIdAndDelete(id).exec();
    }
}
