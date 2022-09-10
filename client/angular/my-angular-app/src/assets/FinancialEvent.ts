export class FinancialEvent {
  constructor(
    public id: number,
    public amount: number,
    public type: string,
    public description: string
  ) {}
}
