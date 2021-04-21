// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating an instance, we need to specify the color and the width
// Every sharpie object is created with a default 100 as inkAmount
// We can use() the sharpie objects which decreases inkAmount

export class Sharpie {
  colour: string;
  width: number;
  inkAmount: number = 10;

  use(): void {
    this.inkAmount--;
  }

  constructor(colour: string, width: number) {
    this.colour = colour;
    this.width = width;
    this.inkAmount;
  }
}

//testing
let greenSharpie = new Sharpie(`green`, 10);
greenSharpie.use();
greenSharpie.use();
console.log(greenSharpie);
