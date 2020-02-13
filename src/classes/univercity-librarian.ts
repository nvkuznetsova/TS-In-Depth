import * as Interfaces from '../interfaces';

class UniversityLibrarian implements Interfaces.Librarian {
    constructor(
      public name: string,
      public email: string,
      public department: string,
    ) { }
  
    assistCustomer(custName: string): void {
      console.log(`${this.name} assist ${custName}`);
    }
  }

  export { UniversityLibrarian };