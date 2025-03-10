import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(user: User): Promise<User> {

        const userObj = this.userRepository.create({
            email: user.email,
            password: user.password
        });
        return this.userRepository.save(userObj);
    }
}
