import { Product } from "../../../domain/entities/Product.js";

export interface ProductRepository{
    
    save(produto: Product ): Promise<void>;

    searchByName(name: string): Promise< Product | null>;
}