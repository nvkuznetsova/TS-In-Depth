import { timeout } from "../decorators";

abstract class ReferenceItem {
    // title: string;
    // year: number;
    private _publisher: string;
  
    static department: string = 'Research Dept';
  
    get publisher(): string {
      return this._publisher.toLocaleUpperCase();
    }
  
    set publisher(publisher: string) {
      this._publisher = publisher;
    }
  
    constructor(public title: string, protected year: number) { }
  
    @timeout(1000)
    printItem(): void {
      console.log(`${this.title} was published in ${this.year}`);
      console.log(`Department: ${ReferenceItem.department}`);
    }
  
    abstract printCitation(): void;
  }

  export { ReferenceItem };