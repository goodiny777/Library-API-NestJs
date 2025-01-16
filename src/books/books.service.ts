import { Injectable } from '@nestjs/common';
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
}
