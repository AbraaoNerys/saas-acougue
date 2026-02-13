import { Product } from "../../domain/entities/Product.js";
import type { ProductRepository } from "../ports/out/product.repository.js";


type CreateProductInput = {
    name: string;
    unit: "kg" | "un"; 
    cost: number;      
    margin: number;   
}

type CreateProductOutput = {
    name: string;
    salesPrice: number; 
}

export class CreateProductUseCase {
    constructor(private repository: ProductRepository) {}

    async execute(input: CreateProductInput): Promise<CreateProductOutput> {
        
        
        const productExists = await this.repository.searchByName(input.name);

        if (productExists) {
            throw new Error("Produto já cadastrado com esse nome");
        }

        
        const newProduct = new Product(
            input.name,
            input.unit,
            input.cost,
            input.margin
        );

        
        await this.repository.save(newProduct);

    
        return {
            name: newProduct.name,
            salesPrice: newProduct.salesPrice
        };
    }
}