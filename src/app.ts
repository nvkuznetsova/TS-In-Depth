showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// -----------TS-in-Depth--------------- //

enum Category {JavaScript, CSS, HTML, TypeScript, Angular};

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
}

function getAllBooks(): readonly Book[] {
  const books: readonly Book[] = <const>[
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ]

  return books;  
}

function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
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

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  const books = getAllBooks();
  const titles: string[] = [];

  for (const book of books) {
    if ((<any>book).category === category) {
      titles.push(book['title']);
    }
  }
  return titles;
}

function logBookTitles(titles: string[]): void {
  titles.forEach((title: string) => console.log(title));
}

function getBookAuthorByIndex(index: number): [string, string] {
  const books = getAllBooks();
  const { title, author } = books[index] as any;
  return [title, author];
}

function calcTotalPages(): bigint {
  const data = <const>[
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
  ];

  const pages: bigint = data.reduce((acc: bigint, obj: any) => {
    return  acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  }, BigInt(0));

  return pages;
}

function getBookById(id: number): Book | undefined {
  const books = getAllBooks();
  return books.find(book => book['id'] === id);
}

function createCustomerId(name: string, id: number): string {
  return `${name}${id}`
}

function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Create customer: ${name}`);
  if (age) {
    console.log(age)
  }

  if(city) {
    console.log(city)
  }
}

function сheckoutBooks(customer: string, ...bookIds: number[]): string[] {
  console.log(`Checking out books for: ${customer}`);

  const titles: string[] = [];
  for (const id of bookIds) {
    const book: any = getBookById(id);
    if(book && book.available) {
      titles.push(book.title);
    }
  }

  return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
  const books: ReadonlyArray<any> = getAllBooks();

  if(args.length === 1) {
    const [ arg ] = args;

    if(typeof arg === 'string') {
      return books.filter(book => book.author === arg).map(book => book.title);
    } else if(typeof arg === 'boolean') {
      return books.filter(book => book.available === arg).map(book => book.title);
    }
  } else if(args.length === 2) {
    const [ id, available ] = args;

    if(typeof id === 'number' && typeof available === 'boolean') {
      return books.filter(book => book.available === available && book.id === id).map(book => book.title);
    }
  }
}

function assertStringValue(value: any): asserts value is string {
  if(typeof value !== 'string') {
    throw new Error('value should have been a string');
  }
}

function bookTitleTransform(title: any): string {
  assertStringValue(title);

  return title.split('').reverse().join('');
}

function printBook(book: Book): void {
  console.log(`${book.author} by ${book.author}`);
}

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
console.log(bookTitleTransform('CSS Secrets'));
console.log(bookTitleTransform(1));