export class Course {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public video: string,
    public modules: number[]
  ) {}
}
