type UnitOfMeasure = 'kg' | 'un';

export class Product {
  private _name: string;
  private _unit: UnitOfMeasure;
  private _cost: number;
  private _margin: number;

  constructor(name: string, unit: UnitOfMeasure, cost: number, margin: number) {
    // Valida antes de atribuir
    this.validate(name, unit, cost, margin);

    this._name = name.trim();
    this._unit = unit;
    this._cost = cost;
    this._margin = margin;
  }

  private validate(name: string, unit: UnitOfMeasure, cost: number, margin: number): void {
    // Corrigido: usando o parâmetro 'name' corretamente
    if (!name || name.trim().length === 0) {
      throw new Error('O nome não pode estar vazio');
    }

    const validUnits: UnitOfMeasure[] = ['kg', 'un'];
    if (!validUnits.includes(unit)) {
      throw new Error('A unidade deve ser kg ou un');
    }

    if (cost < 0) {
      throw new Error('O custo não pode ser menor que zero');
    }

    if (margin < 0) {
      throw new Error('A margem não pode ser menor que zero');
    }
  }

  // Getters em inglês seguindo as propriedades
  get name(): string { return this._name; }
  get unit(): UnitOfMeasure { return this._unit; }
  get cost(): number { return this._cost; }
  get margin(): number { return this._margin; }

  // Lógica de cálculo (Regra de Negócio)
  get salesPrice(): number {
    return this._cost + (this._cost * (this._margin / 100));
  }
}