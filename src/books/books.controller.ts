import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) { }

    @Post()
    async createBook(@Body() book: CreateBookDto) {
        return this.booksService.create(book);
    }
}
