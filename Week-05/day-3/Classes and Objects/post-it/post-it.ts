// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
  backgroundColour: string;
  text: string;
  textColour: string;

  constructor(backgroundColour: string, text: string, textColour: string) {
    this.backgroundColour = backgroundColour;
    this.text = text;
    this.textColour = textColour;
  }
}
const idea1 = new PostIt(`Orange`, `Idea 1`, `Blue`);
console.log(idea1);
const awesome = new PostIt(`pink`, `Awesome`, `black`);
console.log(awesome);
const superB = new PostIt(`yellow`, `Superb!`, `green`);
console.log(superB);
