import { IsString, IsNumber, Min, MaxLength, IsEmpty } from 'class-validator';


export class CreateBookDto {

    @IsEmpty({ message: 'ID must not be provided' })
    id: string;

    @IsString()
    @MaxLength(100)
    name: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsString()
    @MaxLength(50)
    author: string;
}