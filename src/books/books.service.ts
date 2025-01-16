import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private booksRepository: Repository<Book>,
    ) { }

    create(book: Book): Promise<Book> {
        const bookObj = this.booksRepository.create({
            name: book.name,
            price: book.price,
            author: book.author
        });
        return this.booksRepository.save(bookObj);
    }

    async findAll(): Promise<Book[]> {
        return this.booksRepository.find();
    }

    async findOne(id: string): Promise<Book> {
        const book = await this.booksRepository.findOne({ where: { id } });
        if (!book) {
            throw new NotFoundException(`Book with id ${id} not found`);
        }
        return book;
    }

    async remove(id: string) {
        const book = await this.booksRepository.findOne({ where: { id } });
        if (!book) {
            throw new NotFoundException(`Book with id ${id} not found`);
        }
        return await this.booksRepository.delete(id);
    }

    async update(id: string, body: Book): Promise<Book> {
        const book = await this.booksRepository.findOne({ where: { id } });
        if (!book) {
            throw new NotFoundException(`Book with id ${id} not found`);
        }
        Object.assign(book, body);
        return await this.booksRepository.save(book);

    }
}
