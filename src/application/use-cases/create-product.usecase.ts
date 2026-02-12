import { Product } from "../../domain/entities/Product.js";
import type { ProductRepository } from "../ports/out/product.repository.js";


type createProductInput = {
    name: string;
    unidade: "kg" | "un" ;
    custo: number;
    margem: number;
}


type createProductOutput = {
    name: string;
    precoVenda:number;
}

export class CreateProductUseCase {
    constructor(private repository: ProductRepository) {}

    async execute(input: createProductInput): Promise<createProductOutput>{
        
        const productExists = await this.repository.searchByName(input.name);

        if (productExists){
            throw new Error("Produto ja cadastrado com esse nome")
        }

        const newProduct = new Product(
            input.name,
            input.unidade,
            input.custo,
            input.margem
        );

        await  this.repository.save(newProduct);

        return {
            name: newProduct.nome,
            precoVenda: newProduct.precoVenda
        };
    }
}


