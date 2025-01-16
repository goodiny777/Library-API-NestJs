import { IsString, IsNumber, Min, MaxLength, IsEmpty } from 'class-validator';


export class CreateUserDto {

    @IsEmpty({ message: 'ID should not be provided' })
    id: string;

    @IsString()
    @Min(6)
    @MaxLength(30)
    email: string;

    @IsString()
    @Min(6)
    @MaxLength(30)
    password: string;
}