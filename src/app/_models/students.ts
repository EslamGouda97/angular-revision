export class Students {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public rate: number
  ) {}
  public sayHello(): string {
    return `${this.name} is saying Hello`;
  }
}
