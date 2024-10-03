import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsDate()
    publicationDate: Date;

    @IsNotEmpty()
    @IsString()
    gener: string; 
}