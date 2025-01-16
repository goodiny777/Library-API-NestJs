import { IsString, IsNumber, Min, MaxLength, IsEmpty, IsOptional } from 'class-validator';
import { User } from '../../user/user.entity';


export class UpdateBookDto {

    @IsEmpty({ message: 'ID must not be provided' })
    id: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsOptional()
    price: number;

    @IsString()
    @IsOptional()
    author: string;

    @IsEmpty({ message: 'User should not be provided' })
    user: User;
}