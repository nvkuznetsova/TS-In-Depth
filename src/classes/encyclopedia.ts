import { ReferenceItem } from "./ref-item";

export default class Encyclopedia  extends ReferenceItem {
    constructor(
      newTitle: string,
      newYear: number,
      public edition: number) {
      super(newTitle, newYear);
    }
  
    printItem(): void {
      super.printItem();
      console.log(`Edition: ${this.edition} (${this.year})`);
    }
  
    printCitation(): void {
      console.log(`${this.title} - ${this.year}`);
    }
  }