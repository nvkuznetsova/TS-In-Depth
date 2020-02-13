import { Book, Logger } from "./interfaces";
import { Category } from "./emuns";
import { ReferenceItem, RefBook } from "./classes";
import { PersonBook } from "./types";
import { getAllBooks, purge } from "./functions";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// -----------TS-in-Depth--------------- //

const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
} ;

// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(2));
// console.log(calcTotalPages())

// Task 3
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach((title: string) => console.log(title));

// console.log(getBookById(10));

// let myId = createCustomerId('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = createCustomerId;
// myId = idGenerator('Boris', 20);
// console.log(myId);

// idGenerator = (name: string, id: number) => `${id}${name}`;
// console.log(idGenerator('Name', 77))

// createCustomer('Ann');
// createCustomer('Ann', 20);
// createCustomer('Ann', 20, 'Spb');

// const books = getBookTitlesByCategory();
// console.log(books);

// logFirstAvailable();

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// console.log(getTitles(false));
// console.log(bookTitleTransform('CSS Secrets'));
// console.log(bookTitleTransform(1));

// printBook(myBook);
// myBook.markDamaged('coffee');

// Task 04.02
const logDamage: Logger = (reason: string) => console.log(`Damage: ${reason}`);
logDamage('missing back cover');

// const favouriteAuthor: Author = {
//   name: 'Ann',
//   email: 'ann@gmail.com',
//   numBooksPublished: 10,
// }

// const favouriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'boris@gmail.com',
//   department: 'Classical Literature',
//   assistCustomer: (name: string) => console.log(`Assist: ${name}`), 
// }

// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// };

// console.log(offer.paper?.magazine);

// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(myBook, 'markDamaged'));

// const ref = new ReferenceItem('TypeScript', 2020);
// ref.printItem();
// ref.publisher = 'ramdom publisher';
// console.log(ref.publisher)

// Task 05.02
const refBook = new RefBook('Encyclopedia', 2020, 3);
refBook.printItem();
refBook.printCitation();

// const favouriteLibrarian: Librarian = new UniversityLibrarian('Boris', 'boris@gmail.com', 'Classical Literature');
// favouriteLibrarian.assistCustomer('Ann');

const personBoook: PersonBook = {
  name: 'Ann',
  email: 'ann@gmail.com',
  id: 1,
  title: 'Book',
  author: 'author',
  available: true,
  category: Category.JavaScript,
}

console.log(personBoook);

// Task 06.05
import('./classes').then(module => {
  const reader = new module.Reader();
  reader.name = 'Anna';
  reader.take(getAllBooks()[1]);
  console.log(reader);
});

// Task 07.01
const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result = purge(inventory);
// const result = purge<Book>(inventory);
// console.log(result);

// const res = purge([1, 2, 3, 4]) ;
// console.log(res);

// Task 07.02