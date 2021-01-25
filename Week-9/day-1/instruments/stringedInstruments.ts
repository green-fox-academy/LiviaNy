abstract class stringedIstruments extends Instruments {
  _numberOfStrings: number;
  abstract sound(): void;
  play(): void {}
}
