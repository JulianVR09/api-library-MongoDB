import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Book {
    @Prop({required: true})
    title: string;

    @Prop()
    author: string;

    @Prop()
    publicationDate: Date;

    @Prop()
    gener: string; 
}

export const BookSchema = SchemaFactory.createForClass(Book);