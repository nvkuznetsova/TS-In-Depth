import * as Interfaces from '../interfaces';
import { sealed, logger, writable } from '../decorators';

@sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;
  
    assistCustomer(custName: string): void {
      console.log(`${this.name} assist ${custName}`);
    }

    @writable(true)
    assistFaculty() {
      console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity() {
      console.log('Teaching communit');
    }
  }

  export { UniversityLibrarian };