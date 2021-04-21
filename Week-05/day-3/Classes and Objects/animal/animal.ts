// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

export class Animal {
  type: string
  hunger: number = 5;
  thirst: number = 5;
constructor(type:string){
  this.type = type
}
  eat(): void {
    this.hunger--;
  }
  drink(): void {
    this.thirst--;
  }
  play(): void {
    this.hunger++;
    this.thirst++;
  }
}

const Jumpy = new Animal(`Jumpy`);
Jumpy.play();
console.log(Jumpy);
Jumpy.drink();
console.log(Jumpy);
Jumpy.eat();
console.log(Jumpy);
