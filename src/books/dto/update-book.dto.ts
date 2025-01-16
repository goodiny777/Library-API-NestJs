import { IsString, IsNumber, Min, MaxLength, IsEmpty, IsOptional } from 'class-validator';


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
}