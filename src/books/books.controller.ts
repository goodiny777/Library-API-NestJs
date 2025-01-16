import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) { }

    @Post()
    async createBook(@Body() book: CreateBookDto) {
        return this.booksService.create(book);
    }

    @Get()
    async getALlBooks() {
        return this.booksService.findAll();
    }

    @Get(':id')
    async getBookById(@Param('id') id: string) {
        return this.booksService.findOne(id);
    }

    @Put(':id')
    async updateBook(@Param('id') id: string, @Body() book: UpdateBookDto) {
        return this.booksService.update(id, book);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: string) {
        return this.booksService.remove(id);
    }
}
