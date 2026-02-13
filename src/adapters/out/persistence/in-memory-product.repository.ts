import { Product } from "../../../domain/entities/Product.js";
import type { ProductRepository } from "../../../application/ports/out/product.repository.js";

export class InMemoryProductRepository implements ProductRepository{

    private products: Product[] = [];

    async save(produto: Product): Promise <void> {
        this.products.push(produto);
    }

    async searchByName(name: string): Promise<Product | null> {
        
        const find = this.products.find(
            (p) => p.name.toLowerCase() === name.toLowerCase()
        );

        return find || null;
    }
}