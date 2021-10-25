export class Institution {
  constructor(
    public name: string,
    public description: string,
    public logo: string,
    public userList: string[],
    public courseList: number[]
  ) {}
}
