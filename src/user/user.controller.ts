import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Get()
    async getAllUsers() {
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }
}
