import { IsString, IsNumber, Min, MaxLength, IsEmpty, IsOptional } from 'class-validator';


export class UpdateUserDto {

    @IsEmpty({ message: 'ID must not be provided' })
    id: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;

}