import { Book, Person, Author } from './interfaces';

export type BookProperties = keyof Book;
export type PersonBook = Person | Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWOEmail = Omit<Author, 'email'>;
export type СreateCustomerFunctionType  = (name: string, age?: number, city?: string) => void;