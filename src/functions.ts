import { Book, LibMgrCallback } from "./interfaces";
import { Category } from "./emuns";
import { BookOrUndefined, BookProperties } from "./types";

export function getAllBooks(): readonly Book[] {
  const books: readonly Book[] = <const>[
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
  ]

  return books;
}

export function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
  const num: number = books.length;
  let title: string = '';

  for (const book of books) {
    if (book['available']) {
      title = book['title'];
      break;
    }
  }
  console.log(num);
  console.log(title);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  const books = getAllBooks();
  const titles: string[] = [];

  for (const book of books) {
    if ((<any>book).category === category) {
      titles.push(book['title']);
    }
  }
  return titles;
}

export function logBookTitles(titles: string[]): void {
  titles.forEach((title: string) => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
  const books = getAllBooks();
  const { title, author } = books[index] as any;
  return [title, author];
}

export function calcTotalPages(): bigint {
  const data = <const>[
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
  ];

  const pages: bigint = data.reduce((acc: bigint, obj: any) => {
    return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  }, BigInt(0));

  return pages;
}

export function getBookById(id: number): BookOrUndefined {
  const books = getAllBooks();
  return books.find(book => book['id'] === id);
}

export function createCustomerId(name: string, id: number): string {
  return `${name}${id}`
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Create customer: ${name}`);
  if (age) {
    console.log(age)
  }

  if (city) {
    console.log(city)
  }
}

export function сheckoutBooks(customer: string, ...bookIds: number[]): string[] {
  console.log(`Checking out books for: ${customer}`);

  const titles: string[] = [];
  for (const id of bookIds) {
    const book: any = getBookById(id);
    if (book && book.available) {
      titles.push(book.title);
    }
  }

  return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
  const books: ReadonlyArray<any> = getAllBooks();

  if (args.length === 1) {
    const [arg] = args;

    if (typeof arg === 'string') {
      return books.filter(book => book.author === arg).map(book => book.title);
    } else if (typeof arg === 'boolean') {
      return books.filter(book => book.available === arg).map(book => book.title);
    }
  } else if (args.length === 2) {
    const [id, available] = args;

    if (typeof id === 'number' && typeof available === 'boolean') {
      return books.filter(book => book.available === available && book.id === id).map(book => book.title);
    }
  }
}

export function assertStringValue(value: any): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('value should have been a string');
  }
}

export function bookTitleTransform(title: any): string {
  assertStringValue(title);

  return title.split('').reverse().join('');
}

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
  if (typeof book[prop] === 'function') {
    return book[prop]['name'];
    // return (book[prop] as Function).name;
  }

  return book[prop];
}

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
  setTimeout(() => {
    try {
      const titles: string[] = getBookTitlesByCategory(category);
      if (titles.length) {
        callback(null, titles);
      } else {
        throw new Error('No books found');
      }
    } catch(err) {
      callback(err, null);
    }
  }, 2000)
}

export const logCategorySearch: LibMgrCallback = (err: Error, titles: string[]): void => {
  if (err) {
    console.log(err.message);
  } else {
    titles.forEach(title => console.log(title));
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const titles: string[] = getBookTitlesByCategory(category);
        if (titles.length) {
          resolve(titles);
        } else {
          reject('No books found');
        }
    }, 2000);
  });
}

export async function logSearchResults(category: Category) {
  const titles: string[] = await getBooksByCategoryPromise(category);
  console.log(titles.length);
}