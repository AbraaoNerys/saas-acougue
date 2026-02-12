type UnidadeMedida = 'kg' | 'un' ;

export class Product {
    private _nome: string;
    private _unidade:UnidadeMedida;
    private _custo: number;
    private _margem: number;

    constructor(nome: string, unidade: UnidadeMedida, custo: number, margem: number) { 
        this.validar(nome ,unidade, custo , margem);

        this._nome = nome.trim();
        this._unidade = unidade;
        this._custo = custo;
        this._margem = margem;
    }
    

    private validar(nome: string, unidade: UnidadeMedida, custo: number, margem: number): void {
        if(!nome || nome.trim().length === 0){
            throw new Error('O nome não pode estar vazio');
        }

        const unidadesValidas = ['kg' , 'un']
        if(!unidadesValidas.includes(unidade)){
            throw new Error('A unidade deve ser kg ou un');
        }

        if (custo < 0) {
            throw new Error('O custo não pode ser menor que zero');
        }

        if (margem < 0) {
            throw new Error('A margem não pode ser menor que zero');
        }
    }

    get nome(): string { return this._nome;}
    get unidade(): UnidadeMedida { return this._unidade;}
    get custo(): number { return this._custo;}
    get margem(): number { return this._margem;}

    get precoVenda(): number{
        return this.custo + (this.custo * (this._margem / 100));    
    }

};